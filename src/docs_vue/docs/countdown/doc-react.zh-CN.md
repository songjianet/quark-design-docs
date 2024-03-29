# Countdown 倒计时

### 介绍

常见电商秒杀倒计时

### 安装使用
```tsx
import { CountDown } from '@quarkd/quark-react'
```

### 基本使用

```html
<CountDown time='7200000'/>
```

### 格式化
format 属性控制，间隔符仅支持一位字符串

```html
<CountDown time='360000' format='MM:SS'/>
<CountDown time='360000' format='MM-SS' />
<CountDown time='360000' format='MM SS'/>
```

### 结束回调
当倒计时为 0 的时候，触发结束事件
```jsx
export default () => {
  const onEnd = () => {
    Toast.text('countdown finished')
  }
  return(
    <CountDown time='5000' onEnd={onEnd}/>
  )
}
```

### 样式自定义
支持样式自定义

```html
<CountDown class="css" time="360000" />
```
```css
.css {
  font-size: 20px;
  color: #333;
  letter-spacing: 2px;
  --countdown-num-min-width: 20px;
  --countdown-num-background: #fff;
  --countdown-num-padding: 0 10px;
  --countdown-num-border-radius: 6px;
  --countdown-dot-color: #333;
  --countdown-dot-margin: 6px;
}
```
## API

### Props

| 参数          | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| time         | 标准时间戳 | string |
| format       | 支持 HH MM SS、MM:SS 间隔符可自定义一位字符串   | string | `HH:MM:SS`  |
| onEnd        | 倒计时为 0 触发事件 | () => void |

## 样式变量

组件提供了以下[CSS变量](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)，可用于自定义样式，使用方法请参考[主题定制](#/zh-CN/guide/theme)。

| 名称                             | 说明                  | 默认值       |
| ------------------------------  | --------------------- | ------------|
| `--countdown-num-min-width`     | 数字内容最小宽度         | `18px`     |
| `--countdown-num-background`    | 数字内容背景色           | `#F4433D`  |
| `--countdown-num-padding`       | 数字内容 padding        | `0 4px`    |
| `--countdown-num-border-radius` | 数字圆角                | `4px`      |
| `--countdown-dot-color`         | 间隔符颜色              | `#fff`     |
| `--countdown-dot-margin`        | 间隔符间距              | `0 2px`    |

