<!--
 * @Author: Fone`峰
 * @Date: 2021-06-05 17:03:06
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-07 10:47:37
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-rate">
    <div
      class="vvm-rate__icon"
      :style="style"
      v-for="item in count"
      @click="change(item)"
    >
      <transition name="vvm-slide-center">
        <label v-if="active(item)" class="vvm-rate__activeIcon">
          <Icon :size="size" :name="activeIcon" :color="activeColor" />
        </label>
      </transition>
      <label class="vvm-rate__defaultIcon">
        <Icon :size="size" :name="defaultIcon" :color="defaultColor" />
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import Icon from '../icon/index.vue';

export default defineComponent({
  name: 'Rate',
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const currentValue: any = ref(props.modelValue);

    const active = computed(() => {
      return (index: number) => {
        return currentValue.value >= index;
      };
    });

    const style = computed(() => {
      return {
        width: `${props.size}px`,
        height: `${props.size}px`
      };
    });

    const disabled = computed(() => props.disabled);

    const activeColor = computed(() => {
      return disabled.value ? '#84849A' : props.activeColor;
    });

    const change = (i: number) => {
      if (disabled.value) {
        return;
      }
      if (currentValue.value > 0) {
        i === currentValue.value
          ? (currentValue.value = i - 1)
          : (currentValue.value = i);
      } else {
        currentValue.value = i;
      }
      emit('update:modelValue', currentValue.value);
      emit('change', currentValue.value);
      //form commit
    };

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      }
    );

    return { active, change, style, disabled, activeColor };
  },
  components: { Icon },
  props: {
    count: {
      type: Number,
      default: 5
    },
    modelValue: Number,
    activeIcon: {
      type: String,
      default: 'iconpingfenxingxing'
    },
    defaultIcon: {
      type: String,
      default: 'iconpingfenxingxing'
    },
    activeColor: {
      type: String,
      default: '#3778E1'
    },
    defaultColor: {
      type: String,
      default: '#E0E0EB'
    },
    size: {
      type: Number,
      default: 26
    },
    disabled: Boolean
  }
});
</script>
