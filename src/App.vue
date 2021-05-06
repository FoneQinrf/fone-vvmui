<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 11:27:52
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-06 14:30:17
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <navbar />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import navbar from "./components/navbar/index.vue";

export default defineComponent({
  name: "App",
  components: {
    navbar,
  },
});
</script>

<style lang="scss">
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>