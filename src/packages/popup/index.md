<!--
 * @Author: Fone`峰
 * @Date: 2021-04-14 14:15:56
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 14:28:36
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Popup 弹出层
---

<Card>

### 引入
```js
import { createApp } from 'vue';
import { Popup } from 'vvmui';

const app = createApp();
app.use(Popup);
```

</Card>

## 代码演示

<Card>

### 基本使用
```html
<Popup position='center' v-model:show='value'>
    <div></div>
</Popup>
```

</Card>
<br>
<Card>

### 期望弹出的方式
```html
<Popup position='top' v-model:show='value'>
    <div></div>
</Popup>
<Popup position='bottom' v-model:show='value'>
    <div></div>
</Popup>
<Popup position='right' v-model:show='value'>
    <div></div>
</Popup>
<Popup position='left' v-model:show='value'>
    <div></div>
</Popup>
```

</Card>

## API

<Card>

### Popup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model:show  | 是否显示弹出层     | Boolean       | `true` `false`  | 无 |
| overlay  | 是否需要遮罩层   | Boolean       | `true` `false`  | true |
| position  | 期望出现的方式     | String    | `center` `top` `bottom` `right` `left` | center |
| is-scroll  | 是否禁止触摸滑动   | Boolean  | `true` `false`  | 无 |
| onClickOverlay  | 点击背景是否关闭   | Boolean  |  `true` `false` | true |
| teleport  |  期望渲染在的节点内  | String  | 无 | body |

</Card>
<br>
<Card>

### Popup solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |

</Card>
<br>
<Card>

### Popup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| open | 显示时触发 |  无  |
| close | 隐藏时触发 |  无  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>