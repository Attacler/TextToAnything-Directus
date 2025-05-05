import { defineOperationApp } from "@directus/extensions-sdk";
import { languages } from "./languages.ts";

export default defineOperationApp({
  id: "ttaocr",
  name: "TTA OCR",
  icon: "camera_video",
  description: "TTA scan image with OCR",
  overview: ({ fileID, mode, language }) => [
    {
      label: "Mode",
      text: mode,
    },
    {
      label: "Language",
      text: language,
    },
    {
      label: "File ID",
      text: fileID,
    },
  ],
  options: [
    {
      field: "fileID",
      name: "File ID",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "mode",
      name: "Mode",
      type: "string",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: [
            { text: "Text", value: "text" },
            { text: "Horc", value: "horc" },
            { text: "Blocks", value: "blocks" },
          ],
        },
      },
    },
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
