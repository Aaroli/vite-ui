# Badge 角标

`Badge` 用于展示角标提示信息

## 基本使用

`type` 属性可以配置角标的主题

::: demo

```vue
<template>
  <f-badge value="11">
    <f-button>default</f-button>
  </f-badge>
  <f-badge value="12" type="primary">
    <f-button>primary</f-button>
  </f-badge>
  <f-badge value="13" type="success">
    <f-button>success</f-button>
  </f-badge>
  <f-badge value="14" type="warning">
    <f-button>warning</f-button>
  </f-badge>
</template>
```

:::

## 最大值

`max` 属性可以配置角标的最大值，该值仅在 `value` 的值是 `Number` 时生效

::: demo

```vue
<template>
  <f-badge :value="123">
    <f-button>默认最多 99</f-button>
  </f-badge>
  <f-badge :value="37" :max="20">
    <f-button>最多 20</f-button>
  </f-badge>
</template>
```

:::

## 小红点

设置 `dot` 属性，展示为一个点

::: demo

```vue
<template>
  <f-badge dot class="item">消息</f-badge>
</template>
```

:::

## 自定义文字

`value` 除了 `Number` 类型，还可以是 `String`，自定义内容

::: demo

```vue
<template>
  <f-badge value="hot">
    <f-button>customize</f-button>
  </f-badge>
  <f-badge value="new">
    <f-button>customize</f-button>
  </f-badge>
</template>
```

:::

## 自定义颜色

你也可以自定义 `badge` 的颜色

::: demo

```vue
<template>
  <f-badge :value="123" color="skyblue" text-color="black">
    <f-button>自定义颜色</f-button>
  </f-badge>
</template>
```

:::

## Attributes

| 参数         | 说明                                          | 类型            | 可选值                                 | 默认值 |
| ------------ | --------------------------------------------- | --------------- | -------------------------------------- | ------ |
| `value`      | 显示值                                        | string / number | ——                                     | ——     |
| `max`        | `value` 为数字时的最大值，超出显示为 `value+` | number          | ——                                     | 99     |
| `dot`        | 展示为一个点                                  | boolean         | ——                                     | false  |
| `show`       | 是否显示                                      | boolean         | ——                                     | true   |
| `type`       | 样式主题                                      | string          | `primary` `success` `danger` `warning` | danger |
| `color`      | 自定义颜色                                    | string          | ——                                     | ——     |
| `text-color` | 自定义文字颜色                                | string          | ——                                     | ——     |

## Interface

组件导出以下类型定义：

```ts
import type { BadgeInstance, BadgePropsType, BadgeType } from "fighting-design";
```
