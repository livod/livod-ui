导入

```js static
import { message } from "livod-ui";
```

普通提示

```jsx
import { message, Button } from "../../index.ts";
const info = () => {
  message.info("This is a normal message");
};
<Button type="primary" onClick={info}>
  Display normal message
</Button>;
```

其它提示类型

```jsx padded
import { message, Button } from "../../index.ts";

const success = () => {
  message.success("This is a success message");
};

const error = () => {
  message.error("This is an error message");
};

const warning = () => {
  message.warning("This is a warning message");
};

<>
  <Button onClick={success}>Success</Button>
  <Button onClick={error}>Error</Button>
  <Button onClick={warning}>Warning</Button>
</>;
```

修改延时

```jsx
import { message, Button } from "../../index.ts";
const success = () => {
  message.success(
    "This is a prompt message for success, and it will disappear in 10 seconds",
    10
  );
};

<Button onClick={success}>Customized display duration</Button>;
```

加载中

```jsx
import { message, Button } from "../../index.ts";

const success = () => {
  const hide = message.loading("Action in progress..", 0);
  // Dismiss manually and asynchronously
  console.log(hide);
  setTimeout(hide, 2500);
};

<Button onClick={success}>Display a loading indicator</Button>;
```

Promise 接口

```jsx
import { message, Button } from "../../index.ts";

const success = () => {
  message
    .loading("Action in progress..", 2.5)
    .then(() => message.success("Loading finished", 2.5))
    .then(() => message.info("Loading finished is finished", 2.5));
};

<Button onClick={success}>Display sequential messages</Button>;
```

自定义样式

```jsx
import { message, Button } from "../../index.ts";

const success = () => {
  message.success({
    content: "This is a prompt message with custom className and style",
    className: "custom-class",
    style: {
      marginTop: "20vh",
    },
  });
};

<Button onClick={success}>Customized style</Button>;
```
