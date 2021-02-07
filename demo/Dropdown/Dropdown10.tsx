import React from "react";
import { Dropdown, DropdownMenu as Menu, Button } from "../../src";
export default () => {
  const menu = (
    <Menu>
      <Menu.Item
        key="123"
        onClick={(e) => {
          console.log(e);
        }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger="contextMenu">
      <Button
        onClick={(e) => e.preventDefault()}
        style={{ marginLeft: "100px" }}
      >
        click here to alert
      </Button>
    </Dropdown>
  );
};
