<template>
  <v-list nav>
    <v-list-item href="https://app.texttoanything.nl/">
      <v-list-item-icon><v-icon name="open_in_new" /></v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Text to anything dashboard" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/tta_settings/templates">
      <v-list-item-icon><v-icon name="code" /></v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Templates" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/tta_settings/flowsLogExplorer">
      <v-list-item-icon><v-icon name="short_text" /></v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Flows log explorer" />
      </v-list-item-content>
    </v-list-item>
    <v-list-item to="/tta_settings/settings">
      <v-list-item-icon><v-icon name="settings" /></v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Settings" />
      </v-list-item-content>
    </v-list-item>
    <!-- <v-list-item to="/tta_settings/usage">
      <v-list-item-icon><v-icon name="bar_chart" /></v-list-item-icon>
      <v-list-item-content>
        <v-text-overflow text="Usage" />
      </v-list-item-content>
    </v-list-item> -->
  </v-list>
</template>

<script setup lang="ts"></script>
