<!--
 * @Author: Fone`峰
 * @Date: 2021-04-09 11:20:47
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 17:05:56
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Toast 吐司
---

<Card> 

### 引入
```js
import { Toast } from 'vvmui';

Toast.info('info');
```
</Card>

## 代码演示

<Card> 

### 提示类型
内置`info` `success` `error` `warning` `loading` `close`五个API提示供使用
```js
Toast.info('info');
Toast.success('success');
Toast.error('error');
Toast.warning('warning');
Toast.loading('loading');
```
</Card>
<br>
<Card> 

### 自定义图标
```js
Toast.success({
  msg: 'success',
  icon: 'iconroundcheckfill'
});
```
</Card>
<br>
<Card> 

### 关闭回调
```js
Toast.info('消息', {
  onClose: () => {
    console.log('关闭');
  }
});
```
</Card>

## API
<Card> 

| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| <span>Toast.info</span>| 提示   | `options` `msg`   | - | 
| Toast.success |  成功提示   | `options` `msg`       | - | 
| Toast.error | 错误提示   | `options` `msg`       | - | 
| Toast.warning | 警告提示   | `options` `msg`       | - | 
| Toast.loading | loading   | `options` `msg`       | - | 
| Toast.close | 关闭`Toast`   |   -   | - | 

</Card>
<br>
<Card> 

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| msg | 提示内容  | String  | - | - |
| icon | 自定义图标  | String  | - | - |
| duration | 延迟关闭的时间（ms）  | Number  | - | 1000 |
| className | 自定义类名  | String  | - | - |
| onClose | 关闭时的回调  | Function  | - | - |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card> 