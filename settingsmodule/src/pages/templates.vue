<template>
    <private-view title="Offline templates">
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
                                        <div class="type-label">
                                            Template name
                                        </div>
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
                                        <div class="type-label">
                                            Description
                                        </div>
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
                                            ].map((e) => ({
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
                                        <div class="type-label">
                                            Orientation
                                        </div>
                                    </div>
                                    <v-select
                                        v-model="currentTemplate.orientation"
                                        placeholder="Orientation"
                                        :items="
                                            ['portrait', 'landscape'].map(
                                                (e) => ({
                                                    text: e,
                                                    value: e,
                                                })
                                            )
                                        "
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
                                !currentTemplate.name || !currentTemplate.format
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
                    <VSelect
                        v-model="previewMode"
                        :items="[
                            {
                                text: 'HTML',
                                value: 'html',
                            },
                            {
                                text: 'PDF (Preview)',
                                value: 'pdf-preview',
                            },
                            {
                                text: 'PDF',
                                value: 'pdf',
                            },
                            {
                                text: 'Code',
                                value: 'code',
                            },
                        ]"
                        style="width: 170px"
                    />
                    <explainPreviewMode text="This is helpful info." />

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
                <div
                    :style="'width: ' + editorWidth + '%'"
                    class="TTA-editor-wrapper"
                >
                    <template v-if="currentPart == 'Development'">
                        <div class="devFields">
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
                    </template>
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
                    :src="
                        computedTemplate == 'rendering'
                            ? undefined
                            : computedTemplate
                    "
                    :srcDoc="
                        computedTemplate == 'rendering'
                            ? HTML_SPINNER
                            : undefined
                    "
                    :style="'width: ' + previewWidth + '%'"
                />

                <VButton
                    @click="generatePDF()"
                    :icon="true"
                    :outlined="false"
                    id="generatePDF"
                    v-if="previewMode.startsWith('pdf')"
                >
                    <v-icon name="refresh" />
                </VButton>
            </div>
        </div>

        <v-table
            :headers="[
                {
                    text: 'Name',
                    value: 'name',
                    sortable: false,
                },
                {
                    text: 'Description',
                    value: 'description',
                    width: 600,
                    sortable: false,
                },
                {
                    text: 'Format',
                    value: 'format',
                    sortable: false,
                },
                {
                    text: '',
                    value: 'del',
                    width: 60,
                    sortable: false,
                },
            ]"
            @click:row="openTemplate"
            :items="templates"
        >
            <template #item.del="{ item }"
                ><VButton
                    @click.stop="removeTemplate(item.id)"
                    :outlined="true"
                    :icon="true"
                    :rounded="true"
                >
                    <VIcon name="delete" />
                </VButton>
            </template>
        </v-table>
        <div class="tta-notice">
            <VNotice>
                You can create online templates in the&nbsp;
                <a href="https://app.texttoanything.nl" target="_blank"
                    >TTA app</a
                >&nbsp; for a better editor experience.
            </VNotice>
        </div>

        <v-dialog v-model="deleting" :persistent="true">
            <v-card>
                <v-card-title>
                    Are you sure you want to delete this item? This action can
                    not be undone.
                </v-card-title>

                <v-card-actions>
                    <v-button secondary @click="deleting = false">
                        Cancel
                    </v-button>
                    <v-button kind="danger" @click="confirmDelete">
                        Proceed
                    </v-button>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </private-view>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch, nextTick } from "vue";
import { useStores, useApi } from "@directus/extensions-sdk";
import format from "html-format";
import { Liquid } from "liquidjs";
import TTAnav from "../TTAnav.vue";
import explainPreviewMode from "./templates/explainPreviewMode.vue";
import { HTML_SPINNER } from "../constants.ts";

const { useCollectionsStore, useFlowsStore, useNotificationsStore } =
    useStores();

const flowStore = useFlowsStore();
const notificationStore = useNotificationsStore();

const flowOptions = computed(() =>
    flowStore.flows
        .filter(
            (flow: any) =>
                flow.trigger === "webhook" && flow.options.method == "POST"
        )
        .map((flow: any) => {
            return { text: flow.name, value: flow.id };
        })
);

const templates = ref([]),
    templateDetails = ref(false),
    editTemplate = ref(false),
    currentPart = ref("Development"),
    previewMode = ref("html"),
    computedTemplate = ref(""),
    deleting = ref(false),
    deletingID = ref();

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
        if (newPart == "Header")
            currentHTML.value = currentTemplate.value.header;
        if (newPart == "Body")
            currentHTML.value = currentTemplate.value.template;
        if (newPart == "Footer")
            currentHTML.value = currentTemplate.value.footer;
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
    header: "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; \n        -webkit-print-color-adjust: exact;\n    }\n</style>\n<div style='width:100%'>\n    <span class='date'></span>\n    <span class='title' style='float:right'></span>\n</div>",
    footer: "<!-- Any content/styling here is seperated from the body on render-->\n<style> \n    #header, #footer { \n        margin: 0 !important; \n        padding: 0 !important; \n        font-size: 9px; -webkit-print-color-adjust: exact;\n    }\n</style>\n<div\n  style=‘width:100%’>\n  <div style=‘float:right’><span\n      class='pageNumber'></span> / <span class='totalPages'></span>\n  </div>\n</div>",
    input_type: "Fixed",
    input_fixed: '{"name": "World!"}',
    input_flow: "",
    input_flow_body: "{}",
};

const currentTemplate = ref(structuredClone(defaultTemplate));

const engine = new Liquid();

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
        previewMode.value,
    ],
    () => {
        if (["html", "code"].includes(previewMode.value))
            generateHTML(previewMode.value as any);
    },
    {
        deep: true,
        immediate: true,
    }
);

async function generateHTML(mode: "pdf" | "html" | "code") {
    if (
        currentTemplate.value.input_type == "Flow" &&
        !currentTemplate.value.input_flow
    ) {
        return;
    }
    computedTemplate.value = "rendering";

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

        if (mode == "html" || mode == "code") {
            const html =
                (currentTemplate.value.header || "") +
                (currentTemplate.value.template || "") +
                (currentTemplate.value.footer || "");

            const blob = new Blob(
                [
                    `<style>
      .date:before{content: "Date here";font-style: italic; }
      .title:before{content: "Title here";font-style: italic; }
      .pageNumber:before{content: "Pagenumber";font-style: italic; }
      .totalPages:before{content: "Total pages";font-style: italic; }
      </style>` +
                        (mode == "code"
                            ? html
                            : await engine.render(engine.parse(html), input)),
                ],
                {
                    type: "text/html",
                }
            );
            computedTemplate.value = URL.createObjectURL(blob);
        } else {
            const header = engine.parse(currentTemplate.value.header || "");
            const tpl = engine.parse(currentTemplate.value.template);
            const footer = engine.parse(currentTemplate.value.footer || "");
            const headerRendered = await engine.render(header, input);
            const htmlRendered = await engine.render(tpl, input);
            const footerRendered = await engine.render(footer, input);

            const download = await fetch(
                "/tta/pdf?preview=" +
                    (previewMode.value == "pdf-preview" ? "preview" : ""),
                {
                    body: JSON.stringify({
                        ...currentTemplate.value,
                        input_fixed: undefined,
                        input_flow: undefined,
                        input_flow_body: undefined,
                        input_type: undefined,
                        id: undefined,
                        header: headerRendered,
                        html: htmlRendered,
                        footer: footerRendered,
                        landscape:
                            currentTemplate.value.orientation != "portrait",
                    }),
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((e) => e.blob())
                .then((blob) => URL.createObjectURL(blob));

            computedTemplate.value = download;
        }
    } catch (error: any) {
        console.error(error);
        notificationStore.add({
            title: "Error while generating PDF",
            text: `Please check your console/terminal for the error.`,
            type: "error",
            dialog: true,
        });

        computedTemplate.value = URL.createObjectURL(
            new Blob(["Error occurred: " + (error?.message || error)], {
                type: "text/html",
            })
        );
    }
}

function generatePDF() {
    generateHTML("pdf");
}

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
        await api.patch(
            "/items/TTA_htmltemplates/" + currentTemplate.value.id,
            {
                ...currentTemplate.value,
                id: undefined,
            }
        );
    }

    templateDetails.value = false;

    fetchTemplates();
}

function removeTemplate(id: number) {
    deletingID.value = id;
    deleting.value = true;
}

async function confirmDelete() {
    await api.delete("/items/TTA_htmltemplates/" + deletingID.value);
    templates.value = templates.value.filter((e) => e.id != deletingID.value);
    deleting.value = false;
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
    background-color: var(--theme--form--field--input--background-subdued);
}

.TTA-toolbar {
    background-color: var(--theme--form--field--input--background-subdued);
    display: flex;
    justify-content: space-between;
}

.TTA-toolbar .right-side {
    display: flex;
    align-items: center;
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
    max-height: calc(100vh - 130px);
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

#generatePDF {
    position: fixed;
    top: 69px;
    right: 10px;
}

.tta-notice {
    padding: 10px;
}
</style>
