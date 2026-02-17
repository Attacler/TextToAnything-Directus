import { defineOperationApp } from "@directus/extensions-sdk";

export default defineOperationApp({
    id: "ttapdftemplate",
    name: "TTA generate PDF from template",
    icon: "picture_as_pdf",
    description: "Generate a PDF based on a template trough Text to anything!",
    overview: ({ filename }) => [
        {
            label: "File name",
            text: filename,
        },
    ],
    options: (field) => {
        return [
            {
                field: "folder",
                name: "Target folder",
                type: "uuid",
                meta: {
                    width: "full",
                    interface: "system-folder",
                    note: "The file will be placed in the selected folder.",
                },
            },
            {
                field: "filename",
                name: "File name",
                type: "string",
                meta: {
                    width: "full",
                    interface: "input",
                },
            },
            {
                field: "mode",
                name: "Template source",
                type: "dropdown",
                meta: {
                    interface: "select-dropdown",
                    options: {
                        choices: [
                            {
                                value: "online",
                                text: "TTA Dashboard",
                            },
                            {
                                value: "offline",
                                text: "Directus",
                            },
                        ],
                    },
                    note: "When selecting 'TTA Dashboard', you will be able to select a template from the TextToAnything dashboard. (https://app.texttoanything.nl)",
                },
            },
            {
                field: "template",
                name: "Template",
                type: "string",
                meta: {
                    interface:
                        field.mode == "online"
                            ? "TTA-pdf-online-template-selector"
                            : "TTA-pdf-template-selector",
                    options: {},
                },
            },
            {
                field: "templatevariables",
                name: "Template variables",
                type: "json",
                meta: {
                    width: "full",
                    interface: "input-code",
                    options: {
                        language: "json",
                    },
                },
            },
        ] as any;
    },
});
