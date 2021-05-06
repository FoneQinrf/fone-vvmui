<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 12:04:31
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-06 16:50:34
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>