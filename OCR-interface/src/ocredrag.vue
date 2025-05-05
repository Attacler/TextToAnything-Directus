<template>
  <Teleport to="body">
    <div
      ref="draggableElement"
      :style="{
        position: 'absolute',
        left: position.x + 'px',
        top: position.y + 'px',
        cursor: isDragging ? 'grabbing' : 'grab',
        width: '500px',
        'max-width': '80vw',
        height: 'auto',
        padding: '20px',
        backgroundColor: 'var(--theme--background)',
        color: 'var(--theme--form--field--label--foreground)',
        border: 'var(--theme--border-color) 2px solid',
        borderRadius: '4px',
        userSelect: 'none',
        'z-index': 100,
      }"
      @mousedown="startDrag"
    >
      <slot />
      <VButton
        @click="emit('close')"
        :outlined="false"
        :icon="true"
        :rounded="true"
        class="close-btn"
      >
        <v-icon name="close" />
      </VButton>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import renderOCRResponse from "./renderOCRResponse.vue";
import { ref, reactive, onMounted, onUnmounted } from "vue";

const emit = defineEmits(["close"]);
const props = defineProps<{
  initialX: number;
  initialY: number;
}>();

const draggableElement = ref(null);
const isDragging = ref(false);
const position = reactive({
  x: props.initialX || 50,
  y: props.initialY || 50,
});

// Store the initial position where the drag started
const dragOffset = reactive({
  x: 0,
  y: 0,
});

const startDrag = (event) => {
  isDragging.value = true;

  // Calculate offset between mouse position and element position
  dragOffset.x = event.clientX - position.x;
  dragOffset.y = event.clientY - position.y;

  // Add event listeners to handle dragging
  document.addEventListener("mousemove", onDrag);
  document.addEventListener("mouseup", stopDrag);
};

const onDrag = (event) => {
  if (isDragging.value) {
    // Update position based on mouse coordinates minus the offset
    position.x = event.clientX - dragOffset.x;
    position.y = event.clientY - dragOffset.y;
  }
};

const stopDrag = () => {
  isDragging.value = false;

  // Remove event listeners
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
};

// Clean up event listeners when component is unmounted
onUnmounted(() => {
  document.removeEventListener("mousemove", onDrag);
  document.removeEventListener("mouseup", stopDrag);
});
</script>

<style scoped>
.close-btn {
  position: absolute;
  right: -10px;
  top: -10px;
  z-index: 1001;
}
</style>
