<template>
  <div class="loading-screen" v-if="processingOCR">
    <v-progress-circular indeterminate class="c" />
  </div>
  <div v-if="selectedImage" class="image-display-area">
    <div class="ocr-container" ref="containerRef">
      <img
        :src="selectedImage"
        @load="onImageLoad"
        :style="{ width: '100%', 'object-fit': 'contain' }"
        ref="imageRef"
        @mousedown.stop=""
      />
      <div
        v-for="(word, index) in textElements"
        :key="index"
        class="text-overlay"
        :style="{
          padding: '2px',
          position: 'absolute',
          left: `${word.bbox.x0}px`,
          top: `${word.bbox.y0}px`,
          width: `${word.bbox.x1 - word.bbox.x0}px`,
          height: `${word.bbox.y1 - word.bbox.y0}px`,
          border: selectedIndexes.includes(index)
            ? '2px solid green'
            : hoveredIndex === index
            ? '2px solid blue'
            : '1px solid transparent',
          cursor: 'pointer',
          backgroundColor: 'rgba(255, 255, 0, 0.3)',
        }"
        @click="handleTextClick(index)"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
      ></div>
    </div>
    <VPagination
      v-if="renderedImages.length > 1"
      v-model="currentImageIndex"
      :length="renderedImages.length"
      :totalVisible="4"
      class="pagination-center"
    />
    <v-input :modelValue="fullText" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onBeforeUnmount, watch } from "vue";
import { useStores } from "@directus/extensions-sdk";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = "/tta/pdf.worker.mjs";

const { useNotificationsStore } = useStores();
const notificationStore = useNotificationsStore();

const props = defineProps<{
  image: File;
  language: string;
}>();

const emit = defineEmits(["close", "loadingUpdate"]);

const hoveredIndex = ref(null),
  textElements = ref([]),
  imageRef = ref(),
  selectedImage = ref(),
  selectedIndexes = ref([]),
  blocks = ref([]),
  processingOCR = ref(false),
  renderedImages = ref<{ string: string; file: File; response?: any }[]>([]),
  currentImageIndex = ref(1);

const fullText = computed(() => {
  return selectedIndexes.value
    .sort()
    .map((e) => textElements.value[e]?.text)
    .join(" ");
});

onMounted(async () => {
  const file = await new Promise((res) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      res(e.target!.result);
    };

    if (props.image.type == "application/pdf") {
      reader.readAsArrayBuffer(props.image);
    } else reader.readAsDataURL(props.image);
  });

  if (props.image.type.startsWith("image/")) {
    loadImage(file as any, props.image);
  } else if (props.image.type == "application/pdf") {
    const typedArray = new Uint8Array(file as ArrayBuffer);
    const pdf = await pdfjsLib.getDocument(typedArray).promise;
    console.log(pdf.numPages);
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 1 }); // Adjust scale as needed
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d")!;
      canvas.width = viewport.width;
      canvas.height = viewport.height;

      await page.render({ canvasContext: context, viewport }).promise;

      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b as any), "image/png")
      );
      renderedImages.value.push({
        string: canvas.toDataURL("image/png"),
        file: new File([blob], "page" + i + ".png", { type: "image/png" }),
      });
      canvas.remove();
      console.log({ i });
    }
    const [first] = renderedImages.value;

    if (first)
      loadImage(first.string, first.file).then(
        (resp) => (first.response = resp)
      );
  } else {
    emit("close");
    notificationStore.add({
      title: "Error while using OCR",
      text: `File type '${props.image.type}' not supported.`,
      type: "error",
      dialog: true,
    });
  }
});

watch(
  () => currentImageIndex.value,
  (newIndex) => {
    const image = renderedImages.value[newIndex - 1];

    if (image) {
      loadImage(image.string, image.file, image.response).then(
        (resp) => (image.response = resp)
      );
    }
  }
);

async function loadImage(
  imgString: string,
  imageBlob: Blob,
  previouseResponse?: any
) {
  selectedImage.value = imgString;

  if (previouseResponse) {
    blocks.value = previouseResponse;
    onImageLoad();
    return previouseResponse;
  }
  console.log(imageBlob);

  document.addEventListener("click", inputClickHandler);

  processingOCR.value = true;
  emit("loadingUpdate", true);

  const formData = new FormData();
  formData.append("image", imageBlob);
  let result;
  try {
    const response = await fetch("/tta/ocr?language=" + props.language, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    result = await response.json();

    blocks.value = result;
    onImageLoad();
  } catch (e) {
    notificationStore.add({
      title: "Error while using OCR",
      text: `Please check your console/terminal for the error.`,
      type: "error",
      dialog: true,
    });
    console.error(e);
  }

  processingOCR.value = false;
  emit("loadingUpdate", false);
  return result;
}

onBeforeUnmount(() => {
  document.removeEventListener("click", inputClickHandler);
});

function onImageLoad() {
  const img = imageRef.value;
  // Get image dimensions for scaling
  const imgWidth = img.naturalWidth;
  const imgHeight = img.naturalHeight;
  const displayWidth = img.clientWidth;
  const displayHeight = img.clientHeight;
  const scaleX = displayWidth / imgWidth;
  const scaleY = displayHeight / imgHeight;

  const words: any[] = [];

  blocks.value.forEach((block) => {
    block.paragraphs.forEach((paragraph) => {
      paragraph.lines.forEach((line) => {
        line.words.forEach((word) => {
          const bbox = {
            x0: word.bbox.x0 * scaleX,
            y0: word.bbox.y0 * scaleY,
            x1: word.bbox.x1 * scaleX,
            y1: word.bbox.y1 * scaleY,
          };

          words.push({
            text: word.text,
            confidence: word.confidence,
            bbox: bbox,
          });
        });
      });
    });
  });

  textElements.value = words;
}

function handleTextClick(index) {
  const selIndex = selectedIndexes.value.indexOf(index);

  if (selIndex == -1) {
    selectedIndexes.value.push(index);
  } else {
    selectedIndexes.value.splice(selIndex, 1);
  }
}

function inputClickHandler() {
  const el = document.activeElement;

  if (
    (el.tagName === "INPUT" || el.tagName === "TEXTAREA") &&
    !el.readOnly &&
    !el.disabled &&
    fullText.value
  ) {
    const start = el.selectionStart;
    const end = el.selectionEnd;
    const currentValue = el.value;

    el.value =
      currentValue.slice(0, start) + fullText.value + currentValue.slice(end);

    // Move cursor to end of inserted text
    el.selectionStart = el.selectionEnd = start + fullText.length;
    selectedIndexes.value = [];
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }
}
</script>

<style scoped>
.image-display-area {
  position: relative;
  background: white;
  border: 1px solid white;
  color: black;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.pagination-center {
  margin: 5px auto;
}

.ocr-container {
  position: relative;
  height: 100%;
}

.text-overlay {
  position: absolute;
}

.loading-screen {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  left: 0;
  top: 0;
  z-index: 1000;
}

.loading-screen .c {
  margin: auto;
}
</style>
