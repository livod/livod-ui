导入

```js static
import { Popover } from "livod-ui";
```

基本使用

```jsx
import React from "react";
import { Popover } from "../../index.ts";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

<Popover content={content} title="hello">
  <a>hover me</a>
</Popover>;
```

四个方位

```jsx padded
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);
<>
  <Popover content={content} placement="left" title="I’m placed to the left">
    <a>hover left</a>
  </Popover>
  <Popover content={content} placement="top" title="I’m placed to the top">
    <a>hover top</a>
  </Popover>
  <Popover content={content} placement="right" title="I’m placed to the right">
    <a>hover right</a>
  </Popover>
  <Popover
    content={content}
    placement="bottom"
    title="I’m placed to the bottom"
  >
    <a>hover bottom</a>
  </Popover>
</>;
```
