<template>
    <VButton @click="downloadFile" :loading="loading" :disabled="loading">
        {{ props.label }}
    </VButton>
    <div style="display: none">
        <VButton :loading="true" :disabled="true" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useApi } from "@directus/extensions-sdk";

const api = useApi();
const props = defineProps<{
    label: string;
    flow: any;
    primaryKey: any;
}>();

const loading = ref(false);

async function downloadFile() {
    loading.value = true;
    try {
        const webhookOutput = await api.post("/flows/trigger/" + props.flow, {
            id: props.primaryKey,
        });

        window.open("/assets/" + webhookOutput.data, "_blank");
    } catch (e) {}
    loading.value = false;
}
</script>
