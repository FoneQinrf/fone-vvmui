<!--
 * @Author: Fone`峰
 * @Date: 2021-04-12 15:20:51
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-12 15:33:15
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
    <form class="vvm-form">
        <slot />
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Form",
  setup() {},
});
</script>
