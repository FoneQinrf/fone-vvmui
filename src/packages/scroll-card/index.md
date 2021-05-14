<!--
 * @Author: Fone`峰
 * @Date: 2021-04-25 14:46:04
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 16:58:09
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# ScrollCard 滑动视图
---

<Card>

### 引入
```js
import { createApp } from 'vue';
import { ScrollCard } from 'vvmui';

const app = createApp();
app.use(ScrollCard);
```

</Card>

## 代码演示

<Card>

### 基本使用
```html
<ScrollCard>
    <h4 v-for='item in 200'>尝试滑动查看效果</h4>
</ScrollCard>
```

</Card>

## API

<Card>

### ScrollCard props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| color | 进度条的颜色   | String       | - | #3778E1 |

</Card>
<br>
<Card>

### ScrollCard solt
| 名称 | 说明 |
|------|------------|
| - | 自定义主体内容 |

</Card>
<br>
<Card>

### ScrollCard Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| scroll | 滚动时触发 |  百分比  |

</Card>
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card>