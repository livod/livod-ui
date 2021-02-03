import ReactDOM from "react-dom";
import React from "react";
import { Dropdown, Menu } from "../src";
import "../src/style/index.less";
class App extends React.Component {
  menu = (
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
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Dropdown overlay={this.menu}>
        <a onClick={(e) => e.preventDefault()}>Hover me</a>
      </Dropdown>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
