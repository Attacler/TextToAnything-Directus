import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  "RapidAPI token": string;
  filename: string;
  pdfoptions: any;
};

export default defineOperationApi<Options>({
  id: "ttapdftemplate",
  handler: async (context) => {
    return await (globalThis as any).TTA.generatePDFFromTemplate(context);
  },
});
