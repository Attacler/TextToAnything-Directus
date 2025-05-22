<script lang="ts" setup>
import { computed, onMounted, ref, watch } from "vue";
import { useApi, useStores } from "@directus/extensions-sdk";
import TTAnav from "../TTAnav.vue";
import dateTimePicker from "../components/dateTimePicker.vue";
import displayFlowLogs from "../components/displayFlowLogs.vue";

const { useFlowsStore } = useStores();

const api = useApi();
const flowStore = useFlowsStore();
const currentFlow = ref(),
  logs = ref<any[]>([]),
  fromDate = ref(),
  toDate = ref(),
  inputFilter = ref(""),
  statusFilter = ref("all"),
  currentLog = ref();

onMounted(() => {
  const aWeekAgo = new Date();
  aWeekAgo.setDate(aWeekAgo.getDate() - 7);
  fromDate.value = aWeekAgo.toISOString().split("T")[0];
  toDate.value = new Date().toISOString().split("T")[0];
});

async function fetchLogs() {
  const fetchLogs = await api.get("/revisions", {
    params: {
      "filter[_and][0][collection][_eq]": "directus_flows",
      "filter[_and][1][item][_eq]": currentFlow.value || undefined,
      "filter[_and][2][version][_null]": true,
      "filter[_and][3][activity][action][_eq]": "run",
      "filter[_and][4][activity][timestamp][_gte]": fromDate.value
        ? fromDate.value
        : undefined,
      "filter[_and][4][activity][timestamp][_lte]": toDate.value
        ? toDate.value
        : undefined,
      "fields[0]": "*",
      "fields[1]": "activity.*",
      limit: 2000,
    },
  });

  logs.value = fetchLogs.data.data;
}

const filteredLogs = computed(() => {
  if (!inputFilter.value && statusFilter.value == "all") return logs.value;

  let logsToFilter = logs.value;

  if (statusFilter.value != "all") {
    logsToFilter = logsToFilter.filter((log) => {
      const findLastStepKey = log.data.steps[log.data.steps.length - 1];
      return (
        findLastStepKey.status ==
        (statusFilter.value == "error" ? "reject" : "resolve")
      );
    });
  }

  if (inputFilter.value) {
    logsToFilter = logs.value.filter((log) => {
      const input = log.data.data.$trigger;
      return JSON.stringify(input)
        .toLowerCase()
        .includes(inputFilter.value.toLowerCase());
    });
  }

  return logsToFilter;
});

const flows = computed(() => {
  return flowStore.flows.map((e: any) => ({ text: e.name, value: e.id }));
});

function getOutput(log: any) {
  if (log.data.steps.length == 0) return "";

  const findLastStepKey = log.data.steps[log.data.steps.length - 1]?.key;

  if (!findLastStepKey) return "";

  return log.data.data[findLastStepKey];
}

function openLog(log: any) {
  currentLog.value = log.item;
}

function isError(log: any) {
  if (log.data.steps.length == 0) return false;

  const findLastStepKey = log.data.steps[log.data.steps.length - 1];

  return findLastStepKey.status != "resolve";
}
</script>

<template>
  <private-view title="Flow logs explorer">
    <template #navigation>
      <TTAnav />
    </template>

    <div class="px-5 w-full">
      <v-table
        :headers="[
          {
            text: 'Status',
            value: 'status',
            sortable: false,
            width: 100,
          },
          {
            text: 'Timestamp',
            value: 'timestamp',
            sortable: false,
            width: 100,
          },
          {
            text: 'Input',
            value: 'input',
            sortable: false,
            width: 1000,
          },
          {
            text: 'Output',
            value: 'output',
            sortable: false,
            width: 1000,
          },
        ]"
        :items="filteredLogs"
        @click:row="openLog"
      >
        <template #item.status="{ item }">
          <v-icon
            :name="isError(item) ? 'error' : 'check_circle'"
            class="flowLogStatus"
            :class="{ error: isError(item), success: !isError(item) }"
          />
        </template>
        <template #item.timestamp="{ item }">
          {{ new Date(item.activity.timestamp).toLocaleDateString() }}
        </template>
        <template #item.input="{ item }">
          <div :title="JSON.stringify(item.data.data.$trigger, null, 2)">
            {{ item.data.data.$trigger }}
          </div>
        </template>
        <template #item.output="{ item }">
          <div :title="JSON.stringify(getOutput(item), null, 2)">
            {{ getOutput(item) }}
          </div>
        </template>
      </v-table>
    </div>

    <template #sidebar>
      <div class="filters">
        <h2>Filter</h2>

        <div>
          <div class="field-name">Flow</div>
          <v-select :items="flows" showDeselect v-model="currentFlow" />
        </div>

        <div>
          <div class="field-name">From date</div>
          <dateTimePicker
            v-model="fromDate"
            :value="fromDate"
            v-if="fromDate"
          />
        </div>
        <div>
          <div class="field-name">To date</div>
          <dateTimePicker v-model="toDate" :value="toDate" v-if="toDate" />
        </div>

        <v-button @click="fetchLogs" class="w-full grow">Search</v-button>

        <div>
          Input filter
          <v-input
            v-model="inputFilter"
            placeholder="Input filter"
            class="w-full"
          />
        </div>
        <div>
          Status
          <VSelect
            v-model="statusFilter"
            :items="[
              {
                text: 'All',
                value: 'all',
              },
              {
                text: 'Error',
                value: 'error',
              },
              {
                text: 'Success',
                value: 'success',
              },
            ]"
          />
        </div>
      </div>

      <displayFlowLogs
        v-if="currentLog"
        @close="currentLog = null"
        :currentLog="currentLog"
      />
    </template>
  </private-view>
</template>

<style scoped>
.w-full {
  width: 100%;
}

.px-5 {
  padding: 0 2.5rem;
}

.date-input {
  min-width: 300px;
}

.filters {
  padding: 10px 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filters h2 {
  font-size: 1.5rem;
  font-weight: bold;
}

.grow,
.grow button {
  flex-grow: 1;
}

.flowLogStatus.success {
  color: var(--primary);
}

.flowLogStatus.error {
  color: var(--red);
}
</style>
