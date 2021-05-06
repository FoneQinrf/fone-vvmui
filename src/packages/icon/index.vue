<!--
 * @Author: Fone`峰
 * @Date: 2021-04-06 18:01:13
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-16 13:23:03
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <i
    @click="click"
    :class="['vvm-iconfont', 'vvm-icon', 'vvm-ignore', name]"
    :style="style"
  ></i>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  name: "Icon",
  emits: ["click"],
  setup(props, { emit }) {
    const style = computed(() => {
      return {
        fontSize: `${props.size}px`,
        width: `${props.size}px`,
        height: `${props.size}px`,
        color: props.color,
      };
    });

    const click = () => {
      emit("click");
    };

    return {
      style,
      click,
    };
  },
  props: {
    name: String,
    size: {
      type: Number,
      default: 18,
    },
    color: {
      type: String,
    },
  },
});
</script>