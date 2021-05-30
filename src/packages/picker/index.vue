<!--
 * @Author: Fone`峰
 * @Date: 2021-05-25 10:46:42
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-30 16:32:40
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-picker" :style="style">
    <div
      class="vvm-picker__wrp"
      @touchstart="onTouchstart"
      @touchmove.prevent="onTouchmove"
      @touchend="onTouchend"
      @touchcancel="onTouchcancel"
      @transitionend="onTransitionend"
    >
      <div class="vvm-picker__scroll" :style="touchStyle">
        <p
          v-for="(item, $index) in columns"
          :key="$index"
          :style="itemStyle"
          class="vvm-picker__item vvm-ellipsis"
        >
          {{ item.label }}
        </p>
      </div>
      <div
        :style="maskHeight"
        class="vvm-picker__mask --top vvm-hairline-bottom"
      ></div>
      <div
        :style="maskHeight"
        class="vvm-picker__mask --bottom vvm-hairline-top"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, watch } from 'vue';

const range = (num: number, arr: any) =>
  Math.min(Math.max(num, arr[0]), arr[1]);

export default defineComponent({
  name: 'Picker',
  emits: ['change'],
  setup(props, { emit }) {
    const opts = reactive({
      startY: 0,
      offset: 0,
      startOffset: 0,
      index: props.index,
      count: 5,
      state: true
    });

    const style = computed(() => {
      return {
        height: `${opts.count * props.height}px`
      };
    });

    const touchStyle = computed(() => {
      return {
        height: `${opts.count * props.height}px`,
        transform: `translateY(${opts.offset}px)`
      };
    });

    const itemStyle = computed(() => {
      return {
        height: `${props.height}px`
      };
    });

    const height: any = computed(
      () => (opts.count * props.height) / 2 - props.height / 2
    );

    const maskHeight = computed(() => {
      return { height: `${height.value}px` };
    });

    /**
     * 设置offset
     */
    const setOffset = () => {
      const i = opts.count / 2;
      if (opts.index >= props.columns.length) {
        opts.offset = (i + 0.5 - props.columns.length) * props.height;
        return;
      }
      opts.offset = (i - 0.5 - opts.index) * props.height;
    };

    /**
     * 事件逻辑处理
     */
    const onTouchstart = (e: any) => {
      opts.startY = e.touches[0].clientY;
      opts.startOffset = opts.offset;
    };
    const onTouchmove = (e: any) => {
      const Y = e.clientY || e.touches[0].clientY;
      const deltaY = Y - opts.startY;
      const start = -(
        opts.count * props.height +
        height.value +
        props.height * 2
      );
      const end = props.height * opts.count - height.value + props.height;
      opts.offset = range(opts.startOffset + deltaY, [start, end]);
    };
    const onTouchend = () => {
      if (opts.offset !== opts.startOffset) {
        opts.state = false;
        const index = range(
          Math.round((-opts.offset + height.value) / props.height),
          [0, props.columns.length - 1]
        );
        setIndex(index);
      }
    };
    const onTouchcancel = () => {
      onTouchend();
    };
    const onTransitionend = () => {
      if (opts.state) {
        emit('change', opts.index, props.columns[opts.index]);
      }
    };

    const setIndex = (index: number) => {
      opts.state = opts.index !== index;
      opts.index = index;
      setOffset();
    };

    onMounted(() => {
      setOffset();
    });

    watch(
      () => props.index,
      (val) => {
        opts.index = val;
        setOffset();
      }
    );

    return {
      style,
      itemStyle,
      maskHeight,
      onTouchcancel,
      onTouchstart,
      onTouchmove,
      onTouchend,
      touchStyle,
      onTransitionend
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    height: {
      type: Number,
      default: 38
    },
    index: {
      type: Number,
      default: 0
    }
  }
});
</script>
