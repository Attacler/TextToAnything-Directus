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
  options: [
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
      field: "template",
      name: "Template",
      type: "string",
      meta: {
        interface: "TTA-pdf-template-selector",
        options: {},
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
  ],
});
