<!--
 * @Author: Fone`峰
 * @Date: 2021-04-15 17:05:21
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-29 16:06:01
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>基本用法</h4>
    <Radio>单选框</Radio>
    <h4>搭配RadioGroup使用</h4>
    <RadioGroup>
      <Radio label="选项一" />
      <Radio label="选项二" />
      <Radio label="选项三" />
    </RadioGroup>
    <h4>type类型</h4>
    <RadioGroup>
      <Radio type="default" label="选项一" />
      <Radio type="success" label="选项二" />
      <Radio type="warning" label="选项三" />
      <Radio type="error" label="选项四" />
    </RadioGroup>
    <h4>禁用</h4>
    <RadioGroup v-model="value">
      <Radio type="default" label="选项一" />
      <Radio disabled type="success" label="选项二" />
      <Radio disabled type="warning" label="选项三" />
      <Radio disabled type="error" label="选项四" />
    </RadioGroup>
    <RadioGroup v-if="false" type="success">
      <Radio label="选项一" />
      <Radio label="选项二" />
      <Radio label="选项三" />
      <Radio label="选项四" />
    </RadioGroup>
    <h4>选中字体跟随主题色</h4>
    <RadioGroup text-theme>
      <Radio type="default" label="选项一" />
      <Radio type="success" label="选项二" />
      <Radio type="warning" label="选项三" />
      <Radio type="error" label="选项四" />
    </RadioGroup>
    <h4>布局方式</h4>
    <RadioGroup :inline="false">
      <Radio type="default" label="选项一" />
      <Radio type="success" label="选项二" />
      <Radio type="warning" label="选项三" />
      <Radio type="error" label="选项四" />
    </RadioGroup>
    <h4>配合icon使用</h4>
    <Radio>
      <Icon name="icongithub" />
      <span>选项</span>
    </Radio>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref('选项二');
    return {
      value
    };
  }
});
</script>
