<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:22:58
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-25 15:36:20
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>使用方式</h4>
    <Picker :columns="columns" />
    <h4>自定义高度</h4>
    <Picker :height="30" :columns="columns" />
    <h4>自定义选中项</h4>
    <Picker :index="3" :columns="columns" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
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
});
</script>

<style>
.demo-padding .vvm-picker {
  background: #fff;
}
</style>
