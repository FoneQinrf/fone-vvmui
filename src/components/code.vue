<!--
 * @Author: Fone`峰
 * @Date: 2021-05-06 11:40:55
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-06 14:53:21
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="code-wrp">
    <template v-if="language === 'javascript'">
      <div v-highlight="'js'" v-html="code"></div>
    </template>
    <template v-else>
      <pre>
<code v-highlight :class="['hljs',language]">
{{code}}
</code>
</pre>
    </template>
    <span v-copy="content" class="copy-code">复制代码</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { highlightBlock } from 'highlight.js';
import 'highlight.js/styles/solarized-light.css';

export default defineComponent({
  setup(props) {
    const code = computed(() => {
      if (props.language === 'javascript') {
        return `<pre><code class="hljs ${props.language}">${props.content}</code></pre>`;
      }
      return props.content;
    });
    return { code };
  },
  props: {
    content: String,
    language: {
      type: String,
      default: 'javascript'
    }
  },
  directives: {
    highlight: {
      mounted(el, binding) {
        if (binding.value === 'js') {
          const highlight = el.querySelectorAll('pre code');
          highlightBlock(highlight[0]);
        } else {
          highlightBlock(el);
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.code-wrp {
  position: relative;
}
.copy-code {
  position: absolute;
  top: 3px;
  right: 5px;
  font-size: 12px;
  cursor: pointer;
  color: $default-color;
}
</style>

<style>
.code-wrp .hljs {
  position: relative;
  padding: 2px 14px 14px 14px;
   background: #fdf6e3;
}
</style>
