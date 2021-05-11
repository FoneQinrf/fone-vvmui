<!--
 * @Author: Fone`峰
 * @Date: 2021-04-08 15:59:32
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-11 13:37:24
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<template>
  <div class="not-padding">
    <h4>基本用法</h4>
    <CellGroup>
      <Cell title="标题" value="副标题"></Cell>
      <Cell title="标题" value="副标题" content="详细内容"></Cell>
    </CellGroup>
    <h4>右边展示箭头</h4>
    <CellGroup>
      <Cell arrow title="标题1"></Cell>
      <Cell arrow title="标题2" arrow-icon="iconashbin"></Cell>
    </CellGroup>
    <h4>导航模式</h4>
    <CellGroup>
      <Cell to="/" title="标题1"></Cell>
      <Cell url="https://www.baidu.com/" title="标题2"></Cell>
    </CellGroup>
    <h4>slot使用</h4>
    <CellGroup>
      <Cell arrow>
        <template v-slot:title>
          <Icon name="iconuser" />
          <span>标题</span>
        </template>
      </Cell>
      <Cell title="标题" value="副标题">
        <template v-slot:default>
          <p>实用</p>
          <p>美观</p>
          <p>帅气</p>
        </template>
      </Cell>
    </CellGroup>
  </div>
</template>
