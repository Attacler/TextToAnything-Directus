import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "ttapdf",
  name: "TTA generate PDF",
  icon: "box",
  description: "Generate a PDF trough Text to anything!",
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
              marginLeft: 5,
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
              marginLeft: 5,
            },
            null,
            2
          ),
        },
      },
    },
  ],
});
