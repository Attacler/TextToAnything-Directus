import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  "RapidAPI token": string;
  filename: string;
  pdfoptions: any;
  mode: "offline" | "online";
};

export default defineOperationApi<Options>({
  id: "ttapdftemplate",
  handler: async (context) => {
    if (context.mode == "online") {
      return await (globalThis as any).TTA.generatePDFFromOnlineTemplate(
        context
      );
    }
    return await (globalThis as any).TTA.generatePDFFromTemplate(context);
  },
});
