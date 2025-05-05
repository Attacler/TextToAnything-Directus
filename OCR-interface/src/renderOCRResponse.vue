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
    <v-input :modelValue="fullText" />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, onBeforeUnmount } from "vue";
import { useStores } from "@directus/extensions-sdk";

const { useNotificationsStore } = useStores();
const notificationStore = useNotificationsStore();

const props = defineProps<{
  image: File;
  language: string;
}>();

const emit = defineEmits(["close", "loadingUpdate"]);

const progressStatus = ref(""),
  hoveredIndex = ref(null),
  urlInput = ref(""),
  textElements = ref([]),
  imageRef = ref(),
  selectedImage = ref(),
  selectedIndexes = ref([]),
  blocks = ref([]),
  processingOCR = ref(false);

const fullText = computed(() => {
  return selectedIndexes.value
    .sort()
    .map((e) => textElements.value[e].text)
    .join(" ");
});

onMounted(async () => {
  const img = await new Promise((res) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      res(e.target.result);
    };
    reader.readAsDataURL(props.image);
  });
  selectedImage.value = img;

  document.addEventListener("click", inputClickHandler);

  processingOCR.value = true;
  emit("loadingUpdate", true);

  const formData = new FormData();
  formData.append("image", props.image);

  try {
    const response = await fetch("/tta/ocr?language=" + props.language, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const result = await response.json();

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
});

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

  const words = [];

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
