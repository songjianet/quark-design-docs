# 快速上手

## 预览

> 扫描下方二维码体验，体验 Quark 组件库示例

<img src="https://m.hellobike.com/resource/helloyun/15697/3_81B_qrcode_quark-design.hellobike.com.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">

## NPM 安装

```shell
# Vue / Angular / HTML / 其它前端技术栈
npm i quarkd

# React 项目
npm i @quarkd/quark-react
```

`@quarkd/quark-react` 底层依赖 `quarkd` ,优化了在 React 项目中组件事件需要手动 addEventListener 问题。

## 1、使用示例 Vue

```tsx
<template>
  <div>
    <quark-button type="primary">按钮</quark-button>;
  </div>
</template>
<script>
  import "quarkd/lib/button";
</script>
```

## 2、使用示例 React

```jsx
import { Button } from "@quarkd/quark-react";

class Demo extends React.Component {
  render() {
    return <Button type="primary">按钮</Button>;
  }
}
```

## 3 、Polyfill

> Quark(Web components) 支持现代浏览器，如需兼容更低版本，请在 HTML 头部加入 polyfill。

```html
<script src="https://m.hellobike.com/resource/helloyun/15697/wcs-bundle.js"></script>
```

上面 cdn 同官方Polyfill [点击查看更多](https://www.webcomponents.org/polyfills)。
