<!--
 * @Author: Fone`峰
 * @Date: 2021-04-26 16:08:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-17 10:34:25
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
  PropType,
  provide,
  reactive,
  ref
} from 'vue';
import { CheckboxType } from '../checkbox/index.vue';
import { includes } from '../utils';

export default defineComponent({
  name: 'CheckboxGroup',
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue || []);
    const CheckboxGroupProps = reactive({ currentValue, ...props });

    const change = (value: string | number) => {
      if (props.disabled) {
        return;
      }
      //存在该value过滤出新的数组
      if (includes(currentValue.value, value)) {
        currentValue.value = currentValue.value.filter(
          (ele: any) => ele !== value
        );
      } else {
        currentValue.value.push(value);
      }
      emit('update:modelValue', currentValue.value);
      emit('change', currentValue.value);
      //form commit
    };

    const classes = computed(() => {
      return {
        [`vvm-checkboxgroup`]: true,
        [`--inline`]: props.inline
      };
    });

    provide('CheckboxGroupProps', CheckboxGroupProps);
    provide('change', change);

    return { classes, currentValue };
  },
  props: {
    inline: {
      type: Boolean,
      default: true
    },
    modelValue: Array,
    disabled: Boolean,
    type: {
      type: String as PropType<CheckboxType>
    },
    textTheme: Boolean
  }
});
</script>
