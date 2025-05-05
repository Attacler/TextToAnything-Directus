# Directus TextToAnything extension

## Introduction

Do you want to create PDFs, barcodes, and QR codes or use OCR within Directus?
This extension bundle offers the required operations to achieve that!

The installation process is explained in [The wiki](https://github.com/Attacler/TextToAnything-Directus/wiki/Installation).

## Features


<details>
  <summary><h3>OCR based on a file</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-OCR" target="_blank">the wiki</a>.<br>
  <h4>OCR as interface</h4>
  <img src="https://github.com/user-attachments/assets/0631dc3c-a804-4d3b-a891-38f265e389f9">
  <h4>OCR inside of flows</h4>
  <img src="https://github.com/user-attachments/assets/50279123-6c5f-4c1a-acfb-a2b16905cffc"> <br>
  <h4>OCR inside extensions</h4>
  Check the wiki for more information on using OCR inside of extensions.
</details>

<details>
  <summary><h3>PDF generation based on HTML</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-PDF-from-HTML" target="_blank">the wiki</a>.<br>
  <h4>HTML to PFD inside Flows</h4>
  <img src="https://github.com/user-attachments/assets/2ee7b857-ca3a-4d09-85eb-a5ddf3d5d57c">
  <h4>HTML to PDF inside extensions</h4> <br>

```js
const fileID = await globalThis.TTA.generatePDF({
    "pdfoptions": {
        "html": "HTML body",
        "footer":"HTML footer",
        "footer":"HTML header",
        "format": "A4",
       "landscape": false,
       "margin": 10,
       "marginRight": 5,
       "marginLeft": 500,
    },
    "filename": "file.pdf"
});
```
</details>


<details>
  <summary><h3>HTML PDF templates</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-PDF-templates" target="_blank">the wiki</a>.<br>
  Since creating a PDF template can be challenging when working solely with strings, this extension also includes a built-in template editor.<br>
  <img src="https://github.com/user-attachments/assets/5a00fdad-789e-49c1-9895-17adbd80415b">
  PDF generation based on a template can be done in 2 ways: <br>  
  <h4>Template to PF inside Flows</h4>
  <img src="https://github.com/user-attachments/assets/412a01fe-22e6-483c-aacf-a40b343a7720">
  <h4>HTML to PDF inside extensions</h4> <br>

```js
const fileID = await globalThis.TTA.generatePDFFromTemplate({
  template: templateIDHere,
  templatevariables: { variableOne: "A", variableTwo: "B"}
});
```
</details>



<details>
  <summary><h3>QR code generation</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-QRCodes" target="_blank">the wiki</a>.<br>
  <h4>QR code generation inside Flows</h4>
  <img src="https://github.com/user-attachments/assets/4dacc7bd-c8ce-47f1-a38c-fc3525b8f79b">
  <h4>QR code generation inside extensions</h4> <br>

```js
const fileID = await globalThis.TTA.generateQRCode({
    "content": "Your barcode content!",
    "darkColor": "fff",
    "lightColor": "000",
    "margin": 2,
    "width": 200
});
```
</details>

<details>
  <summary><h3>Barcode generation</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-Barcode" target="_blank">the wiki</a>.<br>
  <h4>Barcode generation inside Flows</h4>
  <img src="https://github.com/user-attachments/assets/016b72ba-fd74-4c58-94fd-7cef2ce194e5">
  <h4>Barcode generation inside extensions</h4> <br>

```js
const fileID = await globalThis.TTA.generateBarCode({
    "barcodeContent": "Your barcode content!",
    "barcodeType": "code128",
    "scale": 2,
    "height": 10,
    "includetext": true,
});
```
</details>

<details>
  <summary><h3>Download file interface from a flow</h3></summary>
  More info on <a href="https://github.com/Attacler/TextToAnything-Directus/wiki/Usage-%E2%80%90-Download-file" target="_blank">the wiki</a>.<br>
  The interface will display a button and download the file id returned by a flow, for example: <br>
  <img src="https://github.com/user-attachments/assets/ce9c2b81-cb5d-4e67-93d3-6e42d92ed6ce">

</details>
<br>

If there are any questions or bugs, please create an issue. <br>
You can also join our [Discord](https://discord.gg/dbEWUHGmnr) if you need direct support.

## Guides

[How to generate invoice PDFs](https://attacler.medium.com/generating-invoice-pdfs-with-texttoanything-in-directus-e81c324010ac)
## FAQ

<details>
<summary><strong>1. Is my data safe while using TTA?</strong></summary>
<br>
Yes — we do not store any of the content you generate or process on our servers.  <br>
If you have any concerns regarding data security, feel free to reach out to us via our <a href="https://discord.gg/dbEWUHGmnr">Discord</a>.
</details>

<details>
<summary><strong>2. Why does this extension require a RapidAPI key?</strong></summary>
<br>
This extension relies on a RapidAPI key for the following reasons: <br>
- To offloading resources, for example generating a PDF from HTML requires alot of system packages and causes extra load on your system <br>
- To support and fund ongoing development and maintenance
</details>

<details>
<summary><strong>3. How can I find or reset my RapidAPI key?</strong></summary>
<br>
You can refer to <a href="https://docs.rapidapi.com/docs/keys-and-key-rotation#creating-or-rotating-a-rapid-api-key">this guide</a> for instructions on creating or rotating your RapidAPI key.
</details>

<details>
<summary><strong>4. I have a question, issue, or feature request — where should I go?</strong></summary>
<br>
We welcome all feedback and contributions. Please open an issue on <a href="https://github.com/Attacler/TextToAnything-Directus/issues">GitHub</a> or contact us in our <a href="https://discord.gg/dbEWUHGmnr">Discord</a>.
</details>

<details>
<summary><strong>5. How do I cancel my subscription?</strong></summary>
<br>
To manage or cancel your subscription, please visit your <a href="https://rapidapi.com/developer/billing/subscriptions-and-usage">RapidAPI billing settings</a>.
</details>


