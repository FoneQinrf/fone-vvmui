<!--
 * @Author: Fone`峰
 * @Date: 2021-06-10 15:06:03
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-17 14:56:24
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>用法</h4>
    <CellGroup>
      <Cell @click="show" title="调起" arrow></Cell>
    </CellGroup>
    <h4>type类型</h4>
    <CellGroup>
      <Cell @click="show1('default')" title="default" arrow></Cell>
      <Cell @click="show1('success')" title="success" arrow></Cell>
      <Cell @click="show1('warning')" title="warning" arrow></Cell>
      <Cell @click="show1('error')" title="error" arrow></Cell>
    </CellGroup>
    <h4>自定义延迟关闭时间</h4>
    <CellGroup>
      <Cell @click="show2" title="调起" arrow></Cell>
    </CellGroup>
    <h4>关闭回调</h4>
    <CellGroup>
      <Cell @click="show3" title="调起" arrow></Cell>
    </CellGroup>
    <template v-if="false">
      <h4>测试手动关闭</h4>
      <CellGroup>
        <Cell @click="show4" title="调起" arrow></Cell>
      </CellGroup>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Notify, Toast } from '@/vvmui';

export default defineComponent({
  setup() {
    const show = () => {
      Notify('消息');
    };

    const show1 = (type: string) => {
      Notify('消息', { type });
    };

    const show2 = () => {
      Notify('消息', { duration: 3000 });
    };

    const show3 = () => {
      Notify('消息', {
        onClose: () => {
          Toast.info('Notify已关闭');
        }
      });
    };

    const show4 = () => {
      const app: any = Notify('消息', { duration: 3000 });
      setTimeout(() => {
        app.cancel();
      }, 1000);
    };

    return { show, show1, show2, show3, show4 };
  }
});
</script>
