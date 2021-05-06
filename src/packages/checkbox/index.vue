<!--
 * @Author: Fone`峰
 * @Date: 2021-04-26 16:07:35
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-03 15:12:42
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <label :class="classes" @click="click">
    <span class="vvm-checkbox--icon vvm-ignore">
      <Transition name="vvm-slide-center">
        <Icon v-show="active" :name="icon" class="--checkbox-icon" :size="24" />
      </Transition>
    </span>
    <span v-if="showLabel" class="vvm-checkbox--label">
      <slot>
        {{ label }}
      </slot>
    </span>
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue';
import { includes } from '../utils';
import Icon from '../icon/index.vue';

export type CheckboxType = 'default' | 'success' | 'warning' | 'error';

export default defineComponent({
  name: 'Checkbox',
  emits: ['change', 'update:modelValue'],
  components: { Icon },
  setup(props, { emit, slots }) {
    const currentValue = ref(props.modelValue);
    const change: any = inject('change', null);
    const CheckboxGroupProps: any = inject('CheckboxGroupProps', {});

    const type = computed(() => {
      return props.type || CheckboxGroupProps.type || 'default';
    });

    const isDisabled = computed(
      () => props.disabled || CheckboxGroupProps.disabled
    );

    const isTextTheme = computed(() => {
      return props.textTheme || CheckboxGroupProps.textTheme;
    });

    const showLabel = computed(() => props.label || slots.default);

    const classes = computed(() => {
      return {
        [`vvm-checkbox`]: true,
        [`--${type.value}`]: type.value,
        [`--disabled`]: isDisabled.value,
        [`--text-theme`]: isTextTheme.value && active.value
      };
    });

    const active = computed(() => {
      return change
        ? includes(CheckboxGroupProps.currentValue, props.label)
        : currentValue.value;
    });

    const click = () => {
      if (isDisabled.value) {
        return;
      }
      const flag = !currentValue.value;
      if (change) {
        change(props.label);
        // currentValue.value = props.label;
      } else {
        currentValue.value = flag;
        emit('update:modelValue', flag);
        emit('change', flag);
        //form commit
      }
    };

    return { classes, active, click, showLabel };
  },
  props: {
    label: String,
    //icon图标
    icon: {
      type: String,
      default: 'iconroundcheckfill'
    },
    type: {
      type: String as PropType<CheckboxType>
    },
    modelValue: Boolean,
    disabled: Boolean,
    textTheme: Boolean
  }
});
</script>
