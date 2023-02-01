# directus-extension-texttoanything

> **Currently in Beta** please report any issues you encounter

## Introduction

Do you want to create PDFs, barcodes, and QR codes within Directus?
This extension bundle offers the required operations to achieve that!

## Setup

To install the package, use either npm or yarn:

```sh
npm i directus-extension-texttoanything
```

or

```sh
yarn add directus-extension-texttoanything
```

### API

The API is a requirement for the extension in order to eliminate dependencies specific to the operating system. Get the necessary API token at https://rapidapi.com/Attacler/api/text-to-anything. The extension will not function without it, but there is a free tier available for testing.

Restart your Directus instance to complete the setup.

## Supported Features

The package currently supports the following operations:

- Create a PDF based on the provided HTML
- Create a QRCode
- Create a Barcode

The actions work trough flow operations and will upload the PDF/QRCode/Barcode directly into Directus.
The operation will return the Directus file id which you can use to link the file to a record.

If there are any questions or bugs, please create an issue.
