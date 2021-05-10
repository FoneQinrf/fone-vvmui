<!--
 * @Author: Fone`峰
 * @Date: 2021-04-04 22:48:46
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 13:28:07
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div :style="style" class="vvm-layout">
    <Nav />
    <div class="doc-main vvm-scrollbar">
      <transition name="vvm-fade">
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </transition>
      <Demo />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Nav from './components/docNav.vue';
import Demo from './components/demo.vue';

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
}
</style>
