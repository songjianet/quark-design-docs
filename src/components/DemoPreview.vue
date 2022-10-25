<template>
  <div class="doc-demo-preview rounded-xl overflow-hidden absolute right-[30px] top-[240px] w-[375px] min-h-[620px] drop-shadow-xl">
    <iframe :src="url" id="quark-demo" frameborder="0"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DocDemoPreview",
  props: {
    url: String,
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.doc-demo-preview {
  height: calc(100vh - 300px);

  &.fixed {
    position: fixed;
    top: 120px;
  }

  iframe {
    height: 100%;
    width: 100%;
  }
}
</style>
