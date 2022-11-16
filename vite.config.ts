// 测试文件类型定义声明
/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx"; //引用jsx  import vueJsx from '@vitejs/plugin-vue-jsx'
// 安装UnoCss库
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "./config/unocss";
import DefineOptions from "unplugin-vue-define-options/vite";

// https://vitejs.dev/config/
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  plugins: [vue(), vueJsx({}), Unocss(), DefineOptions()],
  build: {
    rollupOptions,
    minify: false,
    cssCodeSplit: true, // 不加的话 uncss会报错
    lib: {
      entry: "./src/entry.ts",
      name: "ViteUI",
      fileName: "Vite-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
  // 单元测试
  test: {
    // enable jest-like global test APIs
    globals: true,
    // simulate DOM with happy-dom
    // (requires installing happy-dom as a peer dependency)
    environment: "happy-dom",
    // 支持tsx组件，很关键
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
