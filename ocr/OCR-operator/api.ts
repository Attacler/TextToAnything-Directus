import { defineOperationApi } from "@directus/extensions-sdk";

type Options = {
  fileID: string;
  mode: string;
  language: string;
};

export default defineOperationApi<Options>({
  id: "ttaocr",
  handler: async ({ fileID, language, mode }) => {
    return await (globalThis as any).TTA.OCRBasedOnAsset(
      fileID,
      language,
      mode
    );
  },
});
