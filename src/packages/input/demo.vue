<!--
 * @Author: Fone`峰
 * @Date: 2021-04-08 15:59:32
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-16 13:24:05
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>基本用法</h4>
    <Form>
      <FormItem label="用户名">
        <Input placeholder="请输入用户名" />
      </FormItem>
      <FormItem label="密码">
        <Input placeholder="请输入密码" type="password" />
      </FormItem>
    </Form>
    <h4>使用icon</h4>
    <Form>
      <FormItem>
        <Input text-align="left" placeholder="请输入用户名" icon="iconuser" />
      </FormItem>
      <FormItem>
        <Input text-align="left" placeholder="请输入密码" icon="iconicon-mima" type="password" />
      </FormItem>
    </Form>
    <h4>使用单位</h4>
    <Form>
      <FormItem label="金额">
        <Input placeholder="请输入内容" unity="元" />
      </FormItem>
    </Form>
    <h4>禁用</h4>
    <Form>
      <FormItem label="用户名">
        <Input placeholder="请输入内容" disabled />
      </FormItem>
      <FormItem label="姓名">
        <Input v-model="value" disabled placeholder="请输入内容" />
      </FormItem>
    </Form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    return { value: ref("vvmui") };
  },
});
</script>
