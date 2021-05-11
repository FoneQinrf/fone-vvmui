<!--
 * @Author: Fone`峰
 * @Date: 2021-04-12 15:09:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 14:33:01
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
## Input 输入框
---

<Card> 

### 引入
```js
import { createApp } from 'vue';
import { Input } from 'vvmui';

const app = createApp();
app.use(Input);
```

</Card>

## 代码演示
<Card> 

### 基本用法
```html
<Input placeholder='请输入用户名' />
<Input placeholder='请输入密码' type='password' />
```

</Card> 
<br>
<Card> 

### 使用icon
```html
<Input text-align='left' placeholder='请输入用户名' icon='iconuser' />
<Input text-align='left' placeholder='请输入密码' icon='iconicon-mima' type='password' />
```

</Card> 
<br>
<Card> 

### 使用单位
```html
<Input placeholder='请输入内容' unity='元' />
```

</Card> 
<br>
<Card> 

### 禁用
```html
<Input placeholder='请输入内容' disabled />
<Input v-model='value' disabled placeholder='请输入内容' />
```

</Card> 

## API

<Card>

### Input props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 当前输入的值       | String / Number       | 无 | 无 |
| placeholder  |   占位内容   | String       | 无 | 请输入内容 |
| type  | 输入框的类型     | String    | `text` `password` | text |
| maxLength  | 可输入长度    | Number  | 无 | 无 |
| icon  | 头部`icon`    | String  | 无 | 无 |
| unity  |  尾部展示的内容  | String  | 无 | 无 |
| readonly  |  是否为只读状态，只读状态下无法输入内容  | Boolean  | 无 | false |
| pattern  |  限制输入的正则 | String  | 无 |无 |
| textAlign  |  内容展示方式   | String  | `left` `right` `center` | right |
| name  | 名称，提交表单的标识符    | String | 无 | 无 |
| scroll-target  | 使用scroll的dom节点名称，ios系统键盘关闭不重绘页面scroll的可使用    | String  | 无 | 无 |

</Card> 
<br>
<Card>

### Input solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义尾部展示的内容 |

</Card> 
<br>
<Card>

### Input Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| focus | 失去焦点触发的 | 输入框的内容 |
| blur | 获取焦点时触发事件 | 输入框的内容 |
| change | 内容变化时触发的事件 | 输入框的内容 |

</Card> 
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card> 