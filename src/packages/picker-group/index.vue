<!--
 * @Author: Fone`峰
 * @Date: 2021-05-31 10:12:14
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-17 15:14:47
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="vvm-picker-group" @click.stop="click">
    <Input
      v-if="createApi"
      :placeholder="placeholder"
      :textAlign="textAlign"
      :disabled="disabled"
      v-model="chooseText"
      readonly
    />
    <Popup
      :onClickOverlay="onClickOverlay"
      v-model:show="showStatus"
      position="bottom"
      :teleport="teleport"
      :isTeleport="!teleport"
      @open="open"
      @close="close"
    >
      <div class="vvm-picker-group__body">
        <div class="vvm-picker-group__top">
          <span @click.stop="cancel" class="vvm-picker-group__btu __cancel">{{
            cancelText
          }}</span>
          <span @click.stop="confirm" class="vvm-picker-group__btu __confirm">{{
            confirmText
          }}</span>
        </div>
        <div class="vvm-picker-group__columns">
          <Picker
            v-for="(item, $index) in count"
            :key="$index"
            :group-key="$index"
            :columns="columns($index, count)"
            :label="label"
            :index="item"
            @change="change"
          />
        </div>
      </div>
    </Popup>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import Popup from '../popup/index.vue';
import Picker from '../picker/index.vue';
import Input from '../input/index.vue';
import { getColumns, getIndex, getChooseValue, getChooseArr } from './utils';

const App = defineComponent({
  name: 'PickerGroup',
  components: { Popup, Picker, Input },
  emits: ['change', 'update:modelValue', 'confirm', 'cancel', 'open', 'close'],
  setup(props, { emit }) {
    const showStatus = ref(false);
    const currentValue = ref(props.modelValue || []);
    const chooseArr = ref([]);
    const chooseText = ref('');

    const click = () => {
      if (props.disabled) {
        return;
      }
      showStatus.value = true;
    };

    const columns = computed(() => {
      return (key: number, count: any) => {
        return getColumns(props.columns, key, count) || [];
      };
    });

    const count = computed(() => {
      //下标未传入，根据columns数据初始化
      if (currentValue.value.length > 0) {
        return currentValue.value;
      }
      currentValue.value = getIndex(props.columns);
      return currentValue.value;
    });

    //选中的对象数组
    const chooseList = computed(() => {
      const arr = [];
      for (let i = 0; i < count.value.length; i++) {
        arr.push(getColumns(props.columns, i, count.value));
      }
      return arr;
    });

    //计算选中展示的字符串
    const chooseValue = computed(() => {
      if (props.modelValue.length !== 0 && props.columns.length !== 0) {
        return getChooseText();
      }
      return '';
    });

    const createApi = computed(() => {
      return props.Element ? false : true;
    });

    const change = (index: number, item: any, key: number) => {
      currentValue.value[key] = index;
      for (let i = key + 1; i < currentValue.value.length; i++) {
        currentValue.value[i] = 0;
      }
      emit('change', index, item, key);
      props.onChange(index, item, key);
    };

    const confirm = () => {
      showStatus.value = false;
      chooseArr.value = getChooseArr(chooseList.value, count.value);
      emit('update:modelValue', currentValue.value);
      emit('confirm', currentValue.value, chooseArr.value);
      props.onConfirm(currentValue.value, chooseArr.value);

      //form commit
    };
    //计算选中展示的字符串
    const getChooseText = () => {
      const arr = getChooseArr(chooseList.value, count.value);
      const choose = getChooseValue(arr).toString();
      return choose.replace(/,/g, ` ${props.rangeSeparator} `);
    };

    const cancel = () => {
      showStatus.value = false;
      emit('cancel');
      props.onCancel();
    };

    const open = () => {
      emit('open');
    };

    const close = () => {
      emit('close');
      props.onClose();
      if (props.Element) {
        document.body.removeChild(props.Element);
      }
    };

    onMounted(() => {
      chooseText.value = chooseValue.value;
      App.cancel = () => {
        showStatus.value = false;
      };
      if (props.Element) {
        click();
      }
    });

    // watch(
    //   () => props.show,
    //   (val) => {
    //     val ? click() : (showStatus.value = false);
    //   }
    // );

    watch(
      () => props.modelValue,
      (val) => {
        currentValue.value = val;
      }
    );

    watch(
      () => chooseValue.value,
      (val) => {
        chooseText.value = val;
      }
    );

    watch(
      () => chooseArr.value,
      () => {
        chooseText.value = getChooseText();
      }
    );

    return {
      open,
      close,
      click,
      showStatus,
      columns,
      count,
      change,
      currentValue,
      chooseValue,
      confirm,
      cancel,
      createApi,
      chooseText
    };
  },
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    label: {
      type: String,
      default: 'label'
    },
    modelValue: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    disabled: Boolean,
    textAlign: String,
    onClickOverlay: Boolean,
    teleport: {
      type: [String, Element],
      default: 'body'
    },
    rangeSeparator: {
      type: String,
      default: '/'
    },
    show: Boolean,
    Element: Element,
    onClose: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onChange: {
      type: Function,
      default: () => {}
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    }
  }
});

export default App;
</script>
