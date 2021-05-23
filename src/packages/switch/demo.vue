<!--
 * @Author: Fone`峰
 * @Date: 2021-05-17 15:40:01
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-21 11:48:24
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>基本用法</h4>
    <Switch type="default" />
    <Switch type="error" />
    <Switch type="success" />
    <Switch type="warning" />
    <h4>禁用</h4>
    <Switch disabled type="default" />
    <Switch disabled v-model="value" type="default" />
    <h4>自定义颜色</h4>
    <Switch color="#22bd9f" />
    <h4>定义文字内容</h4>
    <Switch activeText="开" />
    <Switch closeText="关" />
    <Switch activeText="开" closeText="关" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return { value: ref(true) };
  }
});
</script>

<style lang="scss" scoped>
.demo-padding {
  label {
    margin-right: 20px;
  }
}
</style>
