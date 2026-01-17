<script setup lang="ts">
import { ref, defineModel } from "vue";

const model = defineModel();

const hidden = ref<boolean>(true);

function toggleHidePassword() {
    hidden.value = !hidden.value;
}
</script>

<template>
    <VInput v-model="model" :type="hidden ? 'password' : 'text'">
        <template #append>
            <VIcon
                v-tooltip="hidden ? 'Show value' : 'Hide value'"
                clickable
                @click="toggleHidePassword"
                :name="hidden ? 'visibility' : 'visibility_off'"
            />
        </template>
    </VInput>
</template>
