import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "ttaqrcode",
  name: "TTA generate QRcode",
  icon: "qr_code",
  description: "Generate a QRcode trough Text to anything!",
  overview: ({ content }) => [
    {
      label: "QRCode content",
      text: content,
    },
  ],
  options: [
    {
      field: "content",
      name: "QRCode content",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "lightColor",
      name: "Light color",
      type: "string",
      meta: {
        width: "full",
        interface: "select-color",
      },
    },
    {
      field: "darkColor",
      name: "Dark color",
      type: "string",
      meta: {
        width: "full",
        interface: "select-color",
      },
    },
    {
      field: "margin",
      name: "Margin",
      type: "integer",
      meta: {
        width: "half",
        interface: "input",
      },
    },
    {
      field: "width",
      name: "Width",
      type: "integer",
      meta: {
        width: "half",
        interface: "input",
      },
    },
  ],
});
