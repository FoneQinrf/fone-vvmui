<!--
 * @Author: Fone`峰
 * @Date: 2021-04-06 11:35:25
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-07 16:31:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-home">
    <div class="top">
      <img class="logo" src="@/assets/logo.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
});
</script>

<style lang="scss" scoped>
.demo-home {
  .top {
    padding: 20px 0;
    text-align: center;
    .logo {
      width: 60%;
    }
  }
}
</style>