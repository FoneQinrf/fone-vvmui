<!--
 * @Author: Fone`峰
 * @Date: 2021-04-19 16:49:56
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-17 10:58:52
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <Teleport :to="teleport" :disabled="!teleport">
    <div class="vvm-dialog">
      <Popup
        @update:show="update"
        @close="close"
        v-model:show="show"
        :onClickOverlay="onClickOverlay"
        :isTeleport="true"
      >
        <div :class="classes">
          <div v-if="showTitle" class="vvm-dialog--title">
            <slot name="title">
              {{ title }}
            </slot>
          </div>
          <div class="vvm-dialog--content">
            <slot>{{ msg }}</slot>
          </div>
          <div
            v-if="showCancel || showConfirm"
            class="vvm-dialog--button vvm-hairline-top"
          >
            <Button
              v-if="showCancel"
              text
              size="large"
              @click="onCancel"
              :class="
                showCancel && showConfirm
                  ? 'vvm-hairline-right --dialog-cancel'
                  : ''
              "
            >
              {{ cancelText }}
            </Button>
            <Button
              class="--dialog-confirm"
              v-if="showConfirm"
              @click="onConfirm"
              text
              size="large"
            >
              {{ confirmText }}
            </Button>
          </div>
        </div>
      </Popup>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import Popup from '../popup/index.vue';
import Button from '../button/index.vue';
import { forEach } from 'lodash';

const props = {
  msg: {
    type: [String, Function],
    default: ''
  },
  title: {
    type: [String, Function],
    default: '标题'
  },
  onClickOverlay: {
    type: Boolean,
    default: false
  },
  show: Boolean,
  showTitle: {
    type: Boolean,
    default: true
  },
  // showButton: {
  //   type: Boolean,
  //   default: true
  // },
  showCancel: {
    type: Boolean,
    default: false
  },
  showConfirm: {
    type: Boolean,
    default: true
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  onConfirmClose: {
    type: Boolean,
    default: false
  },
  onCancelClose: {
    type: Boolean,
    default: true
  },
  teleport: {
    type: [String, Element]
  }
};

export default defineComponent({
  name: 'Dialog',
  components: { Popup, Button },
  emits: ['update', 'close', 'cancel', 'confirm', 'update:show'],
  props,
  setup(props, { emit }) {
    const show = ref(false);

    onMounted(() => {
      show.value = props.show;
    });

    watch(
      () => props.show,
      (val) => {
        show.value = val;
      }
    );

    const update = (val: boolean) => {
      emit('update', val);
      emit('update:show', val);
    };

    const classes = computed(() => {
      return {
        [`vvm-dialog--body`]: true,
        [`--none-title`]: !props.showCancel && !props.showConfirm
      };
    });

    const close = () => {
      emit('close');
      update(false);
    };

    const onCancel = () => {
      if (props.onCancelClose) {
        show.value = false;
      }
      emit('cancel');
      update(false);
    };
    const onConfirm = () => {
      if (props.onConfirmClose) {
        show.value = false;
      }
      emit('confirm');
      update(false);
    };

    return {
      show,
      update,
      classes,
      close,
      onCancel,
      onConfirm
    };
  }
});
</script>
