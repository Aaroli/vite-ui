# Card 卡片

`Card` 是一个卡片，用于展示内容

## 基本使用

`title` 属性可以配置卡片的标题

::: demo

```vue
<template>
  <f-card title="卡片标题">Card 卡片</f-card>
</template>
```

:::

## 圆角卡片

`round` 是否为圆角卡片

::: demo

```vue
<template>
  <f-card round title="圆角的">Card 卡片</f-card>
</template>
```

:::

## 不同状态

`shadow` 属性可以配置阴影样式

::: demo

```vue
<template>
  <f-card shadow="never">从不显示</f-card>
  <f-card shadow="hover">Hover 显示</f-card>
  <f-card shadow="always">总是显示</f-card>
</template>
```

:::

## Attributes

| 参数      | 说明           | 类型    | 可选值                   | 默认值 |
| --------- | -------------- | ------- | ------------------------ | ------ |
| `title`   | 卡片标题       | string  | ——                       | ——     |
| `round`   | 是否为圆角卡片 | boolean | ——                       | false  |
| `padding` | 卡片内边距     | string  | ——                       | 20px   |
| `shadow`  | 阴影样式       | string  | `never` `hover` `always` | always |

## Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 默认内容   |
| `header`  | 自定义头部 |

## Interface

组件导出以下类型定义：

```ts
import type {
  CardInstance,
  CardPropsType,
  CardShadowType,
} from "fighting-design";
```
