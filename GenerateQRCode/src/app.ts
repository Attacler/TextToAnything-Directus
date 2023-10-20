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
      field: "RapidAPI token",
      name: "RapidAPI token",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "qrcodeContent",
      name: "QRCode content",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
  ],
});
