# directus-extension-texttoanything

## Introduction

Do you want to create PDFs, barcodes, and QR codes within Directus?
This extension bundle offers the required operations to achieve that!
!["Text to anything operations"](images/Operations.png?raw=true "Operations")

## Supported Features

The package currently supports the following operations:

- Create a PDF based on the provided HTML
- Create a PDF based on a HTML Template
- Create a QRCode
- Create a Barcode
- Download a file based on a flow

The actions work trough flow operations and will upload the PDF/QRCode/Barcode directly into Directus.
The operation will return the Directus file id which you can use to link the file to a record.

If there are any questions or bugs, please create an issue. <br>
You can also join our [Discord](https://discord.gg/dbEWUHGmnr) if you need direct support.

## Documentation

- [Installation](https://github.com/Attacler/TextToAnything-Directus/wiki/Installation)
- [Barcodes](https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-Barcode)
- [PDF from HTML](https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-PDF-from-HTML)
- [PDF from template](https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-PDF-templates)
- [QRcode](https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-QRCodes)

## Guides

[How to generate invoice PDFs](https://attacler.medium.com/generating-invoice-pdfs-with-texttoanything-in-directus-e81c324010ac)

## FAQ

1. How do i find or reset my Rapid API key?

You can follow [this article](https://docs.rapidapi.com/docs/keys-and-key-rotation#creating-or-rotating-a-rapid-api-key) in order to achieve this.

2. How can i stop my subscription?

[Click here](https://rapidapi.com/developer/billing/subscriptions-and-usage) if you ever want to cancel your subscription

3. Will there be more features comming?

We are currently working on making this extension a solid stable version. After that we are planning to add HTML to Image.

4. I have an issue or idea, where can i place it?

Please create an issue on [Github](https://github.com/Attacler/TextToAnything-Directus)
