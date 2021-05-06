<!--
 * @Author: Fone`峰
 * @Date: 2021-04-25 14:45:56
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-04-26 15:02:36
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <div class="scroll-wrp">
      <ScrollCard>
        <h4 v-for="item in 200">尝试滑动查看效果</h4>
      </ScrollCard>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.scroll-wrp {
  height: 400px;
}
</style>
