<!--
 * @Author: Fone`峰
 * @Date: 2021-04-15 17:05:21
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-29 16:15:14
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>基本用法</h4>
    <Checkbox>选项</Checkbox>
    <h4>搭配CheckboxGroup使用</h4>
    <CheckboxGroup>
      <Checkbox label="选项一" />
      <Checkbox label="选项二" />
      <Checkbox label="选项三" />
    </CheckboxGroup>
    <h4>type类型</h4>
    <CheckboxGroup>
      <Checkbox type="default" label="选项一" />
      <Checkbox type="success" label="选项二" />
      <Checkbox type="warning" label="选项三" />
      <Checkbox type="error" label="选项四" />
    </CheckboxGroup>
    <h4>禁用</h4>
    <CheckboxGroup v-model="value">
      <Checkbox type="default" label="选项一" />
      <Checkbox disabled type="success" label="选项二" />
      <Checkbox disabled type="warning" label="选项三" />
      <Checkbox disabled type="error" label="选项四" />
    </CheckboxGroup>
    <CheckboxGroup v-if="false" text-theme type="success">
      <Checkbox label="选项一" />
      <Checkbox label="选项二" />
      <Checkbox label="选项三" />
      <Checkbox label="选项四" />
    </CheckboxGroup>
    <h4>选中字体跟随主题色</h4>
    <CheckboxGroup text-theme>
      <Checkbox type="default" label="选项一" />
      <Checkbox type="success" label="选项二" />
      <Checkbox type="warning" label="选项三" />
      <Checkbox type="error" label="选项四" />
    </CheckboxGroup>
    <h4>布局方式</h4>
    <CheckboxGroup :inline="false">
      <Checkbox type="default" label="选项一" />
      <Checkbox type="success" label="选项二" />
      <Checkbox type="warning" label="选项三" />
      <Checkbox type="error" label="选项四" />
    </CheckboxGroup>
    <h4>配合icon使用</h4>
    <Checkbox>
      <Icon name="icongithub" />
      <span>选项</span>
    </Checkbox>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref(['选项二']);
    return {
      value
    };
  }
});
</script>
