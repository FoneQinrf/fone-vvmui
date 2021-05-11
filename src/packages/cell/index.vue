<!--
 * @Author: Fone`峰
 * @Date: 2021-04-08 16:13:09
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-08 10:25:20
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div @click="click" class="vvm-cell">
    <div :class="clasess">
      <div class="vvm-cell--title vvm-ellipsis">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="vvm-cell--value">
        <span>{{ value }}</span>
        <Icon v-if="arrow || to || url" :name="arrowIcon" />
      </div>
    </div>
    <div class="vvm-cell--content" v-if="status">
      <slot>
        {{ content }}
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Icon from '../icon/index.vue';

export default defineComponent({
  name: 'Cell',
  components: { Icon },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const status = computed(() => {
      return props.content || slots.default;
    });

    const clasess = computed(() => {
      return {
        [`vvm-cell--top`]: true,
        [`vvm-cell--line`]: status.value
      };
    });

    const router = useRouter();
    const click = () => {
      //router
      if (props.to && router) {
        console.log(props.to);
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

      emit('click', props.query);
    };

    return { clasess, click, status };
  },
  props: {
    /**
     * 标题 副标题 内容
     */
    title: String,
    value: String,
    content: String,
    /**
     * 右侧箭头
     */
    arrow: Boolean,
    arrowIcon: {
      type: String,
      default: 'iconarrow-right-bold'
    },
    /**
     * 导航 路由
     */
    to: String,
    url: String,
    replace: Boolean,
    query: {
      type: Object
    }
  }
});
</script>
