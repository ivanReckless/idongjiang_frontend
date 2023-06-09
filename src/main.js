import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

import materialKit from "./material-kit.js";
import "@/assets/css/font.css";

import VMdPreview from "@kangc/v-md-editor/lib/preview";
import "@kangc/v-md-editor/lib/style/preview.css";
import githubTheme from "@kangc/v-md-editor/lib/theme/github";
import "@kangc/v-md-editor/lib/theme/style/github.css";

import hljs from "highlight.js";

VMdPreview.use(githubTheme, {
  Hljs: hljs,
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(VMdPreview);
app.mount("#app");
