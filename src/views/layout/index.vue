<!--
 * @Author: Fone`峰
 * @Date: 2021-04-04 22:48:46
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 14:29:46
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div :style="style" class="vvm-layout">
    <Nav />
    <div v-copy-code class="doc-main vvm-scrollbar">
      <router-view v-slot="{ Component }">
        <transition name="vvm-fade">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <Demo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, nextTick } from 'vue';
import Nav from './components/docNav.vue';
import Demo from './components/demo.vue';
import { Toast } from '@/vvmui';

export default defineComponent({
  name: 'layout',
  components: { Nav, Demo },
  setup: () => {
    const bodyHeight = document.body.clientHeight;
    const navHeight: any = document.querySelector('.vvm-navbar')?.clientHeight;
    const style = {
      height: `${bodyHeight - navHeight}px`
    };
    return {
      style
    };
  },
  directives: {
    'copy-code': {
      mounted(el) {
        nextTick(() => {
          el.handler = (e: any) => {
            if (e.target.className === 'copy') {
              console.log(e.target.getAttribute('value'));
              const value = e.target.getAttribute('value');
              if (!value) {
                console.log('无复制内容');
                return;
              }
              const textarea: any = document.createElement('textarea');
              // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
              textarea.readOnly = 'readonly';
              textarea.style.position = 'absolute';
              textarea.style.left = '-9999px';
              textarea.value = value;
              document.body.appendChild(textarea);
              textarea.select();
              const result = document.execCommand('Copy');
              if (result) {
                if (el.$callback && typeof el.$callback === 'function') {
                  el.$callback();
                  return;
                }
                // toast();
                Toast.info('复制成功');
                // window.alert('复制成功');
              }
              document.body.removeChild(textarea);
            }
          };
          el.addEventListener('click', el.handler);
        });
      },
      unmounted(el: any) {
        el.removeEventListener('click', el.handler);
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.vvm-layout {
  width: 100%;
  display: flex;
}
.doc-main {
  flex-grow: 1;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding: 30px 415px 30px 30px;
  overflow-y: auto;
}
</style>

<style lang="scss">
.doc-main {
  color: #666;
  background: $B6;
  ul {
    padding-left: 20px;
  }
  li {
    list-style-type: circle;
  }
  blockquote {
    padding: 5px 0 5px 10px;
    margin: 15px 0;
    border-left: 3px solid $default-color;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 16px 0;
    line-height: 1.5;
  }
  hr {
    margin: 1.2em 0;
    border: 0;
    border-bottom: 1px solid $default-color;
  }
  code {
    background-color: rgba(27, 31, 35, 0.05);
    padding: 4px 4px;
    border-radius: 2px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    // border: 1px solid #f2f2f4;
  }

  table td,
  table th {
    border-bottom: 1px solid #f3f7fa;
    padding: 10px 8px;
    color: #5e6d82;
  }

  table thead {
    background-color: #f6f8fa;
  }

  table thead th {
    text-align: left;
  }
  a {
    color: $default-color;
  }
  .hljs {
    position: relative;
    border-radius: 6px;
    padding: 10px;
    background: #fdf6e3;
    .copy {
      position: absolute;
      top: 3px;
      right: 5px;
      font-size: 12px;
      cursor: pointer;
      color: #3778e1;
    }
  }
}
</style>
