<template>
  <div
    class="info-popover"
    @mouseenter="visible = true"
    @mouseleave="visible = false"
  >
    <v-icon name="question_mark" class="info-icon" />
    <div v-if="visible" class="popover">
      The preview mode has 4 modes: <br />
      <ul>
        <li>HTML - preview as webpage</li>
        <li>PDF (Preview) - watermarked, free</li>
        <li>PDF - final version, without watermark</li>
        <li>Code - preview without test input</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

const visible = ref(false);
</script>

<style scoped>
.info-popover {
  position: relative;
  display: flex;
  color: var(--theme--foreground-subdued);
}

.info-icon {
  margin: auto;
}

.popover {
  position: absolute;
  top: 175%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--theme--background);
  color: var(--theme--foreground);
  border: 1px solid var(--theme--border);
  padding: 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
