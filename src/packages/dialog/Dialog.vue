<!--
 * @Author: Fone`峰
 * @Date: 2021-04-19 16:49:56
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-19 18:14:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <Popup :teleport="teleport" v-model:show="show">
    <div class="vvm-dialog--body">
      <div class="vvm-dialog--content">
        <slot />
      </div>
    </div>
  </Popup>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Popup from "../popup/index.vue";

export default defineComponent({
  name: "Dialog",
  components: { Popup },
  emits: ["load"],
  props: {
    teleport: {
      type: [String, Element],
    },
  },
  setup(props, { emit }) {
    const show = ref(false);

    const visible = () => {
      console.log("zhixing");
      show.value = true;
    };

    // onMounted(() => {
    //   emit("load", visible);
    // });

    return { show, visible };
  },
});
</script>
