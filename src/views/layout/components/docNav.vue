<!--
 * @Author: Fone`峰
 * @Date: 2021-04-05 09:32:37
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 16:15:03
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="doc-nav vvm-scrollbar">
    <ul v-for="item in navList">
      <li class="title">{{ item.name }}</li>
      <ol v-if="item.packages.length">
        <li v-for="nav in item.packages">
          <router-link class="nav-tag" :to="nav.path.toLowerCase()">
            {{ nav.name }}
          </router-link>
        </li>
      </ol>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { navList } from "@/config.json";

export default defineComponent({
  setup: () => {
    return { navList };
  },
});
</script>

<style lang="scss" scoped>
.doc-nav {
  flex: 0 0 230px;
  height: 100%;
  border-right: 1px solid $B5;
  overflow-y: auto;
  box-sizing: border-box;
  padding: 30px 0;
  .title {
    padding: 10px 0 10px 30px;
    font-weight: bold;
    font-size: 16px;
  }
  .nav-tag {
    display: block;
    color: #333;
    padding: 10px 0 10px 50px;
    font-weight: 450;
    &.router-link-active {
      color: $default-color;
      background: rgb(55, 120, 225, 0.1);
    }
  }
}
</style>