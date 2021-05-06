<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-19 16:56:25
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>使用方式</h4>
    <CellGroup>
      <Cell @click="info" title="info 提示" arrow></Cell>
    </CellGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Dialog } from "@/vvmui";

console.log(Dialog);

export default defineComponent({
  setup() {
    const info = () => {
      Dialog.info();
    };

    return { info };
  },
});
</script>
