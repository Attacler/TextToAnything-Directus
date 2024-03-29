import { toArray } from "@directus/shared/utils";
import { defineOperationApi } from "@directus/extensions-sdk";
import axios from "axios";

type Options = {
  "RapidAPI token": string;
  qrcodeContent: string;
};

export default defineOperationApi<Options>({
  id: "ttaqrcode",
  handler: async (context) => {
    return await (globalThis as any).TTA.generateQRCode(context);
  },
});
