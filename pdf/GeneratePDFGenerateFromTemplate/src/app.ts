import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "ttapdftemplate",
  name: "TTA generate PDF from template",
  icon: "picture_as_pdf",
  description: "Generate a PDF based on a template trough Text to anything!",
  overview: ({ filename }) => [
    {
      label: "File name",
      text: filename,
    },
  ],
  options: (field) => {
    return [
      {
        field: "filename",
        name: "File name",
        type: "string",
        meta: {
          width: "full",
          interface: "input",
        },
      },
      {
        field: "mode",
        name: "Mode",
        type: "dropdown",
        meta: {
          interface: "select-dropdown",
          options: {
            choices: [
              {
                value: "online",
                text: "Online",
              },
              {
                value: "offline",
                text: "Offline",
              },
            ],
          },
        },
      },
      {
        field: "template",
        name: "Template",
        type: "string",
        meta: {
          interface:
            field.mode == "online"
              ? "TTA-pdf-online-template-selector"
              : "TTA-pdf-template-selector",
          options: {},
          note: "When selecting the online mode, you will be able to select a template from the TextToAnything dashboard. (https://app.texttoanything.nl)",
        },
      },
      {
        field: "templatevariables",
        name: "Template variables",
        type: "json",
        meta: {
          width: "full",
          interface: "input-code",
          options: {
            language: "json",
          },
        },
      },
    ] as any;
  },
});
