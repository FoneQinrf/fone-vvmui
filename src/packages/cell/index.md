<!--
 * @Author: Fone`峰
 * @Date: 2021-04-08 15:59:25
 * @LastEditors: Fone`峰
 * @LastEditTime: 2021-05-14 16:57:24
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
# Cell 单元格
---

<Card> 

### 引入
``` js
import { createApp } from 'vue';
import { Cell } from 'vvmui';
import { CellGroup } from 'vvmui';

const app = createApp();
app.use(Cell);
app.use(CellGroup);
```

</Card> 

## 代码演示

<Card> 

### 基本用法
``` html
<CellGroup>
  <Cell title='标题' value='副标题'></Cell>
  <Cell title='标题' value='副标题' content='详细内容'></Cell>
</CellGroup>
```

</Card>
<br>
<Card> 

### 右边展示箭头
通过`arrow-icon`属性也可自定义展示的图标
``` html
<CellGroup>
  <Cell arrow title='标题1'></Cell>
  <Cell arrow title='标题2' arrow-icon='iconashbin'></Cell>
</CellGroup>
```

</Card>
<br>
<Card> 

### 导航模式
通过传入`to`或`url`可开启导航模式
```html
<CellGroup>
  <Cell to='/' title='标题1'></Cell>
  <Cell url='https://www.baidu.com/' title='标题2'></Cell>
</CellGroup>
```

</Card>
<br>
<Card> 

### slot分发
```html
<CellGroup>
  <Cell arrow>
    <template v-slot:title>
      <Icon name='iconuser' />
      <span>标题</span>
    </template>
  </Cell>
  <Cell title='标题' value='副标题'>
      <template v-slot:default>
        <p>实用</p>
        <p>美观</p>
        <p>帅气</p>
      </template>
  </Cell>
</CellGroup>
```

</Card>

## API
<Card> 

### Cell props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|
| title  | 标题       | String       | - | - 
| value  | 副标题      | String       | - | - |
| content  | 内容      | String    | - | - |
| arrow  | 是否启用右侧箭头       | Boolean  | `true` `false` | false |
| arrow-icon  | 右侧自定义`icon`    | String  | - | iconarrow-right-bold |
| to  |   点击后跳转的目标路由对象，同 vue-router 的 [to 属性](https://router.vuejs.org/zh/api/#to)  | String  | - | - |
| query  |  vue-router跳转需要携带的数据   | Object  | - | - |
| url  | 点击后跳转的地址    | String | - | - |
| replace  | 是否使用replace来跳转    | Boolean  | `true` `false` | false |

</Card>
<br>
<Card> 

### CellGroup props
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------------|------------|------------|------------|

</Card> 
<br>
<Card>

### Cell solt
| 名称 | 说明 |
|------|------------|
| -  | 自定义主体内容 |
| title  | 自定义标题内容 |

</Card> 
<br>
<Card>

### Cell Events
| 事件名 | 说明 | 回调参数 |
|------|------------|------------|
| click | 点击`Cell`触发 |  传入的`query`数据 |

</Card> 
<br>
<Card>

### 更新日志
| 版本 |类型|内容|
|-------------|-|-|

</Card> 