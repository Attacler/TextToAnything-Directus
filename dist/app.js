import { defineOperationApp, useApi, useStores, defineModule, defineInterface } from '@directus/extensions-sdk';
import { resolveComponent, openBlock, createBlock, withCtx, createVNode, createCommentVNode, defineComponent, ref, computed, onMounted, watch, createTextVNode, unref, createElementBlock, createElementVNode, toDisplayString, resolveDynamicComponent, normalizeStyle, Fragment, pushScopeId, popScopeId, inject } from 'vue';

const types = [
  "auspost",
  "azteccode",
  "azteccodecompact",
  "aztecrune",
  "bc412",
  "channelcode",
  "codablockf",
  "code11",
  "code128",
  "code16k",
  "code2of5",
  "code32",
  "code39",
  "code39ext",
  "code49",
  "code93",
  "code93ext",
  "codeone",
  "coop2of5",
  "daft",
  "databarexpanded",
  "databarexpandedcomposite",
  "databarexpandedstacked",
  "databarexpandedstackedcomposite",
  "databarlimited",
  "databarlimitedcomposite",
  "databaromni",
  "databaromnicomposite",
  "databarstacked",
  "databarstackedcomposite",
  "databarstackedomni",
  "databarstackedomnicomposite",
  "databartruncated",
  "databartruncatedcomposite",
  "datalogic2of5",
  "datamatrix",
  "datamatrixrectangular",
  "datamatrixrectangularextension",
  "dotcode",
  "ean13",
  "ean13composite",
  "ean14",
  "ean2",
  "ean5",
  "ean8",
  "ean8composite",
  "flattermarken",
  "gs1-128",
  "gs1-128composite",
  "gs1-cc",
  "gs1datamatrix",
  "gs1datamatrixrectangular",
  "gs1dldatamatrix",
  "gs1dlqrcode",
  "gs1dotcode",
  "gs1northamericancoupon",
  "gs1qrcode",
  "hanxin",
  "hibcazteccode",
  "hibccodablockf",
  "hibccode128",
  "hibccode39",
  "hibcdatamatrix",
  "hibcdatamatrixrectangular",
  "hibcmicropdf417",
  "hibcpdf417",
  "hibcqrcode",
  "iata2of5",
  "identcode",
  "industrial2of5",
  "interleaved2of5",
  "isbn",
  "ismn",
  "issn",
  "itf14",
  "japanpost",
  "kix",
  "leitcode",
  "mailmark",
  "mands",
  "matrix2of5",
  "maxicode",
  "micropdf417",
  "microqrcode",
  "msi",
  "onecode",
  "pdf417",
  "pdf417compact",
  "pharmacode",
  "pharmacode2",
  "planet",
  "plessey",
  "posicode",
  "postnet",
  "pzn",
  "qrcode",
  "rationalizedCodabar",
  "raw",
  "rectangularmicroqrcode",
  "royalmail",
  "sscc18",
  "swissqrcode",
  "symbol",
  "telepen",
  "telepennumeric",
  "ultracode",
  "upca",
  "upcacomposite",
  "upce",
  "upcecomposite"
];
var e0 = defineOperationApp({
  id: "ttabarcode",
  name: "TTA generate barcode",
  icon: "box",
  description: "Generate a barcode trough Text to anything!",
  overview: ({ barcodeContent }) => [
    {
      label: "barcode content",
      text: barcodeContent
    }
  ],
  options: [
    {
      field: "barcodeContent",
      name: "content",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "barcodeType",
      name: "type",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: types.map((e) => ({ text: e, value: e }))
        }
      }
    },
    {
      field: "scale",
      name: "scale",
      type: "number",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "height",
      name: "height",
      type: "number",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "includetext",
      name: "include text",
      type: "boolean",
      meta: {
        width: "full",
        interface: "boolean"
      }
    }
  ]
});

var e1 = defineOperationApp({
  id: "ttapdf",
  name: "TTA generate PDF",
  icon: "box",
  description: "Generate a PDF trough Text to anything!",
  overview: ({ filename }) => [
    {
      label: "File name",
      text: filename
    }
  ],
  options: [
    {
      field: "filename",
      name: "File name",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "pdfoptions",
      name: "Options",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        options: {
          language: "json",
          placeholder: JSON.stringify(
            {
              html: "<h1>Hello world!</h1>",
              format: "A4",
              landscape: false,
              margin: 10,
              marginRight: 5,
              marginLeft: 5
            },
            null,
            2
          ),
          template: JSON.stringify(
            {
              html: "<h1>Hello world!</h1>",
              format: "A4",
              landscape: false,
              margin: 10,
              marginRight: 5,
              marginLeft: 5
            },
            null,
            2
          )
        }
      }
    }
  ]
});

var e2 = defineOperationApp({
  id: "ttapdftemplate",
  name: "TTA generate PDF from template",
  icon: "box",
  description: "Generate a PDF based on a template trough Text to anything!",
  overview: ({ filename }) => [
    {
      label: "File name",
      text: filename
    }
  ],
  options: [
    {
      field: "filename",
      name: "File name",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "template",
      name: "Template",
      type: "string",
      meta: {
        interface: "TTA-pdf-template-selector",
        options: {}
      }
    },
    {
      field: "templatevariables",
      name: "Template variables",
      type: "json",
      meta: {
        width: "full",
        interface: "input-code",
        options: {
          language: "json"
        }
      }
    }
  ]
});

var e3 = defineOperationApp({
  id: "ttaqrcode",
  name: "TTA generate QRcode",
  icon: "box",
  description: "Generate a QRcode trough Text to anything!",
  overview: ({ content }) => [
    {
      label: "QRCode content",
      text: content
    }
  ],
  options: [
    {
      field: "content",
      name: "QRCode content",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "lightColor",
      name: "Light color",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "darkColor",
      name: "Dark color",
      type: "string",
      meta: {
        width: "full",
        interface: "input"
      }
    },
    {
      field: "margin",
      name: "Margin",
      type: "integer",
      meta: {
        width: "half",
        interface: "input"
      }
    },
    {
      field: "width",
      name: "Width",
      type: "integer",
      meta: {
        width: "half",
        interface: "input"
      }
    }
  ]
});

function render(_ctx, _cache) {
  const _component_v_icon = resolveComponent("v-icon");
  const _component_v_list_item_icon = resolveComponent("v-list-item-icon");
  const _component_v_text_overflow = resolveComponent("v-text-overflow");
  const _component_v_list_item_content = resolveComponent("v-list-item-content");
  const _component_v_list_item = resolveComponent("v-list-item");
  const _component_v_list = resolveComponent("v-list");

  return (openBlock(), createBlock(_component_v_list, { nav: "" }, {
    default: withCtx(() => [
      createVNode(_component_v_list_item, { to: "/tta_settings/templates" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "code" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Templates" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createVNode(_component_v_list_item, { to: "/tta_settings/settings" }, {
        default: withCtx(() => [
          createVNode(_component_v_list_item_icon, null, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "settings" })
            ]),
            _: 1 /* STABLE */
          }),
          createVNode(_component_v_list_item_content, null, {
            default: withCtx(() => [
              createVNode(_component_v_text_overflow, { text: "Settings" })
            ]),
            _: 1 /* STABLE */
          })
        ]),
        _: 1 /* STABLE */
      }),
      createCommentVNode(" <v-list-item to=\"/tta_settings/usage\">\n      <v-list-item-icon><v-icon name=\"bar_chart\" /></v-list-item-icon>\n      <v-list-item-content>\n        <v-text-overflow text=\"Usage\" />\n      </v-list-item-content>\n    </v-list-item> ")
    ]),
    _: 1 /* STABLE */
  }))
}

const script$4 = {};


script$4.render = render;
script$4.__file = "settingsmodule/src/TTAnav.vue";

const _hoisted_1$1 = {
  key: 0,
  class: "TTA-popup"
};
const _hoisted_2$1 = { class: "TTA-toolbar" };
const _hoisted_3$1 = { class: "right-side" };
const _hoisted_4$1 = { class: "setwidth" };
const _hoisted_5 = { class: "TTA-action" };
const _hoisted_6 = { class: "TTA-wapper" };
const _hoisted_7 = ["srcdoc"];
var script$3 = /* @__PURE__ */ defineComponent({
  __name: "templates",
  setup(__props) {
    const templates = ref([]), templateDetails = ref(false), editTemplate = ref(false), assetsKey = ref("");
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
      orientation: "portrait"
    });
    const { useCollectionsStore } = useStores();
    const collectionsStore = useCollectionsStore();
    const collections = computed(() => {
      return collectionsStore.collections.filter((e) => e.collection != "TTA_htmltemplates").map((e) => ({
        text: e.name,
        value: e.collection
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
          limit: -1
        }
      });
      templates.value = getTemplates.data.data;
    }
    async function saveTemplate() {
      console.log(currentTemplate.value);
      if (currentTemplate.value.id == -1) {
        await api.post("/items/TTA_htmltemplates", {
          ...currentTemplate.value,
          id: void 0
        });
      } else {
        await api.patch("/items/TTA_htmltemplates/" + currentTemplate.value.id, {
          ...currentTemplate.value,
          id: void 0
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
        orientation: "portrait"
      };
      editTemplate.value = false;
    }
    return (_ctx, _cache) => {
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_input = resolveComponent("v-input");
      const _component_v_list_item_content = resolveComponent("v-list-item-content");
      const _component_v_list_item = resolveComponent("v-list-item");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_list = resolveComponent("v-list");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_v_dialog = resolveComponent("v-dialog");
      const _component_v_slider = resolveComponent("v-slider");
      const _component_v_table = resolveComponent("v-table");
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Templates" }, {
        navigation: withCtx(() => [
          createVNode(script$4)
        ]),
        actions: withCtx(() => [
          createVNode(_component_v_button, {
            rounded: "",
            icon: "",
            onClick: _cache[0] || (_cache[0] = ($event) => templateDetails.value = true)
          }, {
            default: withCtx(() => [
              createVNode(_component_v_icon, { name: "add" })
            ]),
            _: 1
          }),
          createVNode(_component_v_dialog, {
            modelValue: templateDetails.value,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => templateDetails.value = $event),
            persistent: true
          }, {
            default: withCtx(() => [
              createVNode(_component_v_card, null, {
                default: withCtx(() => [
                  createVNode(_component_v_card_title, null, {
                    default: withCtx(() => [
                      createTextVNode("Create a new HTML template")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_text, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_list, null, {
                        default: withCtx(() => [
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_input, {
                                    modelValue: currentTemplate.value.name,
                                    "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => currentTemplate.value.name = $event),
                                    placeholder: "Template name"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_input, {
                                    modelValue: currentTemplate.value.description,
                                    "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => currentTemplate.value.description = $event),
                                    placeholder: "Description"
                                  }, null, 8, ["modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: currentTemplate.value.format,
                                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => currentTemplate.value.format = $event),
                                    placeholder: "Size",
                                    items: [
                                      "A1",
                                      "A2",
                                      "A3",
                                      "A4",
                                      "A5",
                                      "A6",
                                      "Letter",
                                      "Legal",
                                      "Tabloid",
                                      "Ledger"
                                    ].map((e) => ({ text: e, value: e }))
                                  }, null, 8, ["modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: currentTemplate.value.orientation,
                                    "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => currentTemplate.value.orientation = $event),
                                    placeholder: "Orientation",
                                    items: ["portrait", "landscape"].map((e) => ({
                                      text: e,
                                      value: e
                                    }))
                                  }, null, 8, ["modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_v_list_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_v_list_item_content, null, {
                                default: withCtx(() => [
                                  createVNode(_component_v_select, {
                                    modelValue: currentTemplate.value.collection,
                                    "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => currentTemplate.value.collection = $event),
                                    items: unref(collections),
                                    placeholder: "Collection"
                                  }, null, 8, ["modelValue", "items"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_v_card_actions, null, {
                    default: withCtx(() => [
                      createVNode(_component_v_button, {
                        secondary: "",
                        onClick: _cache[6] || (_cache[6] = ($event) => templateDetails.value = false)
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Cancel ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_button, {
                        disabled: !currentTemplate.value.collection || !currentTemplate.value.name || !currentTemplate.value.format,
                        onClick: saveTemplate
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Save ")
                        ]),
                        _: 1
                      }, 8, ["disabled"])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue"])
        ]),
        default: withCtx(() => [
          editTemplate.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createElementVNode("div", _hoisted_2$1, [
              createElementVNode("div", {
                onClick: _cache[8] || (_cache[8] = ($event) => templateDetails.value = true),
                class: "TTA-template-title"
              }, [
                createTextVNode(toDisplayString(currentTemplate.value.name) + " ", 1),
                createVNode(_component_v_icon, { name: "edit" })
              ]),
              createElementVNode("div", _hoisted_3$1, [
                createElementVNode("div", {
                  class: "TTA-action",
                  onClick: saveTemplate
                }, [
                  createVNode(_component_v_icon, { name: "save" })
                ]),
                createElementVNode("div", _hoisted_4$1, [
                  createVNode(_component_v_slider, {
                    modelValue: widthPartition.value,
                    "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => widthPartition.value = $event),
                    min: 10,
                    max: 90,
                    class: "TTA-slider"
                  }, null, 8, ["modelValue"])
                ]),
                createElementVNode("div", _hoisted_5, [
                  createVNode(_component_v_icon, {
                    name: "close",
                    onClick: closeEditor
                  })
                ])
              ])
            ]),
            createElementVNode("div", _hoisted_6, [
              (openBlock(), createBlock(resolveDynamicComponent("interface-input-rich-text-html"), {
                class: "TTA-editor",
                value: currentTemplate.value.template,
                imageToken: assetsKey.value,
                onInput: _cache[10] || (_cache[10] = (html) => currentTemplate.value.template = html),
                style: normalizeStyle("width: " + unref(editorWidth) + "%")
              }, null, 40, ["value", "imageToken", "style"])),
              createElementVNode("iframe", {
                class: "TTA-preview",
                srcdoc: unref(computedTemplate),
                style: normalizeStyle("width: " + unref(previewWidth) + "%")
              }, null, 12, _hoisted_7)
            ])
          ])) : createCommentVNode("v-if", true),
          createVNode(_component_v_table, {
            headers: [
              {
                text: "Name",
                value: "name"
              },
              {
                text: "Description",
                value: "description"
              },
              {
                text: "Collection",
                value: "collection"
              },
              {
                text: "Format",
                value: "format"
              }
            ],
            "onClick:row": openTemplate,
            items: templates.value
          }, null, 8, ["items"])
        ]),
        _: 1
      });
    };
  }
});

var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

var css$1 = "\n.TTA-popup {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 100;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--background-subdued);\n}\n.TTA-toolbar {\n  background-color: var(--background-subdued);\n  display: flex;\n  justify-content: space-between;\n}\n.TTA-toolbar .right-side {\n  display: flex;\n  gap: 5px;\n}\n.TTA-toolbar .TTA-slider {\n  padding-top: 5px;\n}\n.TTA-toolbar .TTA-action {\n  padding: 5px;\n  cursor: pointer;\n}\n.TTA-toolbar .setwidth {\n  display: flex;\n  gap: 10px;\n  padding-top: 6px;\n}\n.TTA-toolbar .TTA-template-title {\n  margin: auto 0;\n  font-size: 18px;\n  cursor: pointer;\n  padding-right: 5px;\n  padding-left: 20px;\n  border-bottom: 1px solid var(--v-list-item-border-color);\n}\n.TTA-toolbar .TTA-template-title i {\n  padding-left: 5px;\n}\n.TTA-wapper {\n  display: flex;\n  flex-grow: 1;\n}\n.TTA-preview {\n  flex-grow: 1;\n  background-color: white;\n  border: 0;\n}\n.TTA-editor {\n  flex-grow: 1;\n  height: 100%;\n}\n.TTA-editor .tox.tox-tinymce {\n  height: 100% !important;\n  border-radius: 0 !important;\n}\n";
n(css$1,{});

script$3.__file = "settingsmodule/src/templates.vue";

const _withScopeId = (n) => (pushScopeId("data-v-014dce90"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "px-5" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "field-name" }, "RapidAPI token", -1));
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "field-name" }, "Directus Assets token", -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { class: "field-name" }, "Directus Assets folder", -1));
var script$2 = /* @__PURE__ */ defineComponent({
  __name: "settings",
  setup(__props) {
    const rapidKey = ref("");
    const assetsKey = ref("");
    const assetsFolder = ref("");
    const saving = ref(false);
    const api = useApi();
    const folder = ref([]);
    onMounted(async () => {
      const settings = await api.get("/settings");
      rapidKey.value = settings.data.data.TTA_KEY;
      assetsKey.value = settings.data.data.TTA_ASSETS_KEY;
      assetsFolder.value = settings.data.data.TTA_ASSETS_FOLDER;
      const folders = await api.get("/folders");
      folder.value = folders.data.data.map((e) => ({
        text: e.name,
        value: e.id
      }));
    });
    async function saveSettings() {
      saving.value = true;
      await api.patch("/settings", {
        TTA_KEY: rapidKey.value,
        TTA_ASSETS_KEY: assetsKey.value,
        TTA_ASSETS_FOLDER: assetsFolder.value
      });
      setTimeout(() => {
        saving.value = false;
      }, 500);
    }
    return (_ctx, _cache) => {
      const _component_v_card_title = resolveComponent("v-card-title");
      const _component_v_input = resolveComponent("v-input");
      const _component_v_select = resolveComponent("v-select");
      const _component_v_card_text = resolveComponent("v-card-text");
      const _component_v_icon = resolveComponent("v-icon");
      const _component_v_button = resolveComponent("v-button");
      const _component_v_progress_circular = resolveComponent("v-progress-circular");
      const _component_v_card_actions = resolveComponent("v-card-actions");
      const _component_v_card = resolveComponent("v-card");
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Settings" }, {
        navigation: withCtx(() => [
          createVNode(script$4)
        ]),
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_v_card, { class: "w-full" }, {
              default: withCtx(() => [
                createVNode(_component_v_card_title, null, {
                  default: withCtx(() => [
                    createTextVNode("API settings")
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_text, { class: "fields-spacing" }, {
                  default: withCtx(() => [
                    createElementVNode("div", null, [
                      _hoisted_2,
                      createVNode(_component_v_input, {
                        modelValue: rapidKey.value,
                        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => rapidKey.value = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", null, [
                      _hoisted_3,
                      createVNode(_component_v_input, {
                        modelValue: assetsKey.value,
                        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => assetsKey.value = $event)
                      }, null, 8, ["modelValue"])
                    ]),
                    createElementVNode("div", null, [
                      _hoisted_4,
                      createVNode(_component_v_select, {
                        modelValue: assetsFolder.value,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => assetsFolder.value = $event),
                        items: folder.value,
                        placeholder: "Assets folder"
                      }, null, 8, ["modelValue", "items"])
                    ])
                  ]),
                  _: 1
                }),
                createVNode(_component_v_card_actions, null, {
                  default: withCtx(() => [
                    createVNode(_component_v_button, {
                      href: "https://rapidapi.com/Attacler/api/text-to-anything",
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_v_icon, { name: "open_in_new" }),
                        createTextVNode(" Get RapidAPI token ")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_v_button, {
                      onClick: saveSettings,
                      disabled: saving.value
                    }, {
                      default: withCtx(() => [
                        !saving.value ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                          createTextVNode(" Save ")
                        ], 64)) : (openBlock(), createBlock(_component_v_progress_circular, {
                          key: 1,
                          small: true,
                          indeterminate: ""
                        }))
                      ]),
                      _: 1
                    }, 8, ["disabled"])
                  ]),
                  _: 1
                })
              ]),
              _: 1
            })
          ])
        ]),
        _: 1
      });
    };
  }
});

var css = "\n.w-full[data-v-014dce90] {\n  width: 100%;\n}\n.px-5[data-v-014dce90] {\n  padding: 0 2.5rem;\n}\n.fields-spacing[data-v-014dce90] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n";
n(css,{});

script$2.__scopeId = "data-v-014dce90";
script$2.__file = "settingsmodule/src/settings.vue";

var script$1 = /* @__PURE__ */ defineComponent({
  __name: "usage",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_private_view = resolveComponent("private-view");
      return openBlock(), createBlock(_component_private_view, { title: "Usage" }, {
        navigation: withCtx(() => [
          createVNode(script$4)
        ]),
        default: withCtx(() => [
          createTextVNode(" Comming soon! ")
        ]),
        _: 1
      });
    };
  }
});

script$1.__file = "settingsmodule/src/usage.vue";

var e4 = defineModule({
  id: "tta_settings",
  name: "Text to anything settings",
  icon: "text_fields",
  routes: [
    {
      path: "",
      redirect: "/tta_settings/templates"
    },
    {
      path: "templates",
      component: script$3
    },
    {
      path: "settings",
      component: script$2
    },
    {
      path: "usage",
      component: script$1
    }
  ]
});

var script = /* @__PURE__ */ defineComponent({
  __name: "interface",
  props: ["value"],
  emits: ["input"],
  setup(__props, { emit }) {
    const props = __props;
    const api = inject("api");
    const value = ref(""), templates = ref([]);
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
        value: e.id
      }));
    });
    return (_ctx, _cache) => {
      const _component_v_select = resolveComponent("v-select");
      return openBlock(), createBlock(_component_v_select, {
        modelValue: value.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
        items: templates.value
      }, null, 8, ["modelValue", "items"]);
    };
  }
});

script.__file = "PDFTemplateSelector/src/interface.vue";

var e5 = defineInterface({
  id: "TTA-pdf-template-selector",
  name: "PDF template selector",
  icon: "box",
  description: "Selector for a PDF template for Text To Anything",
  component: script,
  options: null,
  types: ["string"]
});

const interfaces = [e5];const displays = [];const layouts = [];const modules = [e4];const panels = [];const operations = [e0,e1,e2,e3];

export { displays, interfaces, layouts, modules, operations, panels };
