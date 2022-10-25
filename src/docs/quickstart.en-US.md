# Quick Start

## Preview

> Scan the QR code below to experience the Quark component library example

<img src="https://m.hellobike.com/resource/helloyun/16682/76s6X_quark.demo.png?x-oss-process=image/quality,q_80" width="200" alt="qr.png">

## NPM Install

```shell
# Vue project
npm i quark

# React project
npm i quark-react
```

## 1.Example Vue

```jsx
<template>
  <div>
    <quark-button type="primary">button</quark-button>;
  </div>
</template>
<script>
  import "quarkd/lib/button";
</script>
```

## 2. Example React

```jsx
import { Button } from "@quarkd/quark-react";

class Demo extends React.Component {
  render() {
    return <Button type="primary">button</Button>;
  }
}
```

## 3 、Polyfill

> Use Quark(Web components) today and have them work in all major browsers. [Polyfill](https://www.webcomponents.org/polyfills)。
```html
<script src="https://m.hellobike.com/resource/helloyun/15697/wcs-bundle.js"></script>
```