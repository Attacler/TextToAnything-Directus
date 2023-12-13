# directus-extension-texttoanything

> **Currently in Beta** please report any issues you encounter

## Introduction

Do you want to create PDFs, barcodes, and QR codes within Directus?
This extension bundle offers the required operations to achieve that!
!["Text to anything operations"](images/Operations.png?raw=true "Operations")

## Setup

To install the package, use either npm or yarn:

```sh
npm i directus-extension-texttoanything
```

or

```sh
yarn add directus-extension-texttoanything
```

Restart your Directus instance.

Go to to your project settings (Settings -> Settings) and scroll down to the Modules section. Enable the Text to anything settings.

Go to the Text To Anything module -> Settings and fill in your Rapid API token.

Click on save and now you are good to go!

### Settings

Inside of the Text To Anything Settings, you can fill in the following properties:<br/>
RapidAPI token -> The token of RapidAPI<br/>
Directus Assets token (optional) -> If you use any assets, this key will be used to load the images/assets.<br/>
Directus Assets folder -> This folder will be used to upload your files into when you upload an asset within the template editor.

### RapidAPI Token

The RapidAPI token is a requirement for the extension in order to talk with the TextToAnything API. We are using this API to eliminate the need for dependencies.

How to obtain a RapidAPI token:

1. Go to https://rapidapi.com/Attacler/api/text-to-anything
2. Click "Sign Up" in the top right corner, or "Log in" if you already have an account
3. Click on "Subscribe to Test" or "Pricing"
4. Here you can choose the API plan that you wish to use, Basic is good enough for testing.
   If you have any questions about the billing, please view the FAQ at the bottom of this page.
5. Add your payment details
6. Go to Endpoints and you should see the RapidAPI key on the right.

The extension will not function without the Rapid API token, but there will always be a free tier available.
You can fill in the token inside of the TTA settings.

## Supported Features

The package currently supports the following operations:

- Create a PDF based on the provided HTML
- Create a HTML Template to PDF
- Create a QRCode
- Create a Barcode

The actions work trough flow operations and will upload the PDF/QRCode/Barcode directly into Directus.
The operation will return the Directus file id which you can use to link the file to a record.

If there are any questions or bugs, please create an issue.

## FAQ

1. How do i find or reset my Rapid API key?

You can find follow [this article](https://docs.rapidapi.com/docs/keys-and-key-rotation#creating-or-rotating-a-rapid-api-key) in order to achieve this.

2. How can i stop my subscription?

[Click here](https://rapidapi.com/developer/billing/subscriptions-and-usage) if you ever want to cancel your subscription

3. Will there be more features comming?

We are currently working on making this extension a solid stable version. After that we are planning to add HTML to Image.

4. I have an issue or idea, where can i place it?

Please create an issue on [Github](https://github.com/Attacler/TextToAnything-Directus)
