import { toArray } from "@directus/shared/utils";
import { defineOperationApi } from "@directus/extensions-sdk";
import axios from "axios";

type Options = {
  "RapidAPI token": string;
  filename: string;
  pdfoptions: any;
};

export default defineOperationApi<Options>({
  id: "ttapdf",
  handler: async (context, { getSchema, services, env }) => {
    const fileSerice = new services.FilesService({
      schema: await getSchema(),
    });

    const download = await axios.post(
      "https://text-to-anything.p.rapidapi.com/generatePDF",
      context.pdfoptions,
      {
        headers: {
          "X-RapidAPI-Key": context["RapidAPI token"],
        },
        responseType: "stream",
      }
    );

    return await fileSerice.uploadOne(download.data, {
      filename_download: context.filename || new Date().getTime() + ".pdf",
      type: download.headers["content-type"],
      storage: toArray(env.STORAGE_LOCATIONS)[0],
    });
  },
});
