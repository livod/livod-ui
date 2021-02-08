import React from "react";
import { Dropdown, DropdownMenu as Menu, Button } from "../../src";
export default () => {
  const menu = (
    <Menu>
      <Menu.Item>
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
  return (
    <div style={{ marginTop: "100px" }}>
      {placementArr.map((placement) => {
        return (
          <Dropdown key={placement} overlay={menu} placement={placement as any}>
            <Button
              onClick={(e) => e.preventDefault()}
              style={{ marginLeft: "100px" }}
            >
              {placement}
            </Button>
          </Dropdown>
        );
      })}
    </div>
  );
};
