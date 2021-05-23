<!--
 * @Author: Fone`峰
 * @Date: 2021-04-13 11:51:42
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-15 21:21:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-actionsheet" @click.stop="click">
    <Input
      v-if="!createApi"
      :placeholder="placeholder"
      :textAlign="textAlign"
      :disabled="disabled"
      v-model="label"
      readonly
    />
    <Popup
      @open="open"
      @close="close"
      :onClickOverlay="onClickOverlay"
      v-model:show="showStatus"
      position="bottom"
      :teleport="teleport"
      :isTeleport="!!teleport"
    >
      <div class="vvm-actionsheet--content">
        <div
          v-for="(item, $index) in data"
          :class="itemClass($index, item)"
          @click.stop="choose(item)"
        >
          {{ item.label }}
        </div>
        <div v-if="isCancel" :class="classButtom">
          <p
            class="vvm-actionsheet--cancel"
            @click.stop="cancel"
            v-if="isCancel"
          >
            {{ cancelText }}
          </p>
        </div>
      </div>
    </Popup>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onMounted,
  PropType,
  ref,
  watch
} from 'vue';
import Input from '../input/index.vue';
import Popup from '../popup/index.vue';
import { find } from '../utils';

export type ActionSheetType = 'single' | 'multiple';
export type ActionSheetAlign = 'left' | 'right' | 'center';
export default defineComponent({
  name: 'ActionSheet',
  components: { Input, Popup },
  emits: ['choose', 'open', 'close', 'cancel', 'update:modelValue'],
  setup(props, { emit }) {
    const showStatus = ref(false);
    const currentValue = ref(props.modelValue);
    const createApi = ref(false);
    // const Element: any = ref(null);

    /**
     * 选中
     */
    const choose = (item: any) => {
      if (!item.disabled) {
        showStatus.value = false;
        currentValue.value = item.value;
        emit('choose', item.value, item);
        emit('update:modelValue', item.value);
        props.onConfirm(item.value, item);
      }
    };

    const show = () => {
      showStatus.value = true;
      createApi.value = true;
    };

    /**
     * 点击取消关闭
     */
    const cancel = () => {
      showStatus.value = false;
      emit('cancel');
      props.onCancel();
      if (props.Element) {
        document.body.removeChild(props.Element);
      }
    };

    const click = () => {
      if (!props.disabled && props.data.length > 0) {
        showStatus.value = true;
      }
    };

    const open = () => {
      emit('open');
    };

    const close = () => {
      emit('close');
      props.onCancel();
      if (props.Element) {
        document.body.removeChild(props.Element);
      }
    };
    onMounted(() => {
      if (props.show) {
        show();
      }
    });
    watch(
      () => props.show,
      (val) => {
        val ? show() : close();
      }
    );

    watch(
      () => {
        return props.modelValue;
      },
      (val) => {
        currentValue.value = val;
      }
    );

    const itemClass = computed(() => {
      return ($index: number, item: any) => {
        return {
          ['vvm-actionsheet--ladel']: true,
          ['vvm-hairline-bottom']: $index + 1 < props.data.length,
          ['--select']: item.value === currentValue.value,
          ['--select--active']: currentValue.value === item.value,
          ['vvm-actionsheet--ladel--disabled']: item.disabled
        };
      };
    });

    const label = computed(() => {
      const { label } = find(props.data, currentValue.value, 'value');
      return label;
    });

    const classButtom = computed(() => {
      return {
        [`vvm-actionsheet--buttom`]: true
      };
    });

    return {
      click,
      showStatus,
      close,
      itemClass,
      label,
      choose,
      open,
      cancel,
      classButtom,
      confirm,
      show,
      createApi,
      currentValue
    };
  },
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    //选项数据源
    data: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '请选择内容'
    },
    disabled: Boolean,
    //是否宣示取消按钮
    isCancel: Boolean,
    //取消按钮文字
    cancelText: {
      type: String,
      default: '取消'
    },
    //确认按钮文字
    confirmText: {
      type: String,
      default: '确认'
    },
    /**
     * 内容展示方式
     */
    textAlign: {
      type: String as PropType<ActionSheetAlign>,
      default: 'right'
    },
    //背景是否点击关闭
    onClickOverlay: {
      type: Boolean,
      default: true
    },
    //create api 回调函数
    onCancel: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    teleport: [String, Element],
    show: Boolean,
    Element: Element
  }
});
</script>
