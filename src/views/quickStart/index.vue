<template>
  <div class="min-h-[800px] bg-white dark:bg-gray-900 doc-content-document full">
    <div class="markdown-body">
      <h1>快速上手</h1>
      <h2>预览</h2>
      <blockquote>
        <p>扫描下方二维码体验，体验 Quark 组件库示例</p>
      </blockquote>
      <img
        src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80"
        width="200" alt="qr.png">
      <h2>NPM 安装</h2>
      <pre>
        <code class="language-shell"><span class="hljs-meta">#</span><span class="bash"> Vue及其他技术栈项目</span>
npm i quarkd

<span class="hljs-meta">#</span><span class="bash"> React 项目</span>
npm i @quarkd/quark-react</code>
      </pre>
    </div>

    <div class="code-demo-container">
      <h2>代码示例</h2>
      <div class="code-demo relative">
        <div class="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
          <div class="flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:rounded-lg">
            <button @click="handleTabSwitch(0)" :class="tabIndex === 0 ? 'bg-opacity-20': 'bg-opacity-0' " class="bg-black mr-1 flex rounded-md px-3 py-2 text-xs font-medium text-white  focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 ">Preview</button>
            <button @click="handleTabSwitch(1)" :class="tabIndex === 1 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Vue</button>
            <button @click="handleTabSwitch(2)" :class="tabIndex === 2 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">React</button>
            <button @click="handleTabSwitch(3)" :class="tabIndex === 3 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Angular</button>
            <button @click="handleTabSwitch(4)" :class="tabIndex === 4 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Html</button>
          </div>
        </div>

        <div v-if="tabIndex === 0" class="preview">
          <quark-button size="big" :loading="isLoading" @click="handleClick">Button</quark-button>
        </div>

        <div v-else>
          <div class="editor-skin-header">
            <div class="editor-skin-header-btn-group">
              <span class="editor-skin-header-btn red"></span>
              <span class="editor-skin-header-btn yellow"></span>
              <span class="editor-skin-header-btn green"></span>
            </div>
          </div>

          <CodeDemo :tabName="tabName" />
        </div>
      </div>
    </div>

  <h2>Polyfill</h2>
  <blockquote><p>Quark(Web components) 支持现代浏览器，如需兼容更低版本（ iOS 10 以下，Android 7 以下），请在 HTML 头部加入 polyfill。</p></blockquote>
  <pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"https://m.hellobike.com/resource/helloyun/15697/wcs-bundle.js"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
  <p>上面 cdn 同官方Polyfill <a href="https://www.webcomponents.org/polyfills">点击查看更多</a>。</p>
    </div>
</template>
<script lang="ts">
  import { defineComponent, onMounted, reactive, toRefs, ref } from "vue";
  import CodeDemo from "../components/codedemo/index.vue";
  import "quarkd/lib/button";
  import "quarkd/lib/tab";

  export default defineComponent({
    name: "quickstart",
    components: {
      CodeDemo,
    },
    setup() {
      const isLoading = ref(false);
      const data = reactive({
        tabs: ["Vue", "React", "Angular", "Html"],
        tabName: "Vue",
        tabIndex: 0,
      });

      const handleTabSwitch = (index: number) => {
        data.tabIndex = index;
        data.tabName = data.tabs[index-1];
      }

      const handleClick = () => {
        isLoading.value = true;
        setTimeout(() => {
          isLoading.value = false;
        }, 2000); // 点击2s后loading消失
      };

      return {
        ...toRefs(data),
        isLoading,
        handleClick,
        handleTabSwitch,
      };
    },
  });
</script>
<style src="./index.scss"></style>