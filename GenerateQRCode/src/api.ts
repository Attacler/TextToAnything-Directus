import { toArray } from "@directus/shared/utils";
import { defineOperationApi } from "@directus/extensions-sdk";
import axios from "axios";

type Options = {
  "RapidAPI token": string;
  qrcodeContent: string;
};

export default defineOperationApi<Options>({
  id: "ttaqrcode",
  handler: async (context, { getSchema, services, env }) => {
    const fileSerice = new services.FilesService({
      schema: await getSchema(),
    });

    const download = await axios.get(
      "https://text-to-anything.p.rapidapi.com/generateQR",
      {
        params: {
          content: context.qrcodeContent,
        },
        headers: {
          "X-RapidAPI-Key": context["RapidAPI token"],
        },
        responseType: "stream",
      }
    );

    return await fileSerice.uploadOne(download.data, {
      filename_download: "qrcode-" + context.qrcodeContent + ".gif",
      type: download.headers["content-type"],
      storage: toArray(env.STORAGE_LOCATIONS)[0],
    });
  },
});
