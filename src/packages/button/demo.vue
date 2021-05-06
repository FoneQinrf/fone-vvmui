<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:22:58
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-25 11:53:43
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>按钮类型</h4>
    <div class="demo-row">
      <Button>默认按钮</Button>
      <Button type="success">成功按钮</Button>
      <Button type="warning">警告按钮</Button>
    </div>
    <div class="demo-row2">
      <Button type="error">危险按钮</Button>
    </div>
    <h4>字体按钮</h4>
    <div class="demo-row">
      <Button text>默认字体</Button>
      <Button text type="success">成功字体</Button>
      <Button text type="warning">警告字体</Button>
    </div>
    <div class="demo-row2">
      <Button text type="error">危险字体</Button>
    </div>
    <h4>空心按钮</h4>
    <div class="demo-row">
      <Button plain>默认按钮</Button>
      <Button plain type="success">成功按钮</Button>
      <Button plain type="warning">警告按钮</Button>
    </div>
    <div class="demo-row2">
      <Button plain type="error">危险按钮</Button>
    </div>
    <h4>圆角按钮</h4>
    <div class="demo-row">
      <Button plain round>默认按钮</Button>
      <Button plain round type="success">成功按钮</Button>
      <Button plain round type="warning">警告按钮</Button>
    </div>
    <div class="demo-row2">
      <Button round>默认按钮</Button>
      <Button round type="success">成功按钮</Button>
      <Button round type="warning">警告按钮</Button>
    </div>
    <h4>按钮尺寸</h4>
    <div class="demo-row">
      <Button size="large">默认按钮</Button>
    </div>
    <div class="demo-row3">
      <Button round size="normal">默认按钮</Button>
      <Button round size="small">默认按钮</Button>
    </div>
    <h4>禁用按钮</h4>
    <div class="demo-row">
      <Button disabled>默认按钮</Button>
      <Button disabled type="success">成功按钮</Button>
      <Button disabled type="warning">警告按钮</Button>
    </div>
    <div class="demo-row2">
      <Button plain disabled>默认按钮</Button>
      <Button plain disabled type="success">成功按钮</Button>
      <Button plain disabled type="warning">警告按钮</Button>
    </div>
    <h4>loading状态</h4>
    <div class="demo-row">
      <Button loading>默认按钮</Button>
      <Button loading type="success">成功按钮</Button>
      <Button loading type="warning">成功按钮</Button>
    </div>
    <div class="demo-row2">
      <Button loading plain>默认按钮</Button>
      <Button loading plain round type="success">成功按钮</Button>
      <Button ref="button" @click="loading" plain type="warning"
        >警告按钮</Button
      >
    </div>
    <h4>配合icon使用</h4>
    <div class="demo-row">
      <Button><Icon color="#fff" name="iconsearch" />默认按钮</Button>
      <Button><Icon color="#fff" name="iconadd" />默认按钮</Button>
    </div>
    <h4>路由导航使用</h4>
    <div class="demo-row">
      <Button to="/">路由跳转</Button>
      <Button url="https://www.baidu.com/">url跳转</Button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const button = ref();

    const loading = () => {
      button.value.startLoading();
      setTimeout(() => {
        button.value.endLoading();
      }, 1000);
    };

    onMounted(() => {
      // console.log(button?.value.startLoding);
    });
    return {
      button,
      loading
    };
  }
});
</script>
