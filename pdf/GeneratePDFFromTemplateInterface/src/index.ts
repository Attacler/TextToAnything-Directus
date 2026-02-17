import { defineInterface } from "@directus/extensions-sdk";
import { computed } from "vue";
import InterfaceComponent from "./interface.vue";
import { useStores } from "@directus/extensions-sdk";

export default defineInterface({
    id: "tta-download-interface",
    name: "Trigger flow button",
    icon: "sim_card_download",
    description:
        "Trigger a flow with a button, with support for downloading files. (Text to anything)",
    hideLabel: true,
    hideLoader: true,
    component: InterfaceComponent,
    options: () => {
        const { useFlowsStore } = useStores();
        const flowStore = useFlowsStore();

        const flowOptions = computed(() =>
            flowStore.flows
                .filter(
                    (flow: any) =>
                        flow.trigger === "webhook" &&
                        flow.options.method == "POST",
                )
                .map((flow: any) => {
                    return { text: flow.name, value: flow.id };
                }),
        );
        return [
            {
                field: "label",
                type: "string",
                name: "$t:label",
                meta: {
                    width: "full",
                    interface: "system-input-translated-string",
                    options: {
                        placeholder: "$t:label",
                    },
                },
            },
            {
                field: "flow",
                name: "$t:operations.trigger.flow",
                type: "string",
                meta: {
                    width: "full",
                    interface: "select-dropdown",
                    options: {
                        choices: flowOptions,
                        iconRight: "bolt",
                        placeholder: "$t:a_flow_uuid",
                    },
                },
            },
            {
                field: "disableOnEdit",
                name: "Disable on Edit",
                type: "boolean",
                meta: {
                    width: "full",
                    interface: "boolean",
                    options: {
                        label: "Disable button if there are unsaved changes",
                    },
                },
                schema: {
                    default_value: false as any,
                },
            },
        ];
    },
    types: ["string"],
});
