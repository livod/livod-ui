导入

```js static
import { Tooltip } from "livod-ui";
```

基本使用

```jsx
<Tooltip title="I’m placed to the bottom">
  <a>hover me</a>
</Tooltip>
```

四个方位

```jsx padded
<>
  <Tooltip placement="left" title="I’m placed to the left">
    <a>hover left</a>
  </Tooltip>
  <Tooltip placement="top" title="I’m placed to the top">
    <a>hover top</a>
  </Tooltip>
  <Tooltip placement="right" title="I’m placed to the right">
    <a>hover right</a>
  </Tooltip>
  <Tooltip placement="bottom" title="I’m placed to the bottom">
    <a>hover bottom</a>
  </Tooltip>
</>
```

自定义 tooltip 样式

```jsx
<Tooltip
  tooltipStyle={{ fontSize: "12px", color: "lightgreen" }}
  title="自定义样式"
>
  <a>12px red</a>
</Tooltip>
```
