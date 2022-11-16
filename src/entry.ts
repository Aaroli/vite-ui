import { App } from "vue";
import MyButton from "./components/button";
import { UFold } from "./components/fold";
import { UDivider } from "./components/divider";
import SFCButton from "./components/button/SFCButton.vue";
import JSXButton from "./components/button/JSXButton";
import { FButton } from "./components/fButton";
import { FButtonGroup } from "./components/button-group";
import { FLink } from "./components/link";
import { FText } from "./components/text";
import { FSpace } from "./components/space";
import { FBadge } from "./components/badge";
import { FCard } from "./components/card";
import { FTag } from "./components/tag";
import { FList } from "./components/list";

export {
  MyButton,
  SFCButton,
  JSXButton,
  UFold,
  UDivider,
  FButton,
  FButtonGroup,
  FLink,
  FText,
  FSpace,
  FBadge,
  FCard,
  FTag,
  FList,
};

console.log(FButton);

// 编写一个插件，实现一个install方法
export default {
  install(app: App): void {
    app.component(MyButton.name, MyButton);
    app.component(SFCButton.name, SFCButton);
    app.component(JSXButton.name, JSXButton);
    app.component("u-fold", UFold);
    app.component("u-divider", UDivider);
    app.component("f-button", FButton);
    app.component("f-button-group", FButtonGroup);
    app.component("f-link", FLink);
    app.component("f-text", FText);
    app.component("f-space", FSpace);
    app.component("f-badge", FBadge);
    app.component("f-card", FCard);
    app.component("f-tag", FTag);
    app.component("f-list", FList);
  },
};
