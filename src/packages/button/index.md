<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:21:42
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 16:57:42
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
## Button 按钮
---

<Card> 

### 引入
```js
import { createApp } from 'vue';
import { Button } from 'vvmui';

const app = createApp();
app.use(Button);
```

</Card> 

## 代码演示
<Card> 

### 按钮类型
支持`default`、`success`、`warning`、`error`四种类型，默认`default`
```html
<Button>默认按钮</Button>
<Button type='success'>成功按钮</Button>
<Button type='warning'>警告按钮</Button>
<Button type='error'>危险按钮</Button>
```

</Card> 
<br>
<Card> 

### 字体按钮
通过设置`text`属性可启用字体按钮
```html
<Button text>默认按钮</Button>
<Button text type='success'>成功按钮</Button>
<Button text type='warning'>警告按钮</Button>
<Button text type='error'>危险按钮</Button>
```

</Card> 
<br>
<Card>

### 空心按钮
通过设置`plain`属性可启用空心按钮
```html
<Button plain>默认按钮</Button>
<Button plain type='success'>成功按钮</Button>
<Button plain type='warning'>警告按钮</Button>
<Button plain type='error'>危险按钮</Button>
```

</Card> 
<br>
<Card>

### 圆角按钮
通过设置`round`属性可启用圆角按钮
```html
<Button plain round>默认按钮</Button>
<Button plain round type='success'>成功按钮</Button>
<Button plain round type='warning'>警告按钮</Button>\n
<Button round>默认按钮</Button>
<Button round type='success'>成功按钮</Button>
<Button round type='warning'>警告按钮</Button>
```

</Card> 
<br>
<Card>

### 按钮尺寸
`size`属性支持`large` 、`normal`、`small`，默认`normal`
```html
<Button size='large'>默认按钮</Button>
<Button size='normal'>默认按钮</Button>
<Button size='small'>默认按钮</Button>
```

</Card> 
<br>
<Card>

### 禁用按钮
```html
<Button disabled>默认按钮</Button>
<Button disabled type='success'>成功按钮</Button>
<Button disabled type='warning'>警告按钮</Button>

<Button plain disabled>默认按钮</Button>
<Button plain disabled type='success'>成功按钮</Button>
<Button plain disabled type='warning'>警告按钮</Button>
```

</Card> 
<br>
<Card>

### loading状态
可通过参数控制`loading`状态也可通过内部`startLoading`和`endLoading`方法控制
```html
<template>
  <Button loading>默认按钮</Button>
  <Button loading type='success'>成功按钮</Button>
  <Button loading type='warning'>成功按钮</Button>\n
  <Button loading plain>默认按钮</Button>
  <Button loading plain round type='success'>成功按钮</Button>
  <Button ref='button' @click='loading' plain type='warning'>警告按钮</Button>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const button = ref();
    const loading = () => {
      button.value.startLoading();
      setTimeout(() => {
        button.value.endLoading();
      }, 1000);
    };
    return {
      button,
      loading
    };
  }
};
</script>
```

</Card> 

## API

<Card>

### Button props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| type  | 按钮类型       | String       | `default` `success` `warning` `error` | default |
| text  | 是否字体按钮     | Boolean       | `true` `false` | false |
| plain  | 是否空心按钮     | Boolean    | `true` `false` | false |
| round  | 是否圆角按钮    | Boolean  | `true` `false` | false |
| size  | 按钮大小    | String  | `large` `normal` `small` | normal |
| disabled  |  是否禁用  | Boolean  | `true` `false` | false |
| loading  |  是否`loading`状态  | Boolean  | `true` `false` | false |
| loading-text  |  `loading`状态时展示的内容 | String  | - | 加载中.. |
| query  |  vue-router跳转需要携带的数据   | Object  | - | - |
| to  |   点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to)  | String  | - | - |
| url  | 点击后跳转的地址    | String | - | - |
| replace  | 是否使用replace来跳转    | Boolean  | `true` `false` | false |

</Card> 
<br>
<Card>

### Button solt
| 名称 | 说明 |
|------|------------|
| -  | 自定义主体内容 |

</Card> 
<br>
<Card>

### Button Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| click | 点击`Button`触发 | event |

</Card> 
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card> 