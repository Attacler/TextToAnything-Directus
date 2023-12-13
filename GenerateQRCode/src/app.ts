import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
  id: "ttaqrcode",
  name: "TTA generate QRcode",
  icon: "box",
  description: "Generate a QRcode trough Text to anything!",
  overview: ({ qrcodeContent }) => [
    {
      label: "QRCode content",
      text: qrcodeContent,
    },
  ],
  options: [
    {
      field: "qrcodeContent",
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
        interface: "input",
      },
    },
    {
      field: "darkColor",
      name: "Dark color",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
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
