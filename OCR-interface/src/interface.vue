<template>
  <teleport v-for="btn of imageButtons" :to="btn">
    <VButton
      @click="clickImage"
      :outlined="false"
      :icon="true"
      :rounded="true"
      class="ocr_button"
    >
      <v-icon name="camera_video" />
    </VButton>
  </teleport>
  <teleport to="#sidebar .v-item-group" v-if="shouldTeleport">
    <div class="ocr-container">
      <v-button class="ocr-btn" @click="clickInput" :loading="processingOCR">
        Import data with OCR
      </v-button>
      <input
        type="file"
        @change="ocrUpload"
        class="ocr-input"
        ref="inputRef"
        accept="image/*"
      />
      <ocredrag v-if="uploadedFile != null" @close="closeOCR">
        <renderOCRResponse
          :image="uploadedFile"
          @close="closeOCR"
          :language="language"
          @loadingUpdate="processingOCR = $event"
        />
      </ocredrag>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import renderOCRResponse from "./renderOCRResponse.vue";
import ocredrag from "./ocredrag.vue";
import { useStores } from "@directus/extensions-sdk";

const { useFieldsStore } = useStores();
const fieldsStore = useFieldsStore();

const props = defineProps<{
  language: string;
  collection: string;
}>();

const shouldTeleport = ref(false),
  inputRef = ref(),
  processingOCR = ref(false),
  uploadedFile = ref(),
  imageButtons = ref([]);

onMounted(() => {
  const findImages = fieldsStore
    .getFieldsForCollection(props.collection)
    .filter((e) => e.meta?.interface == "file-image");

  nextTick(() => {
    setTimeout(() => {
      for (const image of findImages) {
        const selector =
          "[data-collection=" +
          props.collection +
          "][data-field=" +
          image.field +
          "]";
        const find = document.querySelector(selector);

        find.addEventListener("mouseover", (event) => {
          const imgPreview = find.querySelector(".image-preview img");

          if (imgPreview) {
            const hasOCR = find.querySelector(".ocr_button");

            if (!hasOCR && getIMGsrc(imgPreview)) {
              imageButtons.value.push(selector + " .actions");
            }
          }
        });
      }
    }, 500);
    shouldTeleport.value = true;
  });
});

function clickInput() {
  inputRef.value.click();
}

async function ocrUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  uploadedFile.value = file;
}

async function clickImage($event) {
  const imageSRC = getIMGsrc($event.target.parentElement);

  if (imageSRC) {
    const image = await fetch(imageSRC).then((e) => e.blob());

    const file = new File([image], "image.png", { type: image.type });

    const input = inputRef.value,
      dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);

    input.files = dataTransfer.files;
    input.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function getIMGsrc(parent) {
  let i = 0,
    imageSRC = "";

  while (i < 10) {
    parent = parent.parentElement;
    const img = parent.querySelector("img");

    if (img) {
      imageSRC = img.src;
      break;
    }
    i++;
  }
  return imageSRC.split("?")[0];
}

function closeOCR() {
  uploadedFile.value = null;
  inputRef.value.value = "";
}
</script>

<style>
.ocr-container {
  display: flex;
}

.ocr-container .ocr-btn {
  margin: 10px auto;
}

.ocr-container .ocr-input {
  display: none;
}
</style>
