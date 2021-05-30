<!--
 * @Author: Fone`峰
 * @Date: 2021-05-25 10:46:34
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-30 17:02:07
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
## Picker 选择器
---

<Card> 

### 引入
```js
import { createApp } from 'vue';
import { Picker } from 'vvmui';

const app = createApp();
app.use(Picker);
```

</Card>

## 代码演示
<Card> 

### 使用方式
```html
<template>
  <Picker :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
      { label: '选项三', value: 3 },
      { label: '选项四', value: 4 },
      { label: '选项五', value: 5 },
      { label: '选项六', value: 6 },
      { label: '选项七', value: 7 },
      { label: '选项八', value: 8 },
      { label: '选项九', value: 9 },
      { label: '选项十', value: 10 }
    ]);
    return { columns };
  }
};
</script>
```

</Card>
<br>
<Card> 

### 自定义高度
```html
<template>
  <Picker :height='30' :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
      { label: '选项三', value: 3 },
      { label: '选项四', value: 4 },
      { label: '选项五', value: 5 },
      { label: '选项六', value: 6 },
      { label: '选项七', value: 7 },
      { label: '选项八', value: 8 },
      { label: '选项九', value: 9 },
      { label: '选项十', value: 10 }
    ]);
    return { columns };
  }
};
</script>
```

</Card>
<br>
<Card> 

### 自定义选中项
```html
<template>
  <Picker :index='3' :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
      { label: '选项三', value: 3 },
      { label: '选项四', value: 4 },
      { label: '选项五', value: 5 },
      { label: '选项六', value: 6 },
      { label: '选项七', value: 7 },
      { label: '选项八', value: 8 },
      { label: '选项九', value: 9 },
      { label: '选项十', value: 10 }
    ]);
    return { columns };
  }
};
</script>
```

</Card>

## API
<Card> 

### Picker props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| index  |   希望选中的下标   |   Number  | - | 0 |
| height |  每个选项的高度  | Number     | - | 38 |
| columns  | 选项数据   | Array   | - | - |

</Card>
<br>
<Card>

### Picker solt
| 名称 | 说明 |
|------|------------|

</Card>
<br>
<Card>

### Picker Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 选中调用 |  选中的下标和整个对象 |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>