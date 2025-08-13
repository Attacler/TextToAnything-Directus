import { defineInterface } from "@directus/extensions-sdk";
import InterfaceComponent from "./interface.vue";

export default defineInterface({
  id: "TTA-pdf-online-template-selector",
  name: "PDF online template selector",
  icon: "picture_as_pdf",
  description: "Selector for an online PDF template for Text To Anything",
  component: InterfaceComponent,
  options: null,
  types: ["string"],
});
