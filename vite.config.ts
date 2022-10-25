import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import path from "path";
const hljs = require("highlight.js"); // https://highlightjs.org/
const pkg = require("./package.json");

// 发布系统需要区分环境，公司规范
const ENV = process.env.VUE_APP_ENV || "fat";
const outputDir = path.resolve(__dirname, `./dist/${ENV}/${pkg.version}/`);

const resolve = path.resolve;
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  server: {
    port: 2021,
    host: "0.0.0.0",
    open: "/",
  },
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  css: {
    preprocessorOptions: {
      scss: {
        // example : additionalData: `@import "./src/design/styles/variables";`
        // dont need include file extend .scss
        additionalData: `@import "@/assets/styles/variables.scss";`,
      },
    },
    // postcss: {
    //   plugins: [
    //     require("autoprefixer")({
    //       overrideBrowserslist: [
    //         "> 0.5%",
    //         "last 2 versions",
    //         "ie > 11",
    //         "iOS >= 10",
    //         "Android >= 5",
    //       ],
    //     }),
    //   ],
    // },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({
      // default options passed to markdown-it
      // see: https://markdown-it.github.io/markdown-it/
      markdownItOptions: {
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {}
          }

          return ""; // 使用额外的默认转义
        },
      },
    }),
  ],
  build: {
    target: "es2015",
    outDir: outputDir,
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        vue: resolve(__dirname, "index.html"),
      },
    },
  },
});
