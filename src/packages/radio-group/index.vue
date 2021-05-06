<!--
 * @Author: Fone`峰
 * @Date: 2021-04-15 17:05:51
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-20 17:33:04
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  provide,
  ref,
  PropType,
  reactive
} from 'vue';

export type RadioType = 'default' | 'success' | 'warning' | 'error';
export default defineComponent({
  name: 'RadioGroup',
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue);
    const radioProps = reactive({ currentValue, ...props });

    const classes = computed(() => {
      return {
        [`vvm-radiogroup`]: true,
        [`--inline`]: props.inline
      };
    });

    const change = (e: any) => {
      // console.log(e);
      currentValue.value = e;
      emit('change', currentValue.value);
      emit('update:modelValue', currentValue.value);
      // console.log(currentValue.value);
      // console.log(props.modelValue);
    };

    provide('radioProps', radioProps);
    provide('change', change);

    return { classes };
  },
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    modelValue: [Number, String],
    disabled: Boolean,
    type: {
      type: String as PropType<RadioType>
    },
    textTheme: Boolean
  }
});
</script>
