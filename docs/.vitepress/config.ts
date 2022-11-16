const sidebar = {
  "/": [
    {
      text: "快速开始",
      items: [
        {
          text: "介绍",
          link: "/guide/introduce",
        },
        {
          text: "安装",
          link: "/guide/install",
        },
        {
          text: "使用",
          link: "/guide/usage",
        },
      ],
    },
    {
      text: "基础组件",
      items: [
        {
          text: "Button 按钮",
          link: "/components/button",
        },
        {
          text: "Fold 折叠",
          link: "/components/fold",
        },
        {
          text: "FButton 按钮",
          link: "/components/fbutton",
        },
        {
          text: "Link链接",
          link: "/components/link",
        },
        {
          text: "Text 文本",
          link: "/components/text",
        },
        {
          text: "Space 间距",
          link: "/components/space",
        },
      ],
    },
    {
      text: "数据输入",
      items: [
        {
          text: "Badge 角标",
          link: "/components/badge",
        },
        {
          text: "Card 卡片",
          link: "/components/card",
        },
        {
          text: "Tag 标签",
          link: "/components/tag",
        },
        {
          text: "List 列表",
          link: "/components/list",
        },
      ],
    },
  ],
};
const nav = [
  { text: "Guide", link: "" },
  { text: "GuideTest", link: "" },
  { text: "gitee", link: "" },
];

const socialLinks = [
  { icon: "github", link: "" },
  { icon: "twitter", link: "" },
  {
    icon: {
      svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>',
    },
    link: "...",
  },
];

const config = {
  title: "Vite-UI ", //标题
  description: "基于vite封装的组件库", //mate标签description，多用于搜索引擎抓取摘要
  themeConfig: {
    siteTitle: "vite-ui",
    logo: "/logo.svg",
    sidebar,
    algolia: {
      appId: "8J64VVRP8K",
      apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
      indexName: "vitepress",
    },
    nav,
    socialLinks,
  },
  markdown: {
    config: (md) => {
      // 添加DemoBlock插槽
      const { demoBlockPlugin } = require("vitepress-theme-demoblock");
      md.use(demoBlockPlugin);
    },
  },
};
export default config;
