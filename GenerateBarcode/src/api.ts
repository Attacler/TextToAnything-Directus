import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  "RapidAPI token": string;
  barcodeContent: string;
  includetext: boolean;
  barcodeType: string;
  scale: number;
  height: number;
};

export default defineOperationApi<Options>({
  id: "ttabarcode",
  handler: async (context) => {
    return await (globalThis as any).TTA.generateBarCode(context);
  },
});
