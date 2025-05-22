<script lang="ts" setup>
import VueJsonPretty from "vue-json-pretty";
import "vue-json-pretty/lib/styles.css";
import { computed, defineProps, ref } from "vue";

const currentPath = ref("");
const { currentLog } = defineProps<{
  currentLog: any;
}>();

const emit = defineEmits<{
  close: [];
}>();

const steps = computed(() => {
  const { data } = currentLog;
  if (!data) return [];
  const steps = data?.steps || [];

  return steps.map((step: any) => {
    return {
      ...step,
      status: step.status === "resolve" ? "success" : "error",
      operationType: step.operationType || "",
      options: step.options ? step.options : null,
      data: data.data[step.key] ? data.data[step.key] : null,
    };
  });
});

function setPath(key: string, event: any) {
  console.log(currentLog);
  currentPath.value = key + event.path.substring(4);
}

function copyPath() {
  navigator.clipboard.writeText(currentPath.value);
}
</script>

<template>
  <v-drawer
    :modelValue="true"
    title="Flow log"
    icon="fact_check"
    @esc="emit('close')"
    @cancel="emit('close')"
  >
    <template #actions>
      <v-button class="ml-auto" @click="copyPath" v-if="currentPath">
        {{ currentPath }}
        <v-icon name="copy_all" />
      </v-button>
    </template>
    <div class="content">
      <div class="header">
        <span class="dot success" />
        <span class="type-label"> Trigger </span>
      </div>

      <div class="inset">
        <v-detail label="Payload" class="payload">
          <VueJsonPretty
            :data="currentLog.data.data.$trigger"
            virtual
            @nodeClick="setPath('$trigger', $event)"
            selectableType="single"
          />
        </v-detail>
      </div>
      <div class="steps">
        <div v-for="step of steps" :key="step.id" class="step">
          <div class="header">
            <span class="dot" :class="step.status" />
            <span v-tooltip="step.key" class="type-label">
              {{ step.key }}
              <span class="subdued">&nbsp;{{ step.operationType }}</span>
            </span>
          </div>

          <div class="inset">
            <v-detail v-if="step.options" label="Options">
              <VueJsonPretty :data="step.options" virtual />
            </v-detail>

            <v-detail v-if="step.data !== null" label="Payload" class="payload">
              <VueJsonPretty
                :data="step.data"
                virtual
                @nodeClick="setPath(step.key, $event)"
                selectableType="single"
              />
            </v-detail>
          </div>
        </div>
      </div>
    </div>
  </v-drawer>
</template>

<style scoped>
.content {
  padding: 1rem;
}

.header {
  font-size: 1.2rem;
  font-weight: bold;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  display: inline-block;
}

.dot.success {
  background-color: var(--primary);
}

.dot.error {
  background-color: var(--red);
}

.step {
  margin: 0.5rem 0;
  position: relative;
}

.inset {
  border-left: var(--theme--border-width) solid
    var(--theme--border-color-subdued);
  margin-left: 0.35rem;
  padding-top: 5px;
  padding-left: 1rem;
  margin-top: -5px;
}
</style>

<style>
.payload .vjs-value,
.payload .vjs-key {
  cursor: pointer;
}
</style>
