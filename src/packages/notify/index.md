<!--
 * @Author: Fone`峰
 * @Date: 2021-06-10 15:06:11
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-06-17 14:33:44
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Notify 消息通知
---

<Card> 

### 引入
```js
import { Notify } from 'vvmui';

Notify('消息');
```

</Card>

## 代码演示
<Card> 

### 使用方式
```js

Notify('消息');

```

</Card>
<br>
<Card> 

### type类型
```js
Notify('消息', { type: 'default' });
Notify('消息', { type: 'success' });
Notify('消息', { type: 'warning' });
Notify('消息', { type: 'error' });
```

</Card>
<br>
<Card> 

### 自定义延迟关闭时间
```js

Notify('消息', { duration: 3000 });

```

</Card>
<br>
<Card> 

### 关闭回调
```js

Notify('消息', {
  onClose: () => {
    Toast.info('Notify已关闭');
  }
});

```

</Card>

## API
<Card> 

| 方法 | 说明 | 参数 | 返回值 | 
|------|------------|------------|------------|
| Notify | 提示   | `msg` `options`   | `Notify`实例 |

</Card>
<br>
<br>
<Card> 

### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| type  |  `Notify`类型  | String  | `default` `success` `warning` `error` | default |
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