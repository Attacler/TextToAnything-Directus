import { defineInterface } from "@directus/extensions-sdk";
import { computed } from "vue";
import InterfaceComponent from "./interface.vue";
import { useStores } from "@directus/extensions-sdk";

export default defineInterface({
  id: "tta-download-interface",
  name: "Download interface",
  icon: "sim_card_download",
  description: "Download files based on a flow. (Text to anything)",
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
            flow.trigger === "webhook" && flow.options.method == "POST"
        )
        .map((flow: any) => {
          return { text: flow.name, value: flow.id };
        })
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
    ];
  },
  types: ["string"],
});
