<template>
    <VButton
        @click="downloadFile"
        :loading="loading"
        :disabled="isDisabled"
        v-tooltip="isDisabled ? 'Please save first' : null"
    >
        {{ props.label }}
    </VButton>
    <div style="display: none">
        <VButton :loading="true" :disabled="true" />
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, computed } from "vue";
import { useApi } from "@directus/extensions-sdk";

const api = useApi();
const props = defineProps<{
    label: string;
    flow: any;
    primaryKey: any;
    disableOnEdit: boolean;
}>();

const loading = ref(false);
const hasEdits = ref(false);

function checkSaveButtonState() {
    const saveButton = document.querySelector('.header-bar button:has([data-icon="check"])');
    hasEdits.value = saveButton ? saveButton.hasAttribute('disabled') : true;
};

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'disabled') {
            checkSaveButtonState();
        }
    });
});

onMounted(() => {
    const setupObserver = () => {
        const saveButton = document.querySelector('.header-bar button:has([data-icon="check"])');
        if (saveButton) {
            observer.observe(saveButton, {
                attributes: true,
                attributeFilter: ['disabled'],
            });
            checkSaveButtonState();
            return true;
        }
        return false;
    };

    if (!setupObserver()) {
        const interval = setInterval(() => {
            if (setupObserver()) clearInterval(interval);
        }, 500);
        setTimeout(() => clearInterval(interval), 5000);
    }
});

onBeforeUnmount(() => {
    observer.disconnect();
});

const isDisabled = computed(() => {
    if (loading.value) return true;
    if (!props.disableOnEdit) return false;
    return !hasEdits.value;
});

async function downloadFile() {
    if (isDisabled.value) return;

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
