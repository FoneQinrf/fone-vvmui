<!--
 * @Author: Fone`峰
 * @Date: 2021-04-06 17:45:34
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-09 11:24:04
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-card">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Card',
  setup() {}
});
</script>
