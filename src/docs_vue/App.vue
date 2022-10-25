<template>
  <!-- <div class="tips-wrap">
    <p>
      🎉🎉🎉Quark(夸克) Topic已入选 2022 北京 GMTC/QCon & 外部开源倒计时（哈啰首个开源前端技术产品！）
      <br>
      目前已覆盖数十业务线，感谢大家的支持！如有疑问，欢迎钉钉 @赵存
    </p>
  </div> -->
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  setup() {
    if (localStorage.theme === 'dark' || ('theme' in localStorage)) {
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
});
</script>

<style lang="scss">
::selection {
  background: #38bdf8;
  color: #fff;
}
#doc {
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
}
.tips-wrap{
  color: #fff;
  background-color: black;
  width: 100%;
  text-align: center;
  p{
    font-size: 14px;
    line-height: 28px;
  }
}
</style>
