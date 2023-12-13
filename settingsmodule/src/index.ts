import { defineModule } from "@directus/extensions-sdk";
import ModuleComponent from "./templates.vue";
import settings from "./settings.vue";
import usage from "./usage.vue";

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
      path: "usage",
      component: usage,
    },
  ],
});
