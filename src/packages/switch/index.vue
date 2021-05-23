<!--
 * @Author: Fone`峰
 * @Date: 2021-05-17 15:39:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-21 11:46:47
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <label @click="click" :style="style" :class="classes">
    <span :class="radiusClass" :style="radiusStyle"></span>
    <span v-if="disabled" class="vvm-switch--disabled"></span>
    <span :class="textClass" v-if="isText">
      {{ currentValue ? activeText : closeText }}
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue';
import { ButtonType } from '../button/index.vue';

export default defineComponent({
  name: 'Switch',
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const currentValue = ref(props.modelValue);

    const formEmit: Function = inject('form-emit', () => {});

    const classes = computed(() => {
      return {
        [`vvm-switch`]: true,
        [`--${props.type}`]: props.type,
        [`--active`]: currentValue.value
      };
    });

    const click = () => {
      if (props.disabled) {
        return;
      }
      currentValue.value = !currentValue.value;
      emit('update:modelValue', currentValue.value);
      emit('change', currentValue.value);
      formEmit('change', currentValue.value);
    };

    const style = computed(() => {
      return {
        backgroundColor: currentValue.value ? props.color : ''
      };
    });

    const radiusStyle = computed(() => {
      return {
        border: currentValue.value ? `1px solid ${props.color}` : ''
      };
    });

    const radiusClass = computed(() => {
      return {
        ['vvm-switch--radius']: true,
        ['--active']: currentValue.value,
        ['--close']: !currentValue.value
      };
    });

    const textClass = computed(() => {
      return {
        [`vvm-switch--text`]: true,
        [`--active`]: currentValue.value,
        ['--close']: !currentValue.value
      };
    });

    const isText = computed(() => props.activeText || props.closeText);

    return {
      radiusClass,
      isText,
      style,
      click,
      classes,
      currentValue,
      radiusStyle,
      textClass
    };
  },
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    modelValue: Boolean,
    color: String,
    disabled: Boolean,
    activeText: String,
    closeText: String
  }
});
</script>
