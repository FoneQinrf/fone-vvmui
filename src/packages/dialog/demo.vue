<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 16:29:30
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>基本用法</h4>
    <CellGroup>
      <Cell @click="alert" title="基本用法" arrow></Cell>
      <Cell @click="alert2" title="无按钮弹窗" arrow></Cell>
      <Cell @click="alert3" title="无标题弹窗" arrow></Cell>
      <Cell @click="alert4" title="带取消按钮弹窗" arrow></Cell>
    </CellGroup>
    <h4>高级用法</h4>
    <CellGroup>
      <Cell @click="alert5" title="自定义标题内容" arrow></Cell>
      <Cell @click="alert6" title="自定义内容" arrow></Cell>
    </CellGroup>
    <h4>组件使用</h4>
    <CellGroup>
      <Cell @click="alert7" title="显示Dialog" arrow></Cell>
    </CellGroup>
    <Dialog v-model:show="show" :showCancel="true" :onClickOverlay="true">
      <p>提示内容</p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, createVNode, ref } from 'vue';
import { Dialog, Input } from '@/vvmui';

export default defineComponent({
  components: { Dialog },
  setup() {
    const show = ref(false);

    const alert = () => {
      const dialog = Dialog.alert({
        msg: '这是提示内容',
        onConfirm: () => {
          dialog.close();
        }
      });
    };

    const alert2 = () => {
      Dialog.alert({
        msg: '这是提示内容',
        onClickOverlay: true,
        showConfirm: false
      });
    };

    const alert3 = () => {
      Dialog.alert({
        msg: '这是提示内容',
        onClickOverlay: true,
        showTitle: false
      });
    };

    const alert4 = () => {
      Dialog.alert({
        msg: '这是提示内容',
        showCancel: true
      });
    };

    const alert5 = () => {
      Dialog.alert({
        title: () => {
          return createVNode('span', {}, '自定义标题');
        },
        msg: '这是提示内容',
        showCancel: true
      });
    };

    const alert6 = () => {
      Dialog.alert({
        msg: () => {
          return createVNode(Input, {
            textAlign: 'center'
          });
        },
        showCancel: true
      });
    };

    const alert7 = () => {
      show.value = true;
    };

    return { alert, alert2, alert3, alert4, alert5, alert6, alert7, show };
  }
});
</script>
