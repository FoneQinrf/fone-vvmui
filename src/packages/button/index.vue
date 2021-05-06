<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:21:36
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-28 16:47:17
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <button :disabled="currentDisabled" @click="click" :class="clasess">
    <template v-if="currentLoading">
      <span class="vvm-loading-wrp"
        ><Icon class="vvm-loading" name="iconloading"
      /></span>
      {{ loadingText }}
    </template>
    <div class="text" v-else>
      <slot />
    </div>
  </button>
</template>

<script lang="ts">
import { defineComponent, PropType, computed, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import Icon from '../icon/index.vue';
import { getConfig } from '../config';

export type ButtonType = 'default' | 'success' | 'warning' | 'error';
export type ButtonSize = 'normal' | 'small' | 'large';

export default defineComponent({
  name: 'Button',
  emits: ['click'],
  setup(props, { emit }) {
    const currentLoading = ref(props.loading);
    const { size } = getConfig();

    const currentDisabled = computed(() => {
      return currentLoading.value || props.disabled;
    });

    /**
     * 留给外部调用的loading方法
     */
    const startLoading = () => {
      currentLoading.value = true;
    };
    const endLoading = () => {
      currentLoading.value = false;
    };

    const router = useRouter();
    const click = (event: MouseEvent) => {
      if (!currentDisabled.value) {
        //router
        if (props.to && router) {
          router[props.replace ? 'replace' : 'push']({
            path: props.to,
            query: props.query
          });
        }

        //location
        if (props.url) {
          props.replace
            ? window.location.replace(props.url)
            : (window.location.href = props.url);
        }
        emit('click', event);
      }
    };

    watch(
      () => props.loading,
      (steta) => {
        currentLoading.value = steta;
      }
    );

    const clasess = computed(() => {
      return {
        ['vvm-button']: true,
        [`vvm-button--${props.type}`]: props.type,
        [`vvm-button--text`]: props.text,
        [`vvm-button--plain`]: props.plain,
        [`vvm-button--round`]: props.round,
        [`vvm-button--${size || props.size}`]: props.size,
        [`vvm-button--disabled`]: currentDisabled.value
      };
    });

    return {
      clasess,
      currentDisabled,
      currentLoading,
      startLoading,
      endLoading,
      click
    };
  },
  components: { Icon },
  props: {
    /**
     * 按钮类型
     */
    type: {
      type: String as PropType<ButtonType>,
      default: 'default'
    },
    /**
     * 字体按钮
     */
    text: Boolean,
    /**
     * 空心按钮
     */
    plain: Boolean,
    /**
     * 圆角按钮
     */
    round: Boolean,
    /**
     * 按钮大小
     */
    size: {
      type: String as PropType<ButtonSize>,
      default: 'normal'
    },
    /**
     * 禁用与loading
     */
    disabled: Boolean,
    loading: Boolean,
    loadingText: {
      type: String,
      default: '加载中..'
    },
    /**
     * 路由or者导航状态
     */
    to: String,
    url: String,
    replace: Boolean,
    query: Object
  }
});
</script>
