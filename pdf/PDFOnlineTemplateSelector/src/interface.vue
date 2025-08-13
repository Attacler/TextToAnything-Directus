<template>
  <v-select v-model="value" :items="templates" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, inject } from "vue";

const api = inject<any>("api");

const emit = defineEmits(["input"]),
  props = defineProps(["value"]);

const value = ref<number | null>(0),
  templates = ref([]);

onMounted(async () => {
  watch(
    () => value.value,
    (newval, oldval) => {
      if (newval != oldval) {
        emit("input", newval);
      }
    }
  );

  const getTemplates = await api.get("/tta/pdf/onlineTemplates");

  templates.value = getTemplates.data.map((e) => ({
    text: e.name,
    value: e.id,
  }));

  if (getTemplates.data.find((e) => e.id == props.value))
    value.value = parseInt(props.value);
  else value.value = null;
});
</script>
