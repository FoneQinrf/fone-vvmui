<!--
 * @Author: Fone`峰
 * @Date: 2021-04-16 17:28:06
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-11 15:33:40
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Dialog 弹出窗
---

<Card> 

### 组件调用
```js
import { createApp } from 'vue';
import { Dialog } from 'vvmui';

const app = createApp();
app.use(Dialog);
```

</Card>
<br>
<Card>

### 函数调用
```js
import { Dialog } from 'vvmui';

Dialog.alert({ msg: '提示内容' });
```

</Card>

## 代码演示
<Card>

### 基本用法
用于普通的消息提示
```js
const dialog = Dialog.alert({
  msg: '这是提示内容',
  onConfirm: () => {
    dialog.close();
  }
});
```

</Card>
<br>
<Card>

### 无按钮弹窗
通过`showButton`属性可定义无按钮的提示
```js
Dialog.alert({
  msg: '这是提示内容',
  onClickOverlay: true,
  showButton: false
});
```

</Card>
<br>
<Card>

### 无标题弹窗
通过`showTitle`可设置无`title`内容的提示
```js
Dialog.alert({
  msg: '这是提示内容',
  onClickOverlay: true,
  showTitle: false
});
```

</Card>
<br>
<Card>

### 带取消按钮弹窗
通过`showCancel`属性可添加取消按钮，取消按钮默认点击可关闭弹窗
```js
Dialog.alert({
  msg: '这是提示内容',
  showCancel: true
});
```

</Card>

## 高级使用方式
<Card>

### 自定义标题
通过渲染函数可自定义头部内容模版
```js
import { createVNode } from 'vue';

Dialog.alert({
  title: () => {
    return createVNode('span', {}, '自定义标题');
  },
  msg: '这是提示内容',
  showCancel: true
});
```

</Card>
<br>
<Card>

### 自定义内容
```js
import { createVNode } from 'vue';

Dialog.alert({
  msg: () => {
    return createVNode(Input, {
      textAlign: 'center'
    });
  },
  showCancel: true
});
```

</Card>
<br>
<Card>

### 组件使用
面对复杂的展示内容时可选择组件的方式使用
```html
<Dialog v-model:show='show' :onClickOverlay='true'>
  <p>提示内容</p>
</Dialog>
```

</Card>

## API
<Card>

### 方法
| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| Dialog.alert |  展示提示 | `options` | 组件的实例以及关闭的方法 | 

</Card>
<br>
<Card>

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| msg  |  提示内容，支持vue渲染函数   |  String ｜ () => JSX.ELement  | - | - |
| title  |  标题内容，支持vue渲染函数   |  String ｜ () => JSX.ELement  | - | 标题 |
| onClickOverlay  |  是否可点击背景关闭  |  Boolean  | `true` `false` | false |
| showTitle  |  是否显示标题内容  |  Boolean  | `true` `false` | true |
| showCancel  |  是否显示取消按钮  |  Boolean  | `true` `false` | false |
| showConfirm  |  是否显示确认按钮  |  Boolean  | `true` `false` | true |
| cancelText  |  取消按钮的文字  |  String  | - | 取消 |
| confirmText  |  确认按钮的文字  |  String  | - | 确认 |
| onCancelClose  |  是否点击取消关闭  |  Boolean  | `true` `false` | true |
| onConfirmClose  |  是否点击确认关闭  |  Boolean  | `true` `false` | false |
| onConfirm  |  点击确认按钮回调函数  |  Function  | - | - |
| onCancel  |  点击取消按钮回调函数  |  Function  | - | - |
| onClose  |  提示关闭回调函数  |  Function  | - | - |


</Card>
<br>
<Card>

### Props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model:show  |  控制`Dialog`显示隐藏  |  Boolean  | `true` `false` | false |
| msg  |  提示内容，支持vue渲染函数   |  String  | - | - |
| title  |  标题内容，支持vue渲染函数   |  String | - | 标题 |
| onClickOverlay  |  是否可点击背景关闭  |  Boolean  | `true` `false` | false |
| showTitle  |  是否显示标题内容  |  Boolean  | `true` `false` | true |
| showCancel  |  是否显示取消按钮  |  Boolean  | `true` `false` | false |
| showConfirm  |  是否显示确认按钮  |  Boolean  | `true` `false` | true |
| cancelText  |  取消按钮的文字  |  String  | - | 取消 |
| confirmText  |  确认按钮的文字  |  String  | - | 确认 |
| confirmText  |  确认按钮的文字  |  String  | - | 确认 |
| onCancelClose  |  是否点击取消关闭  |  Boolean  | `true` `false` | true |
| onConfirmClose  |  是否点击确认关闭  |  Boolean  | `true` `false` | false |
| teleport  |  期望渲染在的节点内  | String  | - | - |

</Card>
<br>
<Card>

### Dialog solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |
| title  | 自定义标题内容 |

</Card>
<br>
<Card>

### Dialog Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| confirm | 点击确认按钮触发 |  - |
| cancel | 点击取消按钮触发 |  -  |
| close | 关闭时触发 |  -  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>