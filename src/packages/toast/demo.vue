<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-10 10:17:38
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>使用方式</h4>
    <CellGroup>
      <Cell @click="info" title="info 提示" arrow></Cell>
      <Cell @click="success" title="success 成功提示" arrow></Cell>
      <Cell @click="error" title="error 错误提示" arrow></Cell>
      <Cell @click="warning" title="warning 警告提示" arrow></Cell>
      <Cell @click="loading" title="loading 加载" arrow></Cell>
    </CellGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Toast } from '@/vvmui';

export default defineComponent({
  setup() {
    const info = () => {
      Toast.info('消息', {
        onClose: () => {
          console.log('关闭');
        }
      });
    };

    const success = () => {
      Toast.success();
    };

    const error = () => {
      Toast.error();
    };

    const warning = () => {
      Toast.warning();
    };

    const loading = () => {
      Toast.loading();
      setTimeout(() => {
        Toast.close();
      }, 2000);
    };

    return { info, success, error, warning, loading };
  }
});
</script>
