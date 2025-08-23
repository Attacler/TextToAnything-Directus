import { toArray } from "@directus/shared/utils";
import { defineHook } from "@directus/extensions-sdk";
import { Liquid } from "liquidjs";
import axios from "axios";
import FormData from "form-data";
import { createReadStream } from "node:fs";
import { setupVirusscanner } from "./virusscanner";

const engine = new Liquid();

export default defineHook(
  ({ action }, { services, getSchema, logger, env, emitter }) => {
    getSchema().then(async (schema) => {
      const collectionService = new services.CollectionsService({ schema });

      const collectionExists =
        (schema.collections || {})["TTA_htmltemplates"] != null;

      if (!collectionExists) {
        await collectionService.createOne({
          collection: "TTA_htmltemplates",
          meta: {
            hidden: true,
            icon: "code",
            singleton: false,
          },
          fields: [
            {
              field: "id",
              type: "integer",
              meta: {
                hidden: true,
                interface: "input",
                readonly: true,
              },
              schema: {
                is_primary_key: true,
                has_auto_increment: true,
              },
            },
          ],
          schema: {},
        });

        schema = await getSchema();
      }
      const fieldsService = new services.FieldsService({ schema });

      const { fields } = schema.collections.TTA_htmltemplates!;

      if (fields.description == null) await addField("description", "text");
      if (fields.collection == null) await addField("collection", "string");
      if (fields.name == null) await addField("name", "text");
      if (fields.header == null) await addField("header", "text");
      if (fields.template == null) await addField("template", "text");
      if (fields.footer == null) await addField("footer", "text");
      if (fields.format == null) await addField("format", "string");
      if (fields.orientation == null) await addField("orientation", "string");
      if (fields.input_type == null) await addField("input_type", "string");
      if (fields.input_flow == null) await addField("input_flow", "string");
      if (fields.input_flow_body == null)
        await addField("input_flow_body", "text");
      if (fields.input_fixed == null) await addField("input_fixed", "text");

      for (const field of [
        "TTA_KEY",
        "TTA_KEY_VIRUS",
        "TTA_VIRUSSCANNER_MODE",
        "TTA_VIRUSSCANNER_FLOW_ID",
      ])
        if (schema.collections.directus_settings?.fields[field] == null) {
          await addField(
            field,
            "string",
            { hidden: true },
            "directus_settings"
          );
        }

      if (
        schema.collections.directus_settings?.fields.TTA_VIRUSSCANNER_ENABLED ==
        null
      )
        await addField(
          "TTA_VIRUSSCANNER_ENABLED",
          "boolean",
          { hidden: true },
          "directus_settings"
        );
      if (
        schema.collections.directus_folders?.fields.TTA_VIRUSSCAN_ENABLED ==
        null
      )
        await addField(
          "TTA_VIRUSSCAN_ENABLED",
          "boolean",
          { hidden: true },
          "directus_folders"
        );

      (globalThis as any).TTA = {
        async generateBarCode(context: any) {
          const fileSerice = new services.FilesService({
            schema: await getSchema(),
          });

          const download = await axios
            .get("https://text-to-anything.p.rapidapi.com/generateBarcode", {
              params: {
                content: context.barcodeContent,
                type: context.barcodeType,
                scale: context.scale,
                height: context.height,
                includetext: context.includetext,
              },
              headers: {
                "X-RapidAPI-Key": await getSettings().then((e) => e.TTA_KEY),
              },
              responseType: "stream",
            })
            .catch(handleRapidAPIError);

          return await fileSerice.uploadOne(download.data, {
            filename_download: "barcode-" + context.barcodeContent + ".gif",
            title: "barcode-" + context.barcodeContent + ".gif",
            type: download.headers["content-type"],
            storage: toArray(env.STORAGE_LOCATIONS)[0],
          });
        },
        async generatePDF(context: any) {
          if (context.pdfoptions?.html == null) {
            throw new Error("No HTML found!");
          }

          if (Object.keys(context.templatevariables || {}).length > 0) {
            const header = engine.parse(context.pdfoptions.header || "");
            const tpl = engine.parse(context.pdfoptions.html);
            const footer = engine.parse(context.pdfoptions.footer || "");
            context.pdfoptions.header = await engine.render(
              header,
              context.templatevariables
            );
            context.pdfoptions.html = await engine.render(
              tpl,
              context.templatevariables
            );
            context.pdfoptions.footer = await engine.render(
              footer,
              context.templatevariables
            );
          }
          const fileSerice = new services.FilesService({
            schema: await getSchema(),
          });

          const download = await axios
            .post(
              "https://text-to-anything.p.rapidapi.com/generatePDF" +
                (context.preview ? "/preview" : "/"),
              context.pdfoptions,
              {
                headers: {
                  "X-RapidAPI-Key": await getSettings().then((e) => e.TTA_KEY),
                },
                responseType: "stream",
              }
            )
            .catch(handleRapidAPIError);

          return await fileSerice.uploadOne(download.data, {
            filename_download:
              context.filename || new Date().getTime() + ".pdf",
            title: context.filename || new Date().getTime() + ".pdf",
            type: download.headers["content-type"],
            storage: toArray(env.STORAGE_LOCATIONS)[0],
          });
        },
        async generatePDFFromTemplate(context: any) {
          const templateService = new services.ItemsService(
            "TTA_htmltemplates",
            {
              schema: await getSchema(),
            }
          );
          const template = await templateService.readOne(context.template);

          return await (globalThis as any).TTA.generatePDF({
            ...context,
            pdfoptions: {
              ...template,
              html: template.template,
              landscape: template.orientation == "landscape",
            },
          });
        },
        async generatePDFFromOnlineTemplate(context: any) {
          const fileSerice = new services.FilesService({
            schema: await getSchema(),
          });

          const download = await axios
            .post(
              "https://text-to-anything.p.rapidapi.com/generatePDF/template",
              {
                templateID: context.template,
                templateData: context.templatevariables,
              },
              {
                headers: {
                  "X-RapidAPI-Key": await getSettings().then((e) => e.TTA_KEY),
                },
                responseType: "stream",
              }
            )
            .catch(handleRapidAPIError);

          return await fileSerice.uploadOne(download.data, {
            filename_download:
              context.filename || new Date().getTime() + ".pdf",
            title: context.filename || new Date().getTime() + ".pdf",
            type: download.headers["content-type"],
            storage: toArray(env.STORAGE_LOCATIONS)[0],
          });
        },
        async generateQRCode(context: any) {
          const fileSerice = new services.FilesService({
            schema: await getSchema(),
          });

          const download = await axios
            .get("https://text-to-anything.p.rapidapi.com/generateQR", {
              params: context,
              headers: {
                "X-RapidAPI-Key": await getSettings().then((e) => e.TTA_KEY),
              },
              responseType: "stream",
            })
            .catch(handleRapidAPIError);

          return await fileSerice.uploadOne(download.data, {
            filename_download: "qrcode-" + context.qrcodeContent + ".png",
            title: "qrcode-" + context.qrcodeContent + ".png",
            type: download.headers["content-type"],
            storage: toArray(env.STORAGE_LOCATIONS)[0],
          });
        },
        async virusscanAsset(fileID: string) {
          const assetsService = new services.AssetsService({
            schema: await getSchema(),
          });

          const { stream, file } = await assetsService.getAsset(fileID);

          const chunks = [];

          for await (const chunk of stream) {
            chunks.push(chunk);
          }

          const buffer = Buffer.concat(chunks);

          if(buffer.byteLength > 50000000){
            logger.warn("[TTA] " + fileID + " has been ignored because of the file 50MB file limit.")
              return;
          }

          const data = new FormData();
          data.append("file", buffer, {
            filename: file.filename_download,
          });

          const options = {
            method: "POST",
            url: "https://virusscan-texttoanything.p.rapidapi.com/virusScan",
            headers: {
              "X-RapidAPI-Key": await getSettings().then(
                (e) => e.TTA_KEY_VIRUS
              ),
              ...data.getHeaders(),
            },
            data,
          };

          const response = await axios.request(options).catch((e) => {
            logger.error("[TTA] " + e);
          });

          if (!response) {
            return {};
          }

          return response.data;
        },
        async OCRBasedOnAsset(fileID: string, language: string, mode: string) {
          const assetsService = new services.AssetsService({
            schema: await getSchema(),
          });

          const { stream, file } = await assetsService.getAsset(fileID);

          const chunks = [];

          for await (const chunk of stream) {
            chunks.push(chunk);
          }

          const result = await globalThis.TTA.OCRbasedOnFileBuffer(
            Buffer.concat(chunks),
            file.filename_download,
            language,
            mode
          );

          return result;
        },
        async OCRbasedOnFileBuffer(
          fileBuffer: any,
          fileName: string,
          language: string = "eng",
          mode: string = "text"
        ) {
          const data = new FormData();
          data.append("image", fileBuffer, {
            filename: fileName,
          });

          const options = {
            method: "POST",
            url: "https://text-to-anything.p.rapidapi.com/ocr",
            params: {
              language,
              mode,
            },
            headers: {
              "X-RapidAPI-Key": await getSettings().then((e) => e.TTA_KEY),
              ...data.getHeaders(),
            },
            data,
          };

          const response = await axios.request(options).catch((e) => {
            logger.error("[TTA] " + e);
          });

          if (!response) {
            return [];
          }

          return response.data;
        },
        _getRapidAPIKey: () => getSettings().then((e) => e.TTA_KEY),
        _getSettings: () => getSettings(),
        _handleRapidAPIError: handleRapidAPIError,
      };

      async function addField(
        name: string,
        type: string,
        meta: any = {},
        collection = "TTA_htmltemplates"
      ) {
        try {
          await fieldsService.createField(collection, {
            field: name,
            type,
            meta,
          });
        } catch (error) {
          logger.warn(
            "[TTA] Error while creating '" +
              name +
              "' in the collection " +
              collection +
              ": "
          );
          console.error(error);
        }
      }

      async function handleRapidAPIError(error: any): Promise<any> {
        let errorStream: any;
        if (error.response) {
          errorStream = error.response.data;
        } else {
          // Something happened in setting up the request that triggered an Error
          logger.error("[TTA] Request setup error:", error.message);
          throw new Error(error.message);
        }

        return await new Promise((_res, rej) => {
          let error = "";
          // Log the error response data to the console
          errorStream.on("data", (chunk: any) => {
            error += chunk.toString();
          });

          // Close the connection when the error stream ends
          errorStream.on("end", () => {
            logger.error("[TTA] " + error);
            rej(error);
          });
        });
      }

      // async function getRapidAPIKey() {
      async function getSettings() {
        const settingsService = new services.SettingsService({
          schema: await getSchema(),
        });

        const fields = [
          "TTA_KEY",
          "TTA_KEY_VIRUS",
          "TTA_VIRUSSCANNER_ENABLED",
          "TTA_VIRUSSCANNER_MODE",
          "TTA_VIRUSSCANNER_FLOW_ID",
        ];

        return await settingsService.readSingleton({ fields });
      }
    });

    setupVirusscanner(env, action, services);
  }
);
