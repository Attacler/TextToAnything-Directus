import { defineModule } from "@directus/extensions-sdk";
import ModuleComponent from "./pages/templates.vue";
import settings from "./pages/settings.vue";
import flowsLogExplorer from "./pages/flowLogsExplorer.vue";

export default defineModule({
  id: "tta_settings",
  name: "Text to anything settings",
  icon: "text_fields",
  routes: [
    {
      path: "",
      redirect: "/tta_settings/templates",
    },
    {
      path: "templates",
      component: ModuleComponent,
    },
    {
      path: "settings",
      component: settings,
    },
    {
      path: "flowsLogExplorer",
      component: flowsLogExplorer,
    },
  ],
});
