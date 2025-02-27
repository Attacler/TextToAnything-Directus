import { defineOperationApp } from "@directus/extensions-sdk";
const types = [
  "auspost",
  "azteccode",
  "azteccodecompact",
  "aztecrune",
  "bc412",
  "channelcode",
  "codablockf",
  "code11",
  "code128",
  "code16k",
  "code2of5",
  "code32",
  "code39",
  "code39ext",
  "code49",
  "code93",
  "code93ext",
  "codeone",
  "coop2of5",
  "daft",
  "databarexpanded",
  "databarexpandedcomposite",
  "databarexpandedstacked",
  "databarexpandedstackedcomposite",
  "databarlimited",
  "databarlimitedcomposite",
  "databaromni",
  "databaromnicomposite",
  "databarstacked",
  "databarstackedcomposite",
  "databarstackedomni",
  "databarstackedomnicomposite",
  "databartruncated",
  "databartruncatedcomposite",
  "datalogic2of5",
  "datamatrix",
  "datamatrixrectangular",
  "datamatrixrectangularextension",
  "dotcode",
  "ean13",
  "ean13composite",
  "ean14",
  "ean2",
  "ean5",
  "ean8",
  "ean8composite",
  "flattermarken",
  "gs1-128",
  "gs1-128composite",
  "gs1-cc",
  "gs1datamatrix",
  "gs1datamatrixrectangular",
  "gs1dldatamatrix",
  "gs1dlqrcode",
  "gs1dotcode",
  "gs1northamericancoupon",
  "gs1qrcode",
  "hanxin",
  "hibcazteccode",
  "hibccodablockf",
  "hibccode128",
  "hibccode39",
  "hibcdatamatrix",
  "hibcdatamatrixrectangular",
  "hibcmicropdf417",
  "hibcpdf417",
  "hibcqrcode",
  "iata2of5",
  "identcode",
  "industrial2of5",
  "interleaved2of5",
  "isbn",
  "ismn",
  "issn",
  "itf14",
  "japanpost",
  "kix",
  "leitcode",
  "mailmark",
  "mands",
  "matrix2of5",
  "maxicode",
  "micropdf417",
  "microqrcode",
  "msi",
  "onecode",
  "pdf417",
  "pdf417compact",
  "pharmacode",
  "pharmacode2",
  "planet",
  "plessey",
  "posicode",
  "postnet",
  "pzn",
  "qrcode",
  "rationalizedCodabar",
  "raw",
  "rectangularmicroqrcode",
  "royalmail",
  "sscc18",
  "swissqrcode",
  "symbol",
  "telepen",
  "telepennumeric",
  "ultracode",
  "upca",
  "upcacomposite",
  "upce",
  "upcecomposite",
];

export default defineOperationApp({
  id: "ttabarcode",
  name: "TTA generate barcode",
  icon: "barcode",
  description: "Generate a barcode trough Text to anything!",
  overview: ({ barcodeContent }) => [
    {
      label: "barcode content",
      text: barcodeContent,
    },
  ],
  options: [
    {
      field: "barcodeContent",
      name: "content",
      type: "string",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "barcodeType",
      name: "type",
      type: "dropdown",
      meta: {
        interface: "select-dropdown",
        options: {
          choices: types.map((e) => ({ text: e, value: e })),
        },
      },
    },
    {
      field: "scale",
      name: "scale",
      type: "number",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "height",
      name: "height",
      type: "number",
      meta: {
        width: "full",
        interface: "input",
      },
    },
    {
      field: "includetext",
      name: "include text",
      type: "boolean",
      meta: {
        width: "full",
        interface: "boolean",
      },
    },
  ],
});
