导入

```jsx static
import { Dropdown } from "livod-ui";
```

基本使用

```jsx
const Menu = (
  <Dropdown.Menu>
    <Dropdown.Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Dropdown.Menu.Item>
    <Dropdown.Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Dropdown.Menu.Item>
    <Dropdown.Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Dropdown.Menu.Item>
    <Dropdown.Menu.Item danger>a danger item</Dropdown.Menu.Item>
  </Dropdown.Menu>
);

<Dropdown overlay={Menu}>
  <a
    className="livod-dropdown-link"
    href="#Dropdown"
    onClick={(e) => e.preventDefault()}
  >
    Click me
  </a>
</Dropdown>;
```

弹出位置

```jsx
import { Button } from "../../index.ts";

const Menu = (
  <Dropdown.Menu>
    <Dropdown.Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Dropdown.Menu.Item>
  </Dropdown.Menu>
);

const placementArr = [
  "up",
  "upEnd",
  "down",
  "downEnd",
  "left",
  "leftEnd",
  "right",
  "rightEnd",
];

<div>
  {placementArr.map((placement) => {
    return (
      <Dropdown key={placement} overlay={Menu} placement={placement}>
        <Button
          onClick={(e) => e.preventDefault()}
          style={{ marginLeft: "100px" }}
        >
          {placement}
        </Button>
      </Dropdown>
    );
  })}
</div>;
```

右键菜单

```jsx
import { Button } from "../../index.ts";

const Menu = (
  <Dropdown.Menu>
    <Dropdown.Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Dropdown.Menu.Item>
  </Dropdown.Menu>
);
<Dropdown overlay={Menu} trigger="contextMenu">
  <Button onClick={(e) => e.preventDefault()} style={{ marginLeft: "100px" }}>
    click here to alert
  </Button>
</Dropdown>;
```
