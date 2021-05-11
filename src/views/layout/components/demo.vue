<!--
 * @Author: Fone`峰
 * @Date: 2021-04-05 20:28:15
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-09 11:41:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-wrp">
    <iframe name="demo-content" :src="`${demo}#/${path}`"> </iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";

const filter = ["intro", "icon"];

export default defineComponent({
  name: "demo",
  setup() {
    const router = useRoute();
    const path = ref("");
    const demo = import.meta.env.DEV ? "http://localhost:3000/fone-vvmui/mobile.html" : "https://foneqinrf.github.io/fone-vvmui/mobile.html";

    const filters = (name: string) => {
      if (filter.includes(name)) {
        path.value = "";
        return;
      }
      path.value = name;
    };

    onBeforeRouteUpdate((to) => {
      filters(String(to.name));
    });

    onMounted(() => {
      filters(String(router.name));
    });

    return { demo, path };
  },
});
</script>

<style lang="scss" scoped>
.demo-wrp {
  width: 375px;
  height: 667px;
  position: fixed;
  top: 80px;
  right: 20px;
  box-shadow: $B4 0 4px 12px;
  border-radius: 10px;
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>