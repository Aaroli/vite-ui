# List 列表

展示你的列表信息

## 基本使用

`List` 列表的基本使用

::: demo

```vue
<template>
  <f-list>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</template>
```

:::

## 斑马纹

`zebra` 属性可以配置斑马纹

::: demo

```vue
<template>
  <f-list zebra>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</template>
```

:::

## 居中显示

`center` 属性可以居中显示文本

::: demo

```vue
<template>
  <f-list center>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</template>
```

:::

## 不同尺寸

`size` 属性可以配置不同尺寸的列表

::: demo

```vue
<template>
  <f-list size="large">
    <f-list-item>这是大号尺寸列表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>
    <f-list-item>这是大号尺寸列表</f-list-item>
  </f-list>

  <f-list size="middle">
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
    <f-list-item>这是中号尺寸列表</f-list-item>
  </f-list>

  <f-list size="small">
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
    <f-list-item>这是小号尺寸列表</f-list-item>
  </f-list>
</template>
```

:::

## 不同前缀

`list-style` 属性配置不同的前缀，原生 [list-style-type](https://developer.mozilla.org/zh-CN/docs/Web/CSS/list-style-type) 属性

::: demo

```vue
<template>
  <f-list list-style="decimal">
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>

  <f-list list-style="circle">
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
    <f-list-item>这是一段文字</f-list-item>
  </f-list>
</template>
```

:::

## List Attributes

| 参数           | 说明               | 类型    | 可选值                   | 默认值 |
| -------------- | ------------------ | ------- | ------------------------ | ------ |
| `list-style`   | 前缀样式，原生属性 | string  | ——                       | ——     |
| `zebra`        | 是否显示斑马纹     | boolean | ——                       | false  |
| `center`       | 是否居中           | boolean | ——                       | false  |
| `text-color`   | 自定义文字颜色     | string  | ——                       | ——     |
| `border-color` | 自定义边框颜色     | string  | ——                       | ——     |
| `size`         | 尺寸               | string  | `large` `middle` `small` | middle |
| `max-height`   | 最大高度           | string  | ——                       | ——     |

## List Slots

| 名称      | 说明       |
| --------- | ---------- |
| `default` | 默认插槽   |
| `header`  | 自定义头部 |
| `footer`  | 自定义页脚 |

## List-Item Attributes

| 参数         | 说明           | 类型   | 可选值 | 默认值 |
| ------------ | -------------- | ------ | ------ | ------ |
| `background` | 自定义背景色   | string | ——     | ——     |
| `color`      | 自定义文字颜色 | string | ——     | ——     |

## List-Item Slots

| 名称      | 说明     |
| --------- | -------- |
| `default` | 默认插槽 |

## Interface

组件导出以下类型定义：

```ts
import type {
  ListInstance,
  ListPropsType,
  ListSizeType,
  ListItemInstance,
  ListItemPropsType,
} from "fighting-design";
```
