<template>
  <private-view title="Templates">
    <template #navigation>
      <TTAnav />
    </template>
    <template #actions>
      <v-button rounded icon @click="templateDetails = true">
        <v-icon name="add" />
      </v-button>
      <v-dialog v-model="templateDetails" :persistent="true">
        <v-card>
          <v-card-title>Create a new HTML template</v-card-title>

          <v-card-text>
            <v-list>
              <v-list-item>
                <v-list-item-content>
                  <v-input
                    v-model="currentTemplate.name"
                    placeholder="Template name"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-input
                    v-model="currentTemplate.description"
                    placeholder="Description"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-select
                    v-model="currentTemplate.format"
                    placeholder="Size"
                    :items="
                      [
                        'A1',
                        'A2',
                        'A3',
                        'A4',
                        'A5',
                        'A6',
                        'Letter',
                        'Legal',
                        'Tabloid',
                        'Ledger',
                      ].map((e) => ({ text: e, value: e }))
                    "
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-select
                    v-model="currentTemplate.orientation"
                    placeholder="Orientation"
                    :items="
                      ['portrait', 'landscape'].map((e) => ({
                        text: e,
                        value: e,
                      }))
                    "
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <v-select
                    v-model="currentTemplate.collection"
                    :items="collections"
                    placeholder="Collection"
                  />
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-text>

          <v-card-actions>
            <v-button secondary @click="templateDetails = false">
              Cancel
            </v-button>
            <v-button
              :disabled="
                !currentTemplate.collection ||
                !currentTemplate.name ||
                !currentTemplate.format
              "
              @click="saveTemplate"
            >
              Save
            </v-button>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>

    <div class="TTA-popup" v-if="editTemplate">
      <div class="TTA-toolbar">
        <div @click="templateDetails = true" class="TTA-template-title">
          {{ currentTemplate.name }}
          <v-icon name="edit" />
        </div>
        <div class="right-side">
          <div class="TTA-action" @click="saveTemplate">
            <v-icon name="save" />
          </div>

          <div class="setwidth">
            <v-slider
              v-model="widthPartition"
              :min="10"
              :max="90"
              class="TTA-slider"
            />
          </div>
          <div class="TTA-action">
            <v-icon name="close" @click="closeEditor" />
          </div>
        </div>
      </div>
      <div class="TTA-wapper">
        <component
          is="interface-input-rich-text-html"
          class="TTA-editor"
          :value="currentTemplate.template"
          :imageToken="assetsKey"
          @input="(html) => (currentTemplate.template = html)"
          :style="'width: ' + editorWidth + '%'"
        />
        <iframe
          class="TTA-preview"
          :srcdoc="computedTemplate"
          :style="'width: ' + previewWidth + '%'"
        />
      </div>
    </div>
    <v-table
      :headers="[
        {
          text: 'Name',
          value: 'name',
        },
        {
          text: 'Description',
          value: 'description',
        },
        {
          text: 'Collection',
          value: 'collection',
        },
        {
          text: 'Format',
          value: 'format',
        },
      ]"
      @click:row="openTemplate"
      :items="templates"
    />
  </private-view>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useStores, useApi } from "@directus/extensions-sdk";
import TTAnav from "./TTAnav.vue";

const templates = ref([]),
  templateDetails = ref(false),
  editTemplate = ref(false),
  assetsKey = ref("");

const widthPartition = ref(50);

const previewWidth = computed(() => {
  return 100 - widthPartition.value;
});

const editorWidth = computed(() => {
  return 100 - previewWidth.value;
});

const api = useApi();

const currentTemplate = ref({
  template: "",
  id: -1,
  name: "",
  description: "",
  collection: "",
  format: "A4",
  orientation: "portrait",
});

const { useCollectionsStore } = useStores();
const collectionsStore = useCollectionsStore();

const collections = computed(() => {
  return collectionsStore.collections
    .filter((e) => e.collection != "TTA_htmltemplates")
    .map((e) => ({
      text: e.name,
      value: e.collection,
    }));
});

const computedTemplate = computed(() => {
  return `${currentTemplate.value.template}`;
});

onMounted(async () => {
  const settings = await api.get("/settings");

  assetsKey.value = settings.data.data.TTA_ASSETS_KEY;
  widthPartition.value = parseInt(
    localStorage.getItem("TTA-widthPartition") || "50"
  );

  fetchTemplates();
});

watch(
  () => widthPartition.value,
  (newval) => localStorage.setItem("TTA-widthPartition", newval + "")
);

async function fetchTemplates() {
  const getTemplates = await api.get("/items/TTA_htmltemplates", {
    params: {
      limit: -1,
    },
  });

  // console.log({ getTemplates });
  templates.value = getTemplates.data.data;
}

async function saveTemplate() {
  if (currentTemplate.value.id != -1) {
    await api.post("/items/TTA_htmltemplates", {
      ...currentTemplate.value,
    });
  } else {
    await api.patch("/items/TTA_htmltemplates/" + currentTemplate.value.id, {
      ...currentTemplate.value,
      id: undefined,
    });
  }

  templateDetails.value = false;

  fetchTemplates();
}

function openTemplate({ item }) {
  console.log(item);
  currentTemplate.value = item;
  editTemplate.value = true;
}

function closeEditor() {
  currentTemplate.value = {
    template: "",
    id: -1,
    name: "",
    description: "",
    collection: "",
    format: "A4",
    orientation: "portrait",
  };
  editTemplate.value = false;
}
</script>

<style>
.TTA-popup {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  background-color: var(--background-subdued);
}

.TTA-toolbar {
  background-color: var(--background-subdued);
  display: flex;
  justify-content: space-between;
}

.TTA-toolbar .right-side {
  display: flex;
  gap: 5px;
}

.TTA-toolbar .TTA-slider {
  padding-top: 5px;
}

.TTA-toolbar .TTA-action {
  padding: 5px;
  cursor: pointer;
}

.TTA-toolbar .setwidth {
  display: flex;
  gap: 10px;
  padding-top: 6px;
}
.TTA-toolbar .TTA-template-title {
  margin: auto 0;
  font-size: 18px;
  cursor: pointer;
  padding-right: 5px;
  padding-left: 20px;
  border-bottom: 1px solid var(--v-list-item-border-color);
}
.TTA-toolbar .TTA-template-title i {
  padding-left: 5px;
}

.TTA-wapper {
  display: flex;
  flex-grow: 1;
}

.TTA-preview {
  flex-grow: 1;
  background-color: white;
  border: 0;
}
.TTA-editor {
  flex-grow: 1;
  height: 100%;
}

.TTA-editor .tox.tox-tinymce {
  height: 100% !important;
  border-radius: 0 !important;
}
</style>
