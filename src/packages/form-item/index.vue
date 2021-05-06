<!--
 * @Author: Fone`峰
 * @Date: 2021-04-12 15:22:00
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-12 16:55:37
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div :class="classes">
    <div v-if="label" class="vvm-formitem--label">
      {{ label }}
    </div>
    <div class="vvm-formitem--body">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "FormItem",
  setup(props) {
    const classes = computed(() => {
      return {
        [`vvm-formitem`]: true,
        [`vvm-formitem--inline`]: props.inline,
      };
    });

    return {
      classes,
    };
  },
  props: {
    label: String,
    inline: {
      type: Boolean,
      default: true,
    },
    type:{
        type:String
    }
  },
});
</script>
