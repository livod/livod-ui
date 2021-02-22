导入

```js static
import { Input } from "livod-ui";
```

基本使用

```jsx
<Input placeholder="Basic usage" />
```

error Input

```jsx
<Input hasError={true} placeholder="error Input" />
```

TextArea

```jsx
import React, { useState } from "react";
import { Input } from "../../index.ts";

const { TextArea } = Input;
const [val, setVal] = useState("");
const onChange = (e) => {
  setVal(e.target.value);
  console.log(val);
};

<TextArea rows={4} value={val} onChange={onChange}></TextArea>;
```
