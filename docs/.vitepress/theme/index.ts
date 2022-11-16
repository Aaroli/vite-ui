import DefaultTheme from "vitepress/theme";
import ViteUI from "../../../src/entry";
import "vitepress-theme-demoblock/theme/styles/index.css";
import "./base.scss";
import "../../../src/fighting-theme";

// 插件的组件，主要是demo组件
import Demo from "vitepress-theme-demoblock/components/Demo.vue";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";

console.log(ViteUI);
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(ViteUI);
    app.component("Demo", Demo);
    app.component("DemoBlock", DemoBlock);
  },
};
