<script lang="ts" setup>
import { ref, onMounted, computed } from "vue";
import { useApi } from "@directus/extensions-sdk";

const api = useApi();

type folder = {
  name: string;
  id: string;
  scanning: boolean;
};

const folders = ref<folder[]>([]),
  dialogOpen = ref(false);

onMounted(async () => {
  const getFolders = await api.get("/folders");
  
  folders.value = getFolders.data.data.map((e) => ({
    name: e.name,
    id: e.id,
    scanning: e.TTA_VIRUSSCAN_ENABLED == 1,
  }));
});

const scanningFolderCount = computed(() => {
  return folders.value.filter((e) => e.scanning == true).length;
});

async function toggleFolder(folder: folder) {
  folder.scanning = !folder.scanning;

  await api.patch("/folders/" + folder.id, {
    TTA_VIRUSSCAN_ENABLED: folder.scanning,
  });
}
</script>

<template>
  <v-drawer
    v-model="dialogOpen"
    :persistent="true"
    placement="right"
    title="Manage folders that are scanned for virusses"
    @cancel="dialogOpen = false"
    icon="settings"
  >
    <VNotice>
      Any uploads to the enabled folders will be scanned.
    </VNotice>
    <v-table
      :headers="[
        {
          text: '',
          value: 'enabled',
        },
        {
          text: 'Name',
          value: 'name',
        },
      ]"
      :items="folders"
    >
      <template #item.enabled="{ item }">
        <v-button @click="toggleFolder(item)" small :danger="!item.scanning">{{
          item.scanning ? "Enabled" : "Disabled"
        }}</v-button>
      </template>
    </v-table>
  </v-drawer>
  <v-button align="left" fullWidth small @click="dialogOpen = true">
    <v-icon name="edit"></v-icon>
    <template v-if="scanningFolderCount == folders.length"> All </template>
    <template v-else> {{ scanningFolderCount }}/{{ folders.length }} </template>
    folders are being scanned
  </v-button>
</template>
