<!--
 * @Author: Fone`峰
 * @Date: 2021-04-25 14:45:44
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-28 13:50:16
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-scrollcard vvm-ignore">
    <div class="vvm-scrollcard--wrp vvm-ignore">
      <div :style="style" class="vvm-scrollcard--progressbar vvm-ignore"></div>
    </div>
    <div @scroll="scroll" class="vvm-scrollcard--body vvm-scrollbar">
      <div class="vvm-scrollcard--slot">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import { getScrollHeight, getWindowHeight, getScrollTop } from '../utils';

export default defineComponent({
  name: 'ScrollCard',
  setup(props) {
    const percen = ref(0);

    const style = computed(() => {
      return {
        backgroundColor: props.color || '#3778E1',
        width: `${percen.value}%`
      };
    });

    const scroll = (e: Event) => {
      const { children } = e.target as HTMLDivElement;
      const a: number = getWindowHeight(e.target);
      const b: number = getScrollHeight(children[0]) - a;
      const c: number = getScrollTop(e.target);
      percen.value = (c / b) * 100;
    };

    return { style, scroll };
  },
  props: {
    color: String
  }
});
</script>
