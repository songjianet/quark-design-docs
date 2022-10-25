# Common Problem

## Vue Precautions For Use

Vue project using `quark` component may appear **warning**：

```html
<!-- vue@2.x: -->
Unknown custom element:
<quark-card>
  - did you register the component correctly? For recursive components, make
  sure to provide the "name" option.

  <!-- vue@3.x -->
  [Vue warn]: Failed to resolve component: quark-icon
</quark-card>
```

Don't worry, this is because the syntax part of Vue components refers to custom elements, in order to avoid conflicts with Vue components, custom elements need to be ignored! Please inject the following code into the project:

```tsx
// vue@2.x
Vue.config.ignoredElements = [/^quark-/];

// vue@3.x
const app = createApp({});
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith("quark-");
```

If you are using vite, modify vite.config.js:

```tsx
import vue from "@vitejs/plugin-vue";

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.startsWith("quark-"),
        },
      },
    }),
  ],
};
```

## React+TS

React+TS project using `quark` component may appear **warning**：

```
Property xx does not exist on type 'JSX.IntrinsicElements'
```

This is due to the custom label, in order to avoid this warning, you can set the label type.

```
declare namespace JSX {
  interface IntrinsicElements {
    [tag: string]: any;
  }
}
```
