<template>
  <v-select v-model="value" :items="templates" />
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, inject } from "vue";

const api = inject<any>("api");

const emit = defineEmits(["input"]),
  props = defineProps(["value"]);

const value = ref(""),
  templates = ref([]);

onMounted(async () => {
  value.value = props.value;

  watch(
    () => value.value,
    (newval, oldval) => {
      if (newval != oldval) {
        emit("input", newval);
      }
    }
  );

  const getTemplates = await api.get("/items/TTA_htmltemplates");

  templates.value = getTemplates.data.data.map((e) => ({
    text: e.name,
    value: e.id,
  }));
});
</script>
