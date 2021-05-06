<!--
 * @Author: Fone`峰
 * @Date: 2021-05-06 15:48:21
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 15:49:26
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <span class="badge">{{ text }}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String
  }
});
</script>

<style lang="scss" scoped>
.badge {
  background: #3778E1;
  display: inline-block;
  font-size: 14px;
  height: 18px;
  line-height: 18px;
  border-radius: 18px;
  padding: 0 6px;
  color: #fff;
  margin-right: 5px;
  vertical-align: top;
}
</style>
