<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:19
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-25 13:53:17
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <transition name="vvm-fade">
    <div v-if="status" :class="calsess">
      <div class="vvm-toast--icon" v-if="type !== 'info'">
        <span :class="type === 'loading' ? 'vvm-loading' : ''">
          <Icon :name="iconName" :size="40" color="#fff" />
        </span>
      </div>
      <div class="vvm-toast--info">
        {{ msg }}
      </div>
    </div>
  </transition>
  <div
    v-if="type === 'loading'"
    class="vvm-toast--loading"
    @mousewheel.prevent
    @touchmove.prevent
  ></div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import Icon from '../icon/index.vue';
import { getConfig } from '../config';

export type ToastType = 'info' | 'success' | 'warning' | 'error' | 'loading';
const icon: any = {
  success: 'iconselect-bold',
  warning: 'iconwarning-circle-fill',
  error: 'iconclose',
  loading: 'iconloading'
};
export default defineComponent({
  name: 'Toast',
  components: { Icon },
  setup(props) {
    const status = ref(false);
    let tiemr = null;
    const { $toast } = getConfig();

    const close = (): void => {
      if (props.onClose) {
        props.onClose();
      }
    };

    const show = (): void => {
      status.value = true;
      if (props.type !== 'loading') {
        tiemr = setTimeout(() => {
          status.value = false;
          tiemr = null;
        }, $toast.duration || props.duration);
      }
    };

    const calsess = computed(() => {
      return `vvm-toast--body --${props.type}`;
    });

    const iconName = computed(() => {
      if (props.icon) {
        return props.icon;
      }
      return icon[props.type || ''];
    });

    return { close, show, status, tiemr, calsess, iconName };
  },
  props: {
    /**
     * 自动关闭的延迟时间
     */
    duration: {
      type: Number,
      default: 1000
    },
    msg: String,
    /**
     * 关闭回调
     */
    onClose: {
      type: Function,
      default: () => {}
    },
    /**
     * 类型
     */
    type: String as PropType<ToastType>,
    /**
     * icon图标
     */
    icon: String
  }
});
</script>
