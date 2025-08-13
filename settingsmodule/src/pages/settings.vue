<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useApi } from "@directus/extensions-sdk";
import TTAnav from "../TTAnav.vue";

const rapidKey = ref("");
const saving = ref(false);
const api = useApi();

const folder = ref([]);

onMounted(async () => {
  const settings = await api.get("/settings");

  rapidKey.value = settings.data.data.TTA_KEY;

  const folders = await api.get("/folders");

  folder.value = folders.data.data.map((e) => ({
    text: e.name,
    value: e.id,
  }));
});

async function saveSettings() {
  saving.value = true;

  await api.patch("/settings", {
    TTA_KEY: rapidKey.value,
  });

  setTimeout(() => {
    saving.value = false;
  }, 500);
}
</script>

<template>
  <private-view title="Settings">
    <template #navigation>
      <TTAnav />
    </template>

    <div class="px-5">
      <v-card class="w-full">
        <v-card-title>API settings</v-card-title>
        <v-card-text class="fields-spacing">
          <div>
            <span class="field-name">RapidAPI token</span>

            <v-input v-model="rapidKey" />
          </div>
        </v-card-text>
        <v-card-actions>
          <v-button
            href="https://rapidapi.com/Attacler/api/text-to-anything"
            target="_blank"
          >
            <v-icon name="open_in_new"></v-icon>
            Get RapidAPI token
          </v-button>

          <v-button @click="saveSettings" :disabled="saving">
            <template v-if="!saving"> Save </template>
            <v-progress-circular :small="true" indeterminate v-else />
          </v-button>
        </v-card-actions>
      </v-card>
    </div>
  </private-view>
</template>

<style scoped>
.w-full {
  width: 100%;
}

.px-5 {
  padding: 0 2.5rem;
}

.fields-spacing {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
