<!--
 * @Author: Fone`峰
 * @Date: 2021-04-12 15:08:56
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-16 11:48:22
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div :class="classes">
    <div v-if="icon" class="vvm-input--icon">
      <Icon :name="icon" />
    </div>
    <input
      class="vvm-input--text"
      :type="type"
      :value="modelValue"
      :maxlength="maxLength"
      :readonly="readonly"
      :placeholder="placeholder"
      :disabled="disabled"
      :pattern="pattern"
      :name="name"
      @blur="blur"
      @input="change"
      @focus="focus"
    />
    <div v-if="unity" class="vvm-input--unity">
      <slot>
        {{ unity }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Icon from "../icon/index.vue";

export type InputType = "text" | "password";
export type InputAlign = "left" | "right" | "center";

export default defineComponent({
  name: "Input",
  components: { Icon },
  emits: ["change", "blur", "focus", "update:modelValue"],
  setup(props, { emit }) {
    const blur = (e: Event) => {
      if (!props.disabled) {
        const input = e.target as HTMLInputElement;
        emit("blur", input.value);
        emit("update:modelValue", input.value);
      }
    };

    const change = (e: Event) => {
      if (!props.disabled) {
        const input = e.target as HTMLInputElement;
        emit("update:modelValue", input.value);
        emit("change", input.value);
      }
    };

    const focus = (e: Event) => {
      if (!props.disabled) {
        const input = e.target as HTMLInputElement;
        emit("focus", input.value);
        emit("update:modelValue", input.value);

        /**
         * 解决ios关闭键盘重绘页面问题
         */
        const scrollDom: any = props.scrollTarget
          ? document.querySelector(props.scrollTarget)
          : document.body;
        scrollDom.scrollTop = scrollDom.scrollTop;
      }
    };

    const classes = computed(() => {
      return {
        [`vvm-input`]: true,
        [`vvm-input--disabled`]: props.disabled,
        [`vvm-input--${props.textAlign}`]: props.textAlign,
      };
    });

    return { blur, change, focus, classes };
  },
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    disabled: Boolean,
    type: {
      type: String as PropType<InputType>,
      default: "text",
    },
    modelValue: [String, Number],
    maxLength: Number,
    /**
     * 头部icon
     */
    icon: String,
    /**
     * 右部分展示的内容
     */
    unity: String,
    /**
     * 开启scroll的节点
     */
    scrollTarget: String,
    readonly: Boolean,
    /**
     * 限制输入的正则
     */
    pattern: RegExp,
    /**
     * 内容展示方式
     */
    textAlign: {
      type: String as PropType<InputAlign>,
      default: "right",
    },
    name: String,
  },
});
</script>
