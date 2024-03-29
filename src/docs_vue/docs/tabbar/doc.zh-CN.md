# Tabbar 底部栏

### 介绍

底部导航栏，用于在不同页面之间进行切换。

### 安装使用
如果使用 `quark-icons`，请先安装：`npm install --save quark-icons`。

```tsx
import "quarkd/lib/tabbar";

// 引入 icons
import "@quarkd/icons/lib/home";
import "@quarkd/icons/lib/user";
import "@quarkd/icons/lib/tel";
```

### 基础用法
```html
<quark-tabbar>
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### 通过名称匹配
```html
<quark-tabbar value="tel">
  <quark-tabbar-item label="home" name="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user" name="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel" name="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### 徽标提示
```html
<quark-tabbar value="user">
  <quark-tabbar-item badgecontent="20" label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### 自定义图标

```html
<quark-tabbar @change=onChange1>
  <quark-tabbar-item badgecontent="20" label="home">
     <img slot="icon" style="height: 20px;" :src="activeIndex === '0' ? img1:img2 " />
  </quark-tabbar-item>
  <quark-tabbar-item icon="user" label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item icon="tel" label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
<script>
export default {
  data() {
    return {
      activeIndex: 0,
      img1: "https://m.hellobike.com/resource/helloyun/18625/MJ7Tr_src=http___inews.gtimg.com_newsapp_bt_0_12536239782_641.jpg&refer=http___inews.gtimg.jpeg",
      img2: "https://m.hellobike.com/resource/helloyun/18625/WUu02_img.png",
    }
  },
  methods: {
    onChange1({detail}) {
      this.activeIndex = detail.value;
    },
  },
  mounted() {}
};
</script>
```

### 自定义颜色
```html
<quark-tabbar inactivecolor="#000" activecolor="#ee0a24">
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```

### 监听切换事件
```html
<quark-tabbar @change="onChange">
  <quark-tabbar-item label="home">
    <quark-icon-home slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="user">
    <quark-icon-user slot="icon" size="20" />
  </quark-tabbar-item>
  <quark-tabbar-item label="tel">
    <quark-icon-tel slot="icon" size="20" />
  </quark-tabbar-item>
</quark-tabbar>
```
```js
onChange({detail}) {
  Toast.text(`当前选中：${detail.value}`);
}
```    

## API

### Quark-tabbar Props

| 参数         | 说明                | 类型   | 默认值           |
|--------------|--------------------|--------|---------------|
| fixed     | 是否固定在底部| `boolean`| `true`|
| inactivecolor     |未选中颜色| `string`| `#879099`|
| activecolor     |选中颜色| `string`| `#0088FF`|
| value     |选中的名称或索引值| `string`| `0`|


### Quark-tabbar-item Props


| 参数         | 说明                | 类型   | 默认值           |
|--------------|--------------------|--------|---------------|
| label     |标签名称, 用来显示| `string`|
| name     |标签值，作为匹配的标识符| `string`| |
| badgecontent     |徽标内容| `string`| |


### Quark-tabbar Event

| 名称         | 说明                             | 类型   |
|--------------|----------------------------------|--------|
|change     | 切换标签时触发        |     `{e:{detail: {value: 选中的名称或索引值}}} => void`     |

### slots

| 名称         | 说明                             | 参数   |
|--------------|----------------------------------|--------|
|icon     | 图标                    |          |

## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                    | 说明                | 默认值          | 
| -----------------------| --------------------| ---------------|
| `--tabbar-z-index`   | tabbar z-index       | `1`         |      
| `--tabbar-box-shadow`        | tabbar 上阴影        | `0px -2px 8px 0px rgba(36, 39, 41, 0.08)`    |     
| `--tabbar-font-size`  | tabbar 文字大小        | `10px`  |     
| `--tabbar-height`  | tabbar 高度        | `56px`  | 