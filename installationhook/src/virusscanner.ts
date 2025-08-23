import axios from "axios";

export function setupVirusscanner(
  env: any,
  action: any,
  services: any
) {
  action("files.upload", async (params: any, context: any) => {
    const settings = await globalThis.TTA._getSettings();

    if (settings.TTA_VIRUSSCANNER_ENABLED != true || !params.payload.folder) {
      return;
    }

    
    const { FilesService, FoldersService } = services;

    const folderService = new FoldersService({
      schema: context.schema,
    });

    const getFolder = await folderService.readOne(params.payload.folder, {
      fields: ["TTA_VIRUSSCAN_ENABLED"],
    });

    if (getFolder.TTA_VIRUSSCAN_ENABLED != true) {
        return;
    }

    const scanFile = await globalThis.TTA.virusscanAsset(params.key);
    
    if (scanFile?.isInfected) {
      if (settings.TTA_VIRUSSCANNER_MODE == "delete") {
        const filesService = new FilesService({
          schema: context.schema,
        });

        await filesService.deleteOne(params.key);
      } else if (settings.TTA_VIRUSSCANNER_FLOW_ID) {
        const url = new URL(
          (env.PUBLIC_URL || "").length > 3
            ? env.PUBLIC_URL
            : "http://localhost:8055"
        );
        url.pathname = "/flows/trigger/" + settings.TTA_VIRUSSCANNER_FLOW_ID;
        
        await axios.post(url.toString(), params).catch(globalThis.TTA._handleRapidAPIError);
      }
    }
  });
}
