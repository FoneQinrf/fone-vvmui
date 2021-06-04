<!--
 * @Author: Fone`峰
 * @Date: 2021-05-25 10:46:34
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-03 11:22:05
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
import { PickerGroup } from 'vvmui';

const app = createApp();
app.use(Picker);
app.use(PickerGroup);
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

## 级联组件
<Card> 

### 级联选择
期望使用级联选择选中的方式可使用`PickerGroup`组件，`PickerGroup`嵌套在`Form`组件中使用可使用表单校验
```html
<template>
  <PickerGroup :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([
      {
        value: 'jiangsu',
        label: '浙江',
        children: [
          {
            value: 'nanjing',
            label: '杭州',
            children: [
              {
                value: 'fuzimiao',
                label: '西湖'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '宁波',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '老庙'
              },
              {
                value: 'shizilin',
                label: '老街'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园'
              },
              {
                value: 'shizilin',
                label: '狮子林'
              }
            ]
          }
        ]
      }
    ]);
    return { columns };
  }
};
</script>
```

</Card>
<br>
<Card>

### 定义选中值
通过`v-model`绑定数据可自定义选中的下标
```html
<template>
  <PickerGroup v-model='value' :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([]);
    const value = ref([1, 1, 1]);

    return { columns, value };
  }
};
</script>

```

</Card>
<br>
<Card>

### 禁用
通过`disabled`字段可禁用`PickerGroup`组件
```html
<template>
  <PickerGroup disabled v-model='value' :columns='columns' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const columns = ref([]);
    const value = ref([1, 1, 1]);

    return { columns, value };
  }
};
</script>
```

</Card>
<br>
<Card>

### API调用
也可通过api的形式调用
```js
import { Toast, PickerGroup } from 'vvmui';

PickerGroup.show({
  columns: columns,
  onConfirm: (index: any, opts: any) => {
    Toast.info(`选中下标：${index}`);
    console.log('下标', index);
    console.log('选中数据', opts);
  }
});
```

</Card>

## API
<Card> 

### Picker props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| index  |   希望选中的下标   |   Number  | - | 0 |
| height |  每个选项的高度  | Number     | - | 36 |
| columns  | 选项数据   | Array   | - | - |

</Card>
<br>
<Card> 

### PickerGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| columns  | 选项数据   | Array   | - | - |
| label  |   期望展示数据的`key`   |   String  | - | label |
| v-model |  绑定的展示下标  | Array     | - | [] |
| placeholder |  占位内容  | String    | - | 请选择 |
| disabled |  是否禁用  | Boolean    | `true` `false` | false |
| textAlign  |  内容展示方式   | String  | `left` `right` `center` | right |
| onClickOverlay  |  是否可点击背景关闭  |  Boolean  | `true` `false` | false |
| teleport  |  期望渲染在的节点内  | String  | - | body |
| rangeSeparator  |  选中展示内容的分隔符  | String  | - | / |
| cancelText  |  取消按钮的文字  |  String  | - | 取消 |
| confirmText  |  确认按钮的文字  |  String  | - | 确认 |

</Card>
<br>
<Card>

### PickerGroup方法
| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| PickerGroup.show | 展示 | `options` | 组件的实例包含关闭当前打开实例的方法 | 

</Card>
<br>
<Card>

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| columns  | 选项数据   | Array   | - | - |
| label  |   期望展示数据的`key`   |   String  | - | label |
| onClickOverlay  |  是否可点击背景关闭  |  Boolean  | `true` `false` | false |
| cancelText  |  取消按钮的文字  |  String  | - | 取消 |
| confirmText  |  确认按钮的文字  |  String  | - | 确认 |
| onConfirm  |  点击确认按钮回调函数  |  (index, item) => {}  | - | - |
| onCancel  |  点击取消按钮回调函数  |  Function  | - | - |
| onClose  |  关闭回调函数  |  Function  | - | - |
| onChange  |  滑动选择时触发  |  (index, item, key) => {}  | - | - |

</Card>
<br>
<Card>

### Picker solt
| 名称 | 说明 |
|------|------------|

</Card>
<br>
<Card>

### PickerGroup solt
| 名称 | 说明 |
|------|------------|

</Card>
<br>
<Card>

### Picker Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 滑动选择调用 |  选中的下标和整个对象 |

</Card>
<br>
<Card>

### PickerGroup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 滑动选择调用 | (index, item, key) 下标、选中的数据和滚动的`Picker`下标 |
| confirm | 点击确认调用 | (index, item) 下标、选中的数据 |
| cancel | 点击取消调用 | - |
| open | 显示时调用 | - |
| close | 关闭时调用 | - |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>