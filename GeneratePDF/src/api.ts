import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  "RapidAPI token": string;
  filename: string;
  pdfoptions: any;
};

export default defineOperationApi<Options>({
  id: "ttapdf",
  handler: async (context) => {
    return await (globalThis as any).TTA.generatePDF(context);
  },
});
