<!--
 * @Author: Fone`峰
 * @Date: 2021-04-26 16:07:57
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 17:05:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Checkbox 多选
---

<Card>

### 引入
```js
import { createApp } from 'vue';
import { Checkbox } from 'vvmui';
import { CheckboxGroup } from 'vvmui';

const app = createApp();
app.use(Checkbox);
app.use(CheckboxGroup);
```
</Card>

## 代码演示
<Card>

### 基本用法
```html
<Checkbox>选项</Checkbox>
```
</Card>
<br>
<Card>

### 搭配CheckboxGroup使用
```html
<CheckboxGroup>
  <Checkbox label='选项一' />
  <Checkbox label='选项二' />
  <Checkbox label='选项三' />
</CheckboxGroup>
```
</Card>
<br>
<Card>

### type类型
`type`类型提供`default`、`errer`、`success`、`warning`四种可选，默认`default`
```html
<CheckboxGroup>
  <Checkbox type='default' label='选项一' />
  <Checkbox type='success' label='选项二' />
  <Checkbox type='warning' label='选项三' />
  <Checkbox type='error' label='选项四' />
</CheckboxGroup>
```
</Card>
<br>
<Card>

### 禁用
可通过`disabled`属性禁用`Checkbox`组件
```html
<template>
  <CheckboxGroup v-model='value'>
    <Checkbox type='default' label='选项一' />
    <Checkbox disabled type='success' label='选项二' />
    <Checkbox disabled type='warning' label='选项三' />
    <Checkbox disabled type='error' label='选项四' />
  </CheckboxGroup>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref(['选项二']);
    return {
      value
    };
  }
};
</script>
```
</Card>
<br>
<Card>

### 选中字体跟随主题色
设置`text-theme`属性时可让`Checkbox`选中时`label`字体跟随主题色变化
```html
<CheckboxGroup text-theme>
  <Checkbox type='default' label='选项一' />
  <Checkbox type='success' label='选项二' />
  <Checkbox type='warning' label='选项三' />
  <Checkbox type='error' label='选项四' />
</CheckboxGroup>
```
</Card>
<br>
<Card>

### 布局方式
设置`inline`可调整`Checkbox`的布局方式
```html
<CheckboxGroup :inline='false'>
  <Checkbox type='default' label='选项一' />
  <Checkbox type='success' label='选项二' />
  <Checkbox type='warning' label='选项三' />
  <Checkbox type='error' label='选项四' />
</CheckboxGroup>
```
</Card>
<br>
<Card>

### 配合icon使用
```html
<Checkbox>
  <Icon name='icongithub' />
  <span>选项</span>
</Checkbox>
```
</Card>


## API

<Card>

### Checkbox props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Boolean       | `true` `false` | false |
| type  | 不同的类型对应不同的主题色彩      | String       | `default` `errer` `success` `warning` | default |
| label  | 选中状态的值      | String | Number | Boolean    | - | - |
| disabled  | 是否禁用       | Boolean       | `true` `false` | false |
| icon  | 自定义`Checkbox`选中的`icon`    | String       | 无 | iconroundcheckfill |
| text-theme  | 选中时`label`字体是否跟随主题色变化    | Boolean     | `true` `false` | false |

</Card>
<br>
<Card>

### CheckboxGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| v-model  | 绑定值       | Array       | - | - |
| type  | 同`Checkbox`的`type`，设置所有子`Checkbox`     | String       | `default` `errer` `success` `warning` | default |
| disabled  | 同`Checkbox`的`disabled`，设置所有子`Checkbox`       | Boolean  | `true` `false` | false |
| inline  | 调整`Checkbox`的布局方式    | Boolean       | `true` `false` | true |
| text-theme  | 同`Checkbox`的`text-theme`，设置所有子`Checkbox`    | Boolean   | `true` `false` | false |

</Card>
<br>
<Card>

### Checkbox solt
| 名称 | 说明 |
|------|------------|
| -  | 自定义主体内容 |

</Card>
<br>
<Card>

### Checkbox Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | `Checkbox`变化时触发，嵌套`CheckboxGroup`组件使用时无效 |  选中的`label`值  |

</Card>
<br>
<Card>

### CheckboxGroup Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| change | 绑定值变化时触发 |  选中的`label`值数组  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>