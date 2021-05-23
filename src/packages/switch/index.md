<!--
 * @Author: Fone`峰
 * @Date: 2021-05-17 15:39:54
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-21 13:42:59
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Switch 开关
---

<Card>

### 引入
```js
import { createApp } from 'vue';
import { Switch } from 'vvmui';

const app = createApp();
app.use(Switch);
```
</Card>

## 代码演示

<Card>

`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`
### 基本使用
```html
<Switch type='default' />
<Switch type='error' />
<Switch type='success' />
<Switch type='warning' />
```

</Card>
<br>
<Card>

`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`
### 禁用
```html
<template>
  <Switch disabled type='default' />
  <Switch disabled v-model='value' type='default' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return { value: ref(true) };
  }
};
</script>
```

</Card>
<br>
<Card>

通过`color`属性可自定义激活的颜色
### 自定义颜色
```html
<Switch color='#22bd9f' />
```

</Card>
<br>
<Card>

### 定义文字内容
```html
<Switch activeText='开' />
<Switch closeText='关' />
<Switch activeText='开' closeText='关' />
```

</Card>

## API

<Card>

### Switch props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值   | Boolean       | `true` `false` | false |
| type  | 不同的类型对应不同的主题色彩      | String       | `default` `errer` `success` `warning` | default |
| color  | 激活时的状态     | String   | - | - |
| disabled  | 是否禁用       | Boolean       | `true` `false` | false |
| activeText  | 激活时的文字内容       | String       | - | - |
| closeText  | 关闭时的文字内容     | String       | - | - |

</Card>
<br>
<Card>

### Switch Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 点击时触发 |  当前的状态  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>
