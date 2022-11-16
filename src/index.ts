import { createApp } from "vue";
import ViteUI from "./entry";
import index from "./index.vue";
export * from "./util";
import "./fighting-theme";

createApp(index).use(ViteUI).mount("#app");
