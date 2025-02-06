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
                  <div class="field half">
                    <div class="type-label">Template name</div>
                  </div>
                  <v-input
                    v-model="currentTemplate.name"
                    placeholder="Template name"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <div class="field half">
                    <div class="type-label">Description</div>
                  </div>
                  <v-input
                    v-model="currentTemplate.description"
                    placeholder="Description"
                  />
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  <div class="field half">
                    <div class="type-label">Format</div>
                  </div>
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
                  <div class="field half">
                    <div class="type-label">Orientation</div>
                  </div>
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
                  <div class="field half">
                    <div class="type-label">Collection</div>
                  </div>
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
          <VTabs v-model="previewMode">
            <VTab> Code </VTab>
            <VTab> Preview </VTab>
          </VTabs>

          <div class="TTA-action" @click="alignHTML">
            <v-icon name="vertical_align_center" />
          </div>
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
        <div :style="'width: ' + editorWidth + '%'" class="TTA-editor-wrapper">
          <div v-if="currentPart == 'Development'">
            <div class="devFields">
              <div class="field half">
                <div class="type-label">Type input</div>
              </div>
              <v-select
                v-model="currentTemplate.input_type"
                class="max-w-input"
                :items="[
                  { value: 'Flow', text: 'Flow' },
                  { value: 'Fixed', text: 'Fixed' },
                ]"
              />
              <v-select
                v-model="currentTemplate.input_flow"
                class="max-w-input"
                :items="flowOptions"
                v-if="currentTemplate.input_type == 'Flow'"
              />
            </div>
            <component
              is="interface-input-code"
              class="TTA-editor"
              :value="currentTemplate.input_fixed"
              language="json"
              @input="changeJSON"
              v-if="currentTemplate.input_type == 'Fixed'"
            />
            <component
              is="interface-input-code"
              class="TTA-editor"
              :value="currentTemplate.input_flow_body"
              language="json"
              @input="changeJSON"
              v-if="currentTemplate.input_type == 'Flow'"
            />
          </div>
          <component
            is="interface-input-code"
            class="TTA-editor"
            :value="currentHTML"
            language="htmlmixed"
            @input="changeHTML"
            v-if="currentPart != 'Development'"
          />
          <div id="partSelect">
            <v-select
              v-model="currentPart"
              :items="[
                { value: 'Header', text: 'Header' },
                { value: 'Body', text: 'Body' },
                { value: 'Footer', text: 'Footer' },
                { value: 'Development', text: 'Test input' },
              ]"
            ></v-select>
          </div>
        </div>
        <iframe
          class="TTA-preview"
          :src="computedTemplate"
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
import { computed, onMounted, ref, watch, nextTick } from "vue";
import { useStores, useApi } from "@directus/extensions-sdk";
import format from "html-format";
import { Liquid } from "liquidjs";
import TTAnav from "./TTAnav.vue";

const { useCollectionsStore, useFlowsStore } = useStores();

const flowStore = useFlowsStore();

const flowOptions = computed(() =>
  flowStore.flows
    .filter(
      (flow: any) => flow.trigger === "webhook" && flow.options.method == "POST"
    )
    .map((flow: any) => {
      return { text: flow.name, value: flow.id };
    })
);

const templates = ref([]),
  templateDetails = ref(false),
  editTemplate = ref(false),
  currentPart = ref("Development"),
  previewMode = ref([1]);

const widthPartition = ref(50);

const previewWidth = computed(() => {
  return 100 - widthPartition.value;
});

const editorWidth = computed(() => {
  return 100 - previewWidth.value;
});

const currentHTML = ref("");

watch(
  () => currentPart.value,
  (newPart) => {
    if (newPart == "Development") currentHTML.value = "";
    if (newPart == "Header") currentHTML.value = currentTemplate.value.header;
    if (newPart == "Body") currentHTML.value = currentTemplate.value.template;
    if (newPart == "footer") currentHTML.value = currentTemplate.value.footer;
  },
  {
    immediate: true,
  }
);

function changeHTML(html: string) {
  if (currentPart.value == "Header") currentTemplate.value.header = html;
  else if (currentPart.value == "Body") currentTemplate.value.template = html;
  else currentTemplate.value.footer = html;
}

function changeJSON(json: string) {
  if (currentTemplate.value.input_type == "Fixed") {
    currentTemplate.value.input_fixed = json;
  } else currentTemplate.value.input_flow_body = json;
}

const api = useApi();

const defaultTemplate = {
  template: "<h1>Hello {{name}}!</h1>",
  id: -1,
  name: "",
  description: "",
  collection: "",
  format: "A4",
  orientation: "portrait",
  header:
    "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; \n        -webkit-print-color-adjust: exact;\n    }\n</style>\n<div style='width:100%'>\n    <span class='date'></span>\n    <span class='title' style='float:right'></span>\n</div>",
  footer:
    "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; -webkit-print-color-adjust: exact;\n    }\n</style>\n<div\n  style=‘width:100%’>\n  <div style=‘float:right’><span\n      class='pageNumber'></span> / <span class='totalPages'></span>\n  </div>\n</div>",
  input_type: "Fixed",
  input_fixed: '{"name": "World!"}',
  input_flow: "",
  input_flow_body: "{}",
};

const currentTemplate = ref(structuredClone(defaultTemplate));

const collectionsStore = useCollectionsStore();

const collections = computed(() => {
  return collectionsStore.collections
    .filter((e: any) => e.collection != "TTA_htmltemplates")
    .map((e: any) => ({
      text: e.name,
      value: e.collection,
    }));
});

const engine = new Liquid();
let rendering = ref(false),
  preview = ref("");

watch(
  () => currentTemplate.value.id,
  (newID, oldID) => {
    if (newID == oldID) return;
    currentPart.value = "";
    nextTick(() => {
      currentPart.value = "Body";
    });
  }
);

watch(
  () => [
    currentTemplate.value.header,
    currentTemplate.value.template,
    currentTemplate.value.footer,
    currentTemplate.value.input_type,
    currentTemplate.value.input_flow,
    currentTemplate.value.input_fixed,
  ],
  async () => {
    rendering.value = true;
    let html =
      (currentTemplate.value.header || "") +
      (currentTemplate.value.template || "") +
      (currentTemplate.value.footer || "");

    let input = {};

    try {
      if (currentTemplate.value.input_type == "Flow") {
        const webhookOutput = await api.post(
          "/flows/trigger/" + currentTemplate.value.input_flow,
          JSON.parse(currentTemplate.value.input_flow_body)
        );

        if (typeof webhookOutput.data != "object") {
          throw new Error(
            "Output of flow should be an object, not an " +
              typeof webhookOutput.data
          );
        }
        if (
          "name" in webhookOutput.data &&
          "code" in webhookOutput.data &&
          "status" in webhookOutput.data
        ) {
          throw new Error(JSON.stringify(webhookOutput.data));
        }
        input = webhookOutput.data;
      } else {
        if (currentTemplate.value.input_fixed == null)
          currentTemplate.value.input_fixed = "{}";
        input = JSON.parse(currentTemplate.value.input_fixed);
      }
      preview.value = await engine.render(engine.parse(html), input);
    } catch (error: any) {
      console.error(error);
      preview.value = "Error occurred: " + (error?.message || error);
    }
    rendering.value = false;
  },
  {
    deep: true,
    immediate: true,
  }
);

const computedTemplate = computed(() => {
  if (rendering.value) return "Rendering...";
  let html =
    (currentTemplate.value.header || "") +
    (currentTemplate.value.template || "") +
    (currentTemplate.value.footer || "");
  if (previewMode.value[0] == 1) {
    html = preview.value;
  }
  const blob = new Blob(
    [
      `<style>
      .date:before{content: "Date here";font-style: italic; }
      .title:before{content: "Title here";font-style: italic; }
      .pageNumber:before{content: "Pagenumber";font-style: italic; }
      .totalPages:before{content: "Total pages";font-style: italic; }
      </style>` + html,
    ],
    {
      type: "text/html",
    }
  );
  const objectUrl = URL.createObjectURL(blob);
  return objectUrl;
});

onMounted(async () => {
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
  if (currentTemplate.value.id == -1) {
    await api.post("/items/TTA_htmltemplates", {
      ...currentTemplate.value,
      id: undefined,
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

function openTemplate({ item }: any) {
  currentTemplate.value = item;
  editTemplate.value = true;
}

function closeEditor() {
  currentTemplate.value = structuredClone(defaultTemplate);
  editTemplate.value = false;
}

function alignHTML() {
  currentTemplate.value.template = format(currentTemplate.value.template);
  currentTemplate.value.footer = format(currentTemplate.value.footer);
  currentTemplate.value.header = format(currentTemplate.value.header);
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
  overflow: hidden;
  position: relative;
}

.TTA-preview {
  flex-grow: 1;
  background-color: white;
  border: 0;
}
.TTA-editor {
  flex-grow: 1;
  height: 100%;
  width: 100%;
}
.TTA-wapper .TTA-editor-wrapper {
  position: relative;
}

.TTA-editor > div {
  height: 100% !important;
  border-radius: 0 !important;
}

.TTA-editor .CodeMirror {
  height: 100%;
}

.TTA-wapper #partSelect {
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
}

.devFields {
  border-top: var(--theme--border-width) solid
    var(--theme--form--field--input--border-color);
  margin-left: 25px;
  margin-bottom: 10px;
}

.max-w-input {
  max-width: 250px;
  padding: 10px 0;
}

.max-w-input .v-input {
  max-width: 250px;
  margin-bottom: 5px;
}
</style>
