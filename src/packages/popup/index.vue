<!--
 * @Author: Fone`峰
 * @Date: 2021-04-14 14:15:39
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-07 09:59:48
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <Teleport :to="toTeleport">
    <template v-if="isScroll">
      <Transition name="vvm-fade">
        <div
          @mousewheel.prevent
          @touchmove.prevent
          @click.top="click"
          v-show="isOverlay"
          class="vvm-popup--overlay"
        ></div>
      </Transition>
    </template>
    <template v-else>
      <Transition name="vvm-fade">
        <div
          @click.top="click"
          v-show="isOverlay"
          class="vvm-popup--overlay"
        ></div>
      </Transition>
    </template>
    <Transition
      :name="transitionName"
      @after-enter="onOpened"
      @after-leave="onClosed"
    >
      <div v-show="show" :class="classes">
        <slot />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  PropType,
  onDeactivated,
  onBeforeUnmount
} from 'vue';
import { getConfig } from '../config';

export type PopupType = 'center' | 'top' | 'bottom' | 'right' | 'left';
export default defineComponent({
  name: 'Popup',
  emits: ['update:show', 'open', 'close'],
  setup(props, { emit }) {
    const { popup } = getConfig();

    const click = () => {
      if (props.onClickOverlay) {
        emit('update:show', false);
      }
    };
    const onOpened = () => {
      emit('open');
    };
    const onClosed = () => {
      emit('close');
    };

    const isOverlay = computed(() => {
      return props.show && props.overlay;
    });

    const transitionName = computed(() => {
      return `vvm-slide-${props.position}`;
    });

    const classes = computed(() => {
      return {
        [`vvm-popup`]: true,
        [`vvm-popup--${props.position}`]: props.position
      };
    });

    const toTeleport = computed(() => {
      return props.teleport || popup.teleport;
    });

    onDeactivated(() => {
      emit('update:show', false);
    });
    onBeforeUnmount(() => {
      emit('update:show', false);
    });

    return {
      click,
      onOpened,
      onClosed,
      isOverlay,
      transitionName,
      classes,
      toTeleport
    };
  },
  props: {
    //渲染的节点
    teleport: {
      type: [String, Element]
    },
    show: Boolean,
    //是否需要遮罩层
    overlay: {
      type: Boolean,
      default: true
    },
    //期望出现的当时
    position: {
      type: String as PropType<PopupType>,
      default: 'center'
    },
    //禁止触摸
    isScroll: {
      type: Boolean,
      default: true
    },
    //背景是否点击关闭
    onClickOverlay: {
      type: Boolean,
      default: true
    }
  }
});
</script>
