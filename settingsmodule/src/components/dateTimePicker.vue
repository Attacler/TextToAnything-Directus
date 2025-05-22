<script setup lang="ts">
import { computed, ref, watch } from "vue";

const props = defineProps<{
  value: string | null;
}>();
const emit = defineEmits<{
  "update:modelValue": [value: string | null];
  close: [];
}>();

const dateTimeMenu = ref(),
  date = ref<string | null>(props.value);

function isValidDate(date?: string | null) {
  const toCheckDate = new Date(date || -1);
  return (
    toCheckDate instanceof Date &&
    !isNaN(toCheckDate.getTime()) &&
    toCheckDate.getFullYear() != 1970
  );
}

const isValidValue = computed(() => isValidDate(date?.value as any));

watch(
  () => date.value,
  () => {
    if (isValidValue.value) {
      console.log(" Updating with", date.value);
      emit("update:modelValue", date.value);
    }
  }
);
</script>

<template>
  <div>
    <v-menu
      ref="dateTimeMenu"
      :close-on-content-click="false"
      attached
      full-height
      seamless
    >
      <template #activator="{ toggle, active }">
        <v-input
          :active="active"
          clickable
          readonly
          :placeholder="!isValidValue ? date : undefined"
          @click="toggle"
        >
          <template v-if="isValidValue" #prepend>
            {{ date }}
          </template>
        </v-input>
      </template>

      <v-date-picker
        type="date"
        :use-24="true"
        :include-seconds="false"
        :model-value="date"
        @update:model-value="date = $event"
        @close="dateTimeMenu?.deactivate"
      />
    </v-menu>
  </div>
</template>

<style scoped>
.v-icon.today-icon:hover,
.v-icon.today-icon.active {
  --v-icon-color: var(--theme--primary);
}
.v-icon.clear-icon:hover,
.v-icon.clear-icon.active {
  --v-icon-color: var(--theme--danger);
}
</style>
