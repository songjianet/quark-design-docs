<template>
  <div class="min-h-[800px] bg-white dark:bg-gray-900 doc-content-document full">
    <blockquote><p>本站就 React/Vue 有单独说明，其它技术栈可以参考 Vue 文档。</p></blockquote>
    <p><a href="https://quark-design.hellobike.com/#/zh-CN/component/button">点击查看 Vue 文档</a></p>

    <h2>各类技术栈使用示例</h2>
    <div class="code-demo-container">
      <div class="code-demo relative">
        <div class="absolute inset-x-0 top-0 z-10 m-[2px] md:left-auto">
          <div class="flex items-stretch justify-end rounded-t-[10px] px-2 py-1 md:rounded-lg">
            <button @click="handleTabSwitch(0)" :class="tabIndex === 0 ? 'bg-opacity-20': 'bg-opacity-0' " class="bg-black mr-1 flex rounded-md px-3 py-2 text-xs font-medium text-white  focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50 ">Preview</button>
            <button @click="handleTabSwitch(1)" :class="tabIndex === 1 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">React</button>
            <button @click="handleTabSwitch(2)" :class="tabIndex === 2 ? 'bg-opacity-50 bg-white': 'bg-opacity-0' " class="bg-black bg-opacity-0 hover:bg-opacity-[0.05] flex rounded-md px-3 py-2 text-xs font-medium text-white focus-visible:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-50">Vue</button>
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

    <h2>Vue/React/Angular/无框架项目</h2>
    <p>Vue/React/Angular/无框架项目皆可使用 `quarkd` 这个包。</p>
    <pre>
      <code style="padding: 0;">
        <span class="hljs-meta"># </span>npm i quarkd
      </code>
    </pre>
    <h2>React 项目特别说明</h2>
    <p>1：由于 `quarkd` 提供的组件均为原生自定义元素（类比div），因此组件派发的事件需要使用addEventLisener接收。</p>
    <br/>
    <p>2：Vue 技术栈使用 `@xx` 即可接收原生派发的事件，因此不需要使用addEventLisener接收。</p>
    <br/>
    <p>3：针对 React 技术栈，为了避免开发者手动 addEventLisener 接收事件，我们底层依托 `quarkd` ，上层进行了 Reactify(React 化)！因此 React 项目推荐使用 `@quarkd/quark-react`。</p>
    <pre>
      <code style="padding: 0;">
        <span class="hljs-meta"># </span>npm i @quarkd/quark-react
      </code>
    </pre>
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
        tabs: ["React", "Vue", "Angular", "Html"],
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