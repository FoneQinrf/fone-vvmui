<!--
 * @Author: Fone`峰
 * @Date: 2021-04-13 11:51:58
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 15:15:00
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<!--
 * @Author: Fone`峰
 * @Date: 2021-04-12 15:09:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 13:59:46
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
## ActionSheet 动作面板
---

<Card> 

### 引入
<Code :content="`
import { ActionSheet } from 'vue';
import { Input } from 'vvmui';\n
const app = createApp();
app.use(ActionSheet);
`"/>

</Card>

## 代码演示
<Card> 

### 使用方式
<Code language="html" :content='`
<ActionSheet :data="data" />
`'/>

<Code :content='`
import { ref } from "vue";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    return { data };
  },
};
`'/>

</Card> 
<br>
<Card>

### 禁用
<Code language="html" :content='`
<ActionSheet disabled :data="data" />
<ActionSheet v-model="value" disabled :data="data" />
`'/>

<Code :content='`
import { ref } from "vue";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    const value = ref(1);
    return { data, value };
  },
};
`'/>

</Card>
<br>
<Card>

### 展示取消按钮
<Code language="html" :content='`
<ActionSheet is-cancel :data="data" />
`'/>

<Code :content='`
import { ref } from "vue";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    return { data };
  },
};
`'/>

</Card>
<br>
<Card>

### 禁用选项
<Code language="html" :content='`
<ActionSheet is-cancel :data="data" />
`'/>

<Code :content='`
import { ref } from "vue";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
        disabled: true,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    return { data };
  },
};
`'/>

</Card>
<br>
<Card>

### API形式调用
<Code :content='`
import { ref } from "vue";
import { ActionSheet } from "vvmui";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    ActionSheet.show({
      data: data.value,
      onConfirm: (val: any, opts: any) => {
        console.log(opts.label);
      },
    });
  },
};
`'/>

</Card>
<br>
<Card>

### 手动调用关闭
<Code :content='`
import { ref } from "vue";
import { ActionSheet } from "vvmui";
export default {
  setup() {
    const data = ref([
      {
        label: "选择一",
        value: 0,
      },
      {
        label: "选择二",
        value: 1,
      },
      {
        label: "选择三",
        value: 2,
      },
    ]);
    const ctx = ActionSheet.show({
      data: data.value,
      onConfirm: (val: any, opts: any) => {
        console.log(opts.label);
      }
    });
    // ctx.cancel() or ActionSheet.cancel()
  },
};
`'/>

</Card>

## API
<Card> 

### ActionSheet props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| data  | 选项数据源      | Array       | 无 | 无 |
| v-model  | 选中数据中的`value`   | String / Number     | 无 | 无 
| placeholder  | 占位内容     | String       | 无 | 请选择内容 |
| disabled  | 是否禁用     | Boolean    | 无 | false |
| is-cancel  | 是否是否显示取消按钮     | Boolean  | 无 | false |
| cancel-text  | 取消按钮文字    | String  | 无 | 取消 |
| textAlign  |  内容展示方式   | String  | `left` `right` `center` | right |
| onClickOverlay  | 点击背景是否关闭   | Boolean  |  `true` `false` | true |
| teleport  |  期望渲染在的节点内  | String  | 无 | body |

</Card>
<br>
<Card>

### ActionSheet solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |

</Card>
<br>
<Card>

### ActionSheet Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| choose | 选中调用 |  选中的value和整个对象 |
| cancel | 点击取消调用 |  无  |
| open | 打开时触发 |  无  |
| close | 关闭时触发 |  无  |

</Card>

## 方法
<Card> 

### API调用方法
| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| ActionSheet.show |  展示`ActionSheet`  | `options`  | ActionSheet实例 | 
| ActionSheet.cancel |  关闭`ActionSheet`  |  无  | 无 | 

</Card>
<br>
<Card> 

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| data  | 选项数据源      | Array       | 无 | 无 |
| is-cancel  | 是否是否显示取消按钮     | Boolean  | 无 | false |
| cancel-text  | 取消按钮文字    | String  | 无 | 取消 |
| onClickOverlay  | 点击背景是否关闭   | Boolean  |  `true` `false` | true |
| teleport  |  期望渲染在的节点内  | String  | 无 | body |
| className  |  自定义类名 | String  | 无 | vvm-actionsheet--wrp |
| onConfirm  |  选中时回调方法 | Function  | 无 | (value, item) |
| onCancel  |  关闭的回调方法 | Function  | 无 | 无 |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>