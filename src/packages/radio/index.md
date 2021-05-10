<!--
 * @Author: Fone`峰
 * @Date: 2021-04-15 17:05:15
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 12:02:37
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Radio 单选
---

<Card>

### 引入
<Code :content="`
import { createApp } from 'vue';
import { Radio } from 'vvmui';
import { RadioGroup } from 'vvmui';\n
const app = createApp();
app.use(Radio);
app.use(RadioGroup);
`"/>

</Card>

## 代码演示
<Card>

### 基本用法
<Code language="html" :content="`
<Radio>选项</Radio>
`"/>

</Card>
<br>
<Card>

### 搭配RadioGroup使用
<Code language="html" :content='`
<RadioGroup>
  <Radio label="选项一" />
  <Radio label="选项二" />
  <Radio label="选项三" />
</RadioGroup>
`'/>

</Card>
<br>
<Card>

### type类型
`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`
<Code language="html" :content='`
<RadioGroup>
  <Radio type="default" label="选项一" />
  <Radio type="success" label="选项二" />
  <Radio type="warning" label="选项三" />
  <Radio type="error" label="选项四" />
</RadioGroup>
`'/>

</Card>
<br>
<Card>

### 禁用
可通过`disabled`属性禁用`Radio`组件
<Code language="html" content='
<RadioGroup v-model="value">
  <Radio type="default" label="选项一" />
  <Radio disabled type="success" label="选项二" />
  <Radio disabled type="warning" label="选项三" />
  <Radio disabled type="error" label="选项四" />
</RadioGroup>
'/>
<Code content='
import { ref } from "vue";
export default {
  setup() {
    const value = ref(["选项二"]);
    return {
      value
    };
  }
};
'/>

</Card>
<br>
<Card>

### 选中字体跟随主题色
设置`text-theme`属性时可让`Radio`选中时`label`字体跟随主题色变化
<Code language="html" content='
<RadioGroup text-theme>
  <Radio type="default" label="选项一" />
  <Radio type="success" label="选项二" />
  <Radio type="warning" label="选项三" />
  <Radio type="error" label="选项四" />
</RadioGroup>
'/>

</Card>
<br>
<Card>

### 布局方式
设置`inline`可调整`Radio`的布局方式
<Code language="html" content='
 <RadioGroup :inline="false">
  <Radio type="default" label="选项一" />
  <Radio type="success" label="选项二" />
  <Radio type="warning" label="选项三" />
  <Radio type="error" label="选项四" />
</RadioGroup>
'/>

</Card>
<br>
<Card>

### 配合icon使用
<Code language="html" content='
<Radio>
  <Icon name="icongithub" />
  <span>选项</span>
</Radio>
'/>

</Card>

## API

<Card>

### Radio props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Number / Boolean / String       | 无 | 无
| type  | 不同的类型对应不同的主题色彩      | String       | `default` `errer` `success` `warning` | default |
| label  | 选中状态的值      | String/Number/Boolean    | 无 | 无 |
| disabled  | 是否禁用       | Boolean       | 无 | 无 |
| icon  | 自定义`Radio`选中的`icon`    | String       | 无 | iconroundcheckfill |
| text-theme  | 选中时`label`字体是否跟随主题色变化    | Boolean       | 无 | false |

</Card>
<br>
<Card>

### RadioGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Number / String       | 无 | 无
| type  | 同`Radio`的`type`，设置所有子`Radio`     | String       | `default` `errer` `success` `warning` | default |
| disabled  | 同`Radio`的`disabled`，设置所有子`Radio`       | Boolean       | 无 | 无 |
| inline  | 调整`Radio`的布局方式    | Boolean       | 无 | true |
| text-theme  | 同`Radio`的`text-theme`，设置所有子`Radio`    | Boolean       | 无 | false |

</Card>
<br>
<Card>

### Radio solt
| 名称 | 说明 |
|------|------------|
| 无  | 自定义主体内容 |

</Card>
<br>
<Card>

### Radio Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | `Radio`变化时触发，嵌套`RadioGroup`组件使用时无效 |  选中的`label`值  |

</Card>
<br>
<Card>

### RadioGroup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 绑定值变化时触发 |  选中的`label`值  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>

