<!--
 * @Author: Fone`峰
 * @Date: 2021-05-25 10:46:34
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-15 11:36:37
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Rate 评分
---

<Card> 

### 引入
```js
import { createApp } from 'vue';
import { Rate } from 'vvmui';

const app = createApp();
app.use(Rate);
```

</Card>

## 代码演示
<Card> 

### 使用方式
```html

<Rate />

```

</Card>
<br>
<Card> 

### 初始化选中
通过`v-model`可初始化选中的内容
```html
<template>
  <Rate v-model='value' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return { value: ref(3) };
  }
};
</script>
```

</Card>
<br>
<Card> 

### 禁用
`disabled`属性可禁用`Rate`
```html
<template>
  <Rate v-model='value' disabled />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return { value: ref(3) };
  }
};
</script>
```

</Card>
<br>
<Card> 

### 自定义图标、颜色、数量、大小
`active-icon`可自定义激活的`icon`，`default-icon`可自定义默认的`icon`
```html

<!-- 自定义图标 -->
<Rate active-icon='iconbrowse' default-icon='iconbrowse' />

<!-- 自定义颜色 -->
<Rate active-color='#1FAF70' />

<!-- 自定义数量 -->
<Rate :count='7' />

<!-- 自定义大小 -->
<Rate :size='34' />

```

</Card>

## API
<Card> 

### Rate props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  |   绑定的值   |   Number  | - | - |
| count |  数量  | Number     | - | 5 |
| active-icon  | 激活的图标   | String   | - | - |
| default-icon  | 默认的图标   | String   | - | - |
| active-color  | 激活的色彩   | String   | - | #3778E1 |
| default-color  | 默认的色彩   | String   | - | #E0E0EB |
| size  | 大小   | Number   | - | 26 |
| disabled  | 是否禁用   | Boolean   | `true` `false` | false |

</Card>
<br>
<Card>

### Rate solt
| 名称 | 说明 |
|------|------------|
| -  | - |

</Card> 
<br>
<Card>

### Rate Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 选择评分时触发 | 选中的分数 |

</Card> 
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card> 