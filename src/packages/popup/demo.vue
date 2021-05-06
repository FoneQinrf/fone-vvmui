<!--
 * @Author: Fone`峰
 * @Date: 2021-04-14 14:16:05
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-19 15:13:27
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>使用方式</h4>
    <CellGroup>
      <Cell @click="center" title="展示弹出层" arrow></Cell>
    </CellGroup>
    <h4>期望弹出的方式</h4>
    <CellGroup>
      <Cell @click="top" title="顶部弹出" arrow></Cell>
      <Cell @click="bottom" title="底部弹出" arrow></Cell>
      <Cell @click="left" title="左边弹出" arrow></Cell>
      <Cell @click="right" title="右边弹出" arrow></Cell>
    </CellGroup>
    <Popup :position="classes" v-model:show="value">
      <div :class="classes"></div>
    </Popup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const value = ref(false);
    const classes = ref("");

    const click = (val: string) => {
      value.value = true;
      classes.value = val;
    };

    const center = () => {
      click("center");
    };
    const top = () => {
      click("top");
    };
    const bottom = () => {
      click("bottom");
    };
    const left = () => {
      click("left");
    };
    const right = () => {
      click("right");
    };

    return {
      value,
      click,
      classes,
      center,
      top,
      bottom,
      left,
      right
    };
  },
});
</script>

<style lang="scss" scoped>
.center {
  width: 100px;
  height: 100px;
}
.bottom,
.top {
  width: 100%;
  height: 200px;
}
.left,
.right {
  width: 200px;
  height: 100%;
}
</style>

