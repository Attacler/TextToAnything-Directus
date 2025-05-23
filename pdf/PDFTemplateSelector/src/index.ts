import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "TTA-pdf-template-selector",
  name: "PDF template selector",
  icon: "picture_as_pdf",
  description: "Selector for a PDF template for Text To Anything",
  component: InterfaceComponent,
  options: null,
  types: ["string"],
});
