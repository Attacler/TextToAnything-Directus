import Busboy from "busboy";
import fs from "node:fs";
import axios from "axios";
import express from "express";

// File processing middleware
const fileParser = (req, res, next) => {
  if (!req.is("multipart/form-data")) {
    return next();
  }

  const busboy = Busboy({ headers: req.headers });
  req.fileData = {}; // Store file data
  req.fields = {}; // Store form fields

  // Handle file parts
  busboy.on("file", (fieldname, file, { filename, encoding, mimeType }) => {
    const chunks = [];

    file.on("data", (data) => {
      chunks.push(data);
    });

    file.on("end", () => {
      const buffer = Buffer.concat(chunks);
      // Place file on req.file
      req.file = {
        fieldname,
        buffer,
        filename,
        encoding,
        mimeType,
      };
    });
  });

  // Handle non-file fields
  busboy.on("field", (fieldname, value) => {
    req.fields[fieldname] = value;
  });

  // When all parts have been processed
  busboy.on("finish", () => {
    next();
  });

  busboy.on("error", (err) => {
    console.error("Busboy error:", err);
    res.status(400).json({
      success: false,
      error: "Error parsing form data",
      details: err.message,
    });
  });

  req.pipe(busboy);
};

export default {
  id: "tta",
  handler: (router) => {
    router.use((req, res, next) => {
      if (req.accountability?.user == null) {
        res.status(403);
        return res.send(`You don't have permission to access this.`);
      }

      next();
    });

    router.get("/pdf.worker.mjs", (req, res) => {
      console.log(__dirname);
      return res.sendFile(__dirname + "/pdf.worker.mjs");
    });

    router.post("/pdf", express.json(), async (req, res) => {
      const {
        status,
        headers,
        data: bodyStream,
      } = await axios
        .post(
          "https://text-to-anything.p.rapidapi.com/generatePDF/" +
            (req.query?.preview ? "preview" : ""),
          req.body,
          {
            headers: {
              "X-RapidAPI-Key": await globalThis.TTA._getRapidAPIKey(),
            },
            responseType: "stream",
            decompress: false,
          }
        )
        .catch(globalThis.TTA._handleRapidAPIError);

      res.status(status);
      res.set(headers);

      bodyStream.pipe(res);
    });

    router.post("/ocr", fileParser, async (req, res) => {
      if (!req.file) {
        res.status(400);
        return res.send(`You did not provide a file.`);
      }
      const { language } = req.query;

      if (!req.file) {
        res.status(400);
        return res.send(`You did not provide a language.`);
      }

      const response = await globalThis.TTA.OCRbasedOnFileBuffer(
        req.file.buffer,
        req.file.filename,
        language,
        "hocr"
      );
      res.json(response);
    });
  },
};
