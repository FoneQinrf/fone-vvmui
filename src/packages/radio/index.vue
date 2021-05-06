<!--
 * @Author: Fone`峰
 * @Date: 2021-04-15 17:04:55
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-03 15:12:13
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <label @click="change" :class="classes">
    <span class="vvm-radio--icon vvm-ignore">
      <Transition name="vvm-slide-center">
        <Icon v-show="active" :name="icon" class="--radio-icon" :size="24" />
      </Transition>
    </span>
    <span v-if="showLabel" class="vvm-radio--label">
      <slot>
        {{ label }}
      </slot>
    </span>
    <input
      v-if="!parent"
      v-show="false"
      type="radio"
      :name="name"
      :value="currentValue"
      @change="change"
      :disabled="isDisabled"
    />
    <!-- {{ radioProps }} -->
  </label>
</template>

<script lang="ts">
import { computed, defineComponent, inject, PropType, ref } from 'vue';
import Icon from '../icon/index.vue';

export type RadioType = 'default' | 'success' | 'warning' | 'error';

export default defineComponent({
  name: 'Radio',
  components: { Icon },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit, slots }) {
    const currentValue = ref(props.modelValue);
    const parentChange: any = inject('change', null);
    const radioProps: any = inject('radioProps', {});

    const parent = computed(() => {
      return parentChange !== undefined;
    });

    const showLabel = computed(() => props.label || slots.default);

    const classes = computed(() => {
      return {
        [`vvm-radio`]: true,
        [`--${type.value}`]: type.value,
        [`--disabled`]: isDisabled.value,
        [`--text-theme`]: isTextTheme.value && active.value
      };
    });

    const active = computed(() => {
      return parent.value
        ? radioProps.currentValue === props.label
        : currentValue.value || currentValue.value === 0;
    });

    const isDisabled = computed(() => {
      return props.disabled || radioProps.disabled;
    });

    const type = computed(() => {
      return props.type || radioProps.type || 'default';
    });

    const isTextTheme = computed(() => {
      return props.textTheme || radioProps.textTheme;
    });

    const change = (e: Event) => {
      if (isDisabled.value) {
        return;
      }
      if (parentChange) {
        parentChange(props.label);
        return;
      }
      if (props.modelValue) {
        return;
      }
      const { checked } = e.target as HTMLInputElement;
      currentValue.value = checked;
      emit('change', currentValue.value);
      emit('update:modelValue', currentValue.value);
      //form commit
    };

    return {
      classes,
      change,
      active,
      parent,
      currentValue,
      isDisabled,
      showLabel
    };
  },
  props: {
    label: String,
    name: String,
    //icon图标
    icon: {
      type: String,
      default: 'iconradiobuttonselect'
    },
    type: {
      type: String as PropType<RadioType>
    },
    modelValue: [Number, Boolean, String],
    //禁用
    disabled: Boolean,
    textTheme: Boolean
  }
});
</script>
