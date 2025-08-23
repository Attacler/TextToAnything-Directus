<script lang="ts" setup>
import { computed, onMounted, ref } from "vue";
import { useApi, useStores } from "@directus/extensions-sdk";
import TTAnav from "../TTAnav.vue";
import virusscanDialog from "./settings/virusscanDialog.vue";

const rapidKey = ref(""),
  rapidKeyVirus = ref("");

const virusscannerActive = ref(false),
  virusscannerMode = ref(""),
  virusscannerFlow = ref("");

const saving = ref("");

const api = useApi();
const { useFlowsStore } = useStores();
const flowStore = useFlowsStore();

const flows = computed(() => {
  return flowStore.flows.map((e: any) => ({ text: e.name, value: e.id }));
});

onMounted(async () => {
  const settings = await api.get("/settings");

  rapidKey.value = settings.data.data.TTA_KEY;
  rapidKeyVirus.value = settings.data.data.TTA_KEY_VIRUS;

  virusscannerFlow.value = settings.data.data.TTA_VIRUSSCANNER_FLOW_ID;
  virusscannerActive.value =
    settings.data.data.TTA_VIRUSSCANNER_ENABLED == 1 || false;
  virusscannerMode.value =
    settings.data.data.TTA_VIRUSSCANNER_MODE || "workflow";
});

async function saveAPISettings() {
  saveSettings(
    {
      TTA_KEY: rapidKey.value,
      TTA_KEY_VIRUS: rapidKeyVirus.value,
    },
    "apikeys"
  );
}

async function saveVirusscannerSettings() {
  saveSettings(
    {
      TTA_VIRUSSCANNER_ENABLED: virusscannerActive.value,
      TTA_VIRUSSCANNER_MODE: virusscannerMode.value,
      TTA_VIRUSSCANNER_FLOW_ID: virusscannerFlow.value,
    },
    "virus"
  );
}

async function saveSettings(data: any, mode: string) {
  saving.value = mode;

  await api.patch("/settings", data);

  setTimeout(() => {
    saving.value = "";
  }, 500);
}
</script>

<template>
  <private-view title="Settings">
    <template #navigation>
      <TTAnav />
    </template>

    <div class="cards-wrapper">
      <v-card class="w-full">
        <v-card-title>API settings</v-card-title>
        <v-card-text class="fields-spacing">
          <div>
            <span class="field-name">RapidAPI token</span>

            <v-input v-model="rapidKey" />
          </div>
        </v-card-text>
        <v-card-text class="fields-spacing">
          <v-button
            href="https://rapidapi.com/Attacler/api/text-to-anything"
            target="_blank"
            align="left"
            fullWidth
            small
          >
            <v-icon name="open_in_new"></v-icon>
            Get RapidAPI token
          </v-button>
        </v-card-text>
        <v-card-text class="fields-spacing">
          <div>
            <span class="field-name">RapidAPI virusscanner token</span>

            <v-input v-model="rapidKeyVirus" />
          </div>
        </v-card-text>
        <v-card-text class="fields-spacing">
          <v-button
            href="https://rapidapi.com/Attacler/api/virusscan-texttoanything/"
            target="_blank"
            align="left"
            fullWidth
            small
          >
            <v-icon name="open_in_new"></v-icon>
            Get RapidAPI virusscanner token
          </v-button>
        </v-card-text>
        <v-card-actions class="action-buttons">
          <v-button
            @click="saveAPISettings"
            :disabled="saving == 'apikeys'"
            id="save-button"
          >
            <template v-if="saving != 'apikeys'"> Save </template>
            <v-progress-circular :small="true" indeterminate v-else />
          </v-button>
        </v-card-actions>
      </v-card>

      <v-card class="w-full">
        <v-card-title>Virusscanner settings</v-card-title>
        <v-card-text class="fields-spacing">
          <div>
            <VCheckbox v-model="virusscannerActive" :value="false">
              Automatic scanning
            </VCheckbox>
          </div>
        </v-card-text>
        <v-card-text class="fields-spacing">
          <div>
            <div class="field-name info-parent">
              Mode
              <v-hover>
                <template #default="{ hover }">
                  <VIcon name="info" />
                  <VNotice v-if="hover" class="info-popup">
                    <div>
                      What should happen when a virus is detected?
                      <ul>
                        <li>
                          Delete threads, threads will be deleted immediately
                        </li>
                        <li>
                          Trigger flow, the selected flow will be triggered with
                          upload payload
                        </li>
                      </ul>

                      <div>
                        The trigger flow option is ideal for when you want to
                        send a notification or add extra logic. The trigger flow
                        option will not automaticly delete the file.
                      </div>
                    </div>
                  </VNotice>
                </template>
              </v-hover>
            </div>

            <v-select
              v-model="virusscannerMode"
              :items="[
                {
                  text: 'Delete threats',
                  value: 'delete',
                },
                {
                  text: 'Trigger flow',
                  value: 'flow',
                },
              ]"
            />
          </div>
          <div v-if="virusscannerMode == 'flow'">
            <div class="field-name info-parent">
              Flow
              <v-hover>
                <template #default="{ hover }">
                  <VIcon name="info" />
                  <VNotice v-if="hover" class="info-popup">
                    This flow will be triggered once a virus has been detected.
                  </VNotice>
                </template>
              </v-hover>
            </div>
            <v-select :items="flows" showDeselect v-model="virusscannerFlow" />
          </div>
        </v-card-text>
        <v-card-text class="fields-spacing">
          <virusscanDialog />
        </v-card-text>
        <v-card-text class="fields-spacing">
          <v-button
            href="https://texttoanything.nl/docs/directus/virusscanner"
            target="_blank"
            align="left"
            fullWidth
            small
          >
            <v-icon name="open_in_new"></v-icon>
            Virusscanner documentation
          </v-button>
        </v-card-text>

        <v-card-actions class="action-buttons">
          <v-button
            @click="saveVirusscannerSettings"
            :disabled="saving == 'virus'"
            id="save-button"
          >
            <template v-if="saving != 'virus'"> Save </template>
            <v-progress-circular :small="true" indeterminate v-else />
          </v-button>
        </v-card-actions>
      </v-card>
    </div>
  </private-view>
</template>

<style scoped>
.w-full {
  width: 100%;
}

.cards-wrapper {
  padding: 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
}

.fields-spacing {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

#save-button {
  margin-left: auto;
}

.info-parent {
  position: relative;
  display: flex;
  gap: 5px;
}

.info-parent .info-popup {
  position: absolute;
  top: 25px;
  left: 0;
  z-index: 10;
}
</style>
