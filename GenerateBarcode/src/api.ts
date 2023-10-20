import { toArray } from "@directus/shared/utils";
import { defineOperationApi } from "@directus/extensions-sdk";
import axios from "axios";

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
  handler: async (context, { getSchema, services, env }) => {
    const fileSerice = new services.FilesService({
      schema: await getSchema(),
    });

    const download = await axios.get(
      "https://text-to-anything.p.rapidapi.com/generateBarcode",
      {
        params: {
          content: context.barcodeContent,
          type: context.barcodeType,
          scale: context.scale,
          height: context.height,
          includetext: context.includetext,
        },
        headers: {
          "X-RapidAPI-Key": context["RapidAPI token"],
        },
        responseType: "stream",
      }
    );

    return await fileSerice.uploadOne(download.data, {
      filename_download: "barcode-" + context.barcodeContent + ".gif",
      type: download.headers["content-type"],
      storage: toArray(env.STORAGE_LOCATIONS)[0],
    });
  },
});
