<!--
 * @Author: Fone`峰
 * @Date: 2021-04-13 11:51:58
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-30 17:02:37
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
## ActionSheet 动作面板
---

<Card> 

### 引入
```js
import { createApp } from 'vue';
import { ActionSheet } from 'vvmui';

const app = createApp();
app.use(ActionSheet);
```

</Card>

## 代码演示
<Card> 

### 使用方式
```html
<template>
  <ActionSheet :data='data' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    return { data };
  },
};
</script>
```

</Card> 
<br>
<Card>

### 禁用
```html
<template>
  <ActionSheet disabled :data='data' />
  <ActionSheet v-model='value' disabled :data='data' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    const value = ref(1);
    return { data, value };
  },
};
</script>
```
</Card>
<br>
<Card>

### 展示取消按钮
```html
<template>
  <ActionSheet is-cancel :data='data' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    return { data };
  },
};
</script>
```

</Card>
<br>
<Card>

### 禁用选项
```html
<template>
  <ActionSheet is-cancel :data='data' />
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
        disabled: true,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    return { data };
  },
};
</script>
```
</Card>
<br>
<Card>

### API形式调用
```html
<template>
  <ActionSheet is-cancel :data='data' />
</template>

<script>
import { ref } from 'vue';
import { ActionSheet } from 'vvmui';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    
    ActionSheet.show({
      data: data.value,
      onConfirm: (val, opts) => {
        console.log(val,opts.label);
      },
    });
  },
};
</script>
```
</Card>
<br>
<Card>

### 手动调用关闭
```js
import { ref } from 'vue';
import { ActionSheet } from 'vvmui';

export default {
  setup() {
    const data = ref([
      {
        label: '选择一',
        value: 0,
      },
      {
        label: '选择二',
        value: 1,
      },
      {
        label: '选择三',
        value: 2,
      },
    ]);
    
    ActionSheet.show({
      data: data.value,
      onConfirm: (val, opts) => {
        console.log(val,opts.label);
      }
    });
    // ctx.cancel() or ActionSheet.cancel()
  },
};
```
</Card>

## API
<Card> 

### ActionSheet props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| data  | 选项数据源      | Array       | - | - |
| v-model  | 选中数据中的`value`   | String | Number     | - | - |
| placeholder  | 占位内容     | String       | - | 请选择内容 |
| disabled  | 是否禁用     | Boolean    | `true` `false` | false |
| is-cancel  | 是否是否显示取消按钮     | Boolean  | `true` `false` | false |
| cancel-text  | 取消按钮文字    | String  | - | 取消 |
| textAlign  |  内容展示方式   | String  | `left` `right` `center` | right |
| onClickOverlay  | 点击背景是否关闭   | Boolean  |  `true` `false` | true |
| teleport  |  期望渲染在的节点内  | String  | - | body |

</Card>
<br>
<Card>

### ActionSheet solt
| 名称 | 说明 |
|------|------------|
| -  | 自定义主体内容 |

</Card>
<br>
<Card>

### ActionSheet Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| choose | 选中调用 |  选中的value和整个对象 |
| cancel | 点击取消调用 |  -  |
| open | 打开时触发 |  -  |
| close | 关闭时触发 |  - |

</Card>

## 方法
<Card> 

### API调用方法
| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| ActionSheet.show |  展示`ActionSheet`  | `options`  | ActionSheet实例 | 
| ActionSheet.cancel |  关闭`ActionSheet`  |  - | - | 

</Card>
<br>
<Card> 

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| data  | 选项数据源      | Array       | - | - |
| is-cancel  | 是否是否显示取消按钮     | Boolean  | `true` `false` | false |
| cancel-text  | 取消按钮文字    | String  | - | 取消 |
| onClickOverlay  | 点击背景是否关闭   | Boolean  |  `true` `false` | true |
| className  |  自定义类名 | String  | - | vvm-actionsheet--wrp |
| onConfirm  |  选中时回调方法 | Function  | - | (value, item) |
| onCancel  |  关闭的回调方法 | Function  | - | - |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>