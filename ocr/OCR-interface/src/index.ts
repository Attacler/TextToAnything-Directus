import { defineInterface } from "@directus/extensions-sdk";
import { computed } from "vue";
import InterfaceComponent from "./interface.vue";
import { useStores } from "@directus/extensions-sdk";
import { languages } from "./languages";

export default defineInterface({
  id: "tta-ocr-interface",
  name: "OCR interface",
  icon: "camera_video",
  description: "Use OCR to fill fields. (Text to anything)",
  hideLabel: true,
  hideLoader: true,
  component: InterfaceComponent,
  types: ["alias"],
  localTypes: ["presentation"],
  options: [
    {
      field: "language",
      name: "Language",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: languages,
        },
      },
    },
  ],
});
