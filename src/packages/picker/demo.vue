<!--
 * @Author: Fone`峰
 * @Date: 2021-04-02 15:22:58
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-07 11:11:23
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="demo-padding">
    <h4>使用方式</h4>
    <Picker :columns="columns" />
    <h4>自定义高度</h4>
    <Picker :height="30" :columns="columns" />
    <h4>自定义选中项</h4>
    <Picker :index="3" :columns="columns" />
    <h4>级联选择</h4>
    <Form>
      <FormItem label="请选择">
        <PickerGroup :columns="data" />
      </FormItem>
    </Form>
    <h4>定义选中值</h4>
    <Form>
      <FormItem label="请选择">
        <PickerGroup v-model="value" :columns="data" />
      </FormItem>
    </Form>
    <h4>禁用</h4>
    <Form>
      <FormItem label="请选择">
        <PickerGroup disabled v-model="value" :columns="data" />
      </FormItem>
    </Form>
    <h4>API调用</h4>
    <CellGroup>
      <Cell @click="show" title="调起" arrow></Cell>
    </CellGroup>
    <template v-if="false">
      <h4>测试异步行为</h4>
      <Form>
        <FormItem label="请选择">
          <PickerGroup v-model="value1" :columns="data1" />
        </FormItem>
      </Form>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { Toast, PickerGroup } from '@/vvmui';

export default defineComponent({
  setup() {
    const columns = ref([
      { label: '选项一', value: 1 },
      { label: '选项二', value: 2 },
      { label: '选项三', value: 3 },
      { label: '选项四', value: 4 },
      { label: '选项五', value: 5 },
      { label: '选项六', value: 6 },
      { label: '选项七', value: 7 },
      { label: '选项八', value: 8 },
      { label: '选项九', value: 9 },
      { label: '选项十', value: 10 }
    ]);

    const value = ref([1, 1, 1]);

    const data = ref([
      {
        value: 'jiangsu',
        label: '浙江',
        children: [
          {
            value: 'nanjing',
            label: '杭州',
            children: [
              {
                value: 'fuzimiao',
                label: '西湖'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '宁波',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '老庙'
              },
              {
                value: 'shizilin',
                label: '老街'
              }
            ]
          }
        ]
      },
      {
        value: 'jiangsu',
        label: '江苏',
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'fuzimiao',
                label: '夫子庙'
              }
            ]
          },
          {
            value: 'suzhou',
            label: '苏州',
            children: [
              {
                value: 'zhuozhengyuan',
                label: '拙政园'
              },
              {
                value: 'shizilin',
                label: '狮子林'
              }
            ]
          }
        ]
      }
    ]);

    const show = () => {
      PickerGroup.show({
        columns: data.value,
        onConfirm: (index: any, opts: any) => {
          Toast.info(`选中下标：${index}`);
          console.log('下标', index);
          console.log('选中数据', opts);
        }
      });
    };

    const value1: any = ref([]);
    const data1:any = ref([]);

    onMounted(() => {
      setTimeout(() => {
        value1.value = [1, 1, 1];
      }, 2000);
      setTimeout(()=>{
        data1.value = data.value;
      },3000)
    });

    return { columns, data, value, show, value1, data1 };
  }
});
</script>

<style>
.demo-padding .vvm-picker {
  background: #fff;
}
</style>
