# 使用

1. 在 `main.ts` 中引入组件

```ts
import { createApp } from "vue";
import App from "./App.vue";

import ViteUi from "undraw-ui";
import "ViteUi-ui/dist/style.css";

const app = createApp(App);
app.use(ViteUi);
app.mount("#app");
```
