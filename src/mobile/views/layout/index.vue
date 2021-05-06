<!--
 * @Author: Fone`峰
 * @Date: 2021-04-07 14:42:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-28 16:32:30
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-wrp">
    <div v-if="frame" class="nav">{{ name }}</div>
    <div :class="frame ? 'router-view frame' : 'router-view'">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
  name: 'Layout',
  setup: () => {
    const name = ref('');

    onBeforeRouteUpdate((to) => {
      name.value = String(to.name);
    });

    const route = useRoute();
    onMounted(() => {
      name.value = String(route.name);
    });

    const frame = ref(window.self.name === 'demo-content' ? true : false);
    return {
      frame,
      name
    };
  }
});
</script>

<style lang="scss" scoped>
.demo-wrp {
  width: 100%;
  height: 100%;
  position: relative;
  .router-view {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    box-sizing: border-box;
    padding-bottom: 0px;
    background: $B6;
    &::-webkit-scrollbar {
      width: 4px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 3px;
      box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
      background: rgba(0, 0, 0, 0.1);
    }
    &.frame {
      padding-top: 50px;
    }
  }
  .nav {
    width: 100%;
    height: 44px;
    box-shadow: 0 4px 10px 0 rgb(0 0 0 / 7%);
    position: absolute;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: bold;
  }
}
</style>

<style lang="scss">
.demo-padding {
  padding: 0 20px 0px 20px;
}
h4 {
  padding: 20px 0 10px 0;
  color: $B3;
}
.demo-row {
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
}
.demo-row2 {
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
}
.not-padding {
  padding-bottom: 20px;
  h4 {
    padding-left: 20px;
  }
}
</style>
