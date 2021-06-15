<!--
 * @Author: Fone`峰
 * @Date: 2021-06-05 17:03:24
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-07 10:59:36
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>使用方式</h4>
    <Rate />
    <h4>初始化选中</h4>
    <Rate v-model="value" />
    <h4>禁用</h4>
    <Rate v-model="value" disabled />
    <h4>自定义图标</h4>
    <Rate active-icon="iconbrowse" default-icon="iconbrowse" />
    <h4>自定义颜色</h4>
    <Rate active-color="#1FAF70" />
    <h4>自定义数量</h4>
    <Rate :count="7" />
    <h4>自定义大小</h4>
    <Rate :size="34" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return { value: ref(3) };
  }
});
</script>
