<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:41
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-12 13:31:38
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>使用方式</h4>
    <Form>
      <FormItem label="请选择">
        <ActionSheet :data="data1" />
      </FormItem>
    </Form>
    <h4>禁用</h4>
    <Form>
      <FormItem label="请选择">
        <ActionSheet disabled is-cancel :data="data2" />
      </FormItem>
      <FormItem label="请选择">
        <ActionSheet v-model="value" disabled :data="data1" />
      </FormItem>
    </Form>
    <h4>展示取消按钮</h4>
    <Form>
      <FormItem label="请选择">
        <ActionSheet is-cancel :data="data1" />
      </FormItem>
    </Form>
    <h4>禁用选项</h4>
    <Form>
      <FormItem label="请选择">
        <ActionSheet is-cancel :data="data2" />
      </FormItem>
    </Form>
    <h4>Api形式调用</h4>
    <CellGroup>
      <Cell @click="show" title="调起" arrow></Cell>
    </CellGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ActionSheet, Toast } from '@/vvmui';

export default defineComponent({
  setup() {
    const data1 = ref([
      {
        label: '选择一',
        value: 0
      },
      {
        label: '选择二',
        value: 1
      },
      {
        label: '选择三',
        value: 2
      }
    ]);

    const data2 = ref([
      {
        label: '选择一',
        value: 0
      },
      {
        label: '选择二',
        value: 1,
        disabled: true
      },
      {
        label: '选择三',
        value: 2
      }
    ]);

    const show = () => {
      ActionSheet.show({
        data: data1.value,
        onConfirm: (val: any, opts: any) => {
          Toast.info(opts.label);
        }
      });
    };

    const value = ref(1);

    return { show, data1, data2, value };
  }
});
</script>
