可以参考业内使用较多的 UI 库，比如 react-bootstrap，antd 和 material-ui，学习 UI 组件的实现原理。

根据我们的业务需求，实现一套自己的 UI 库。

我们的目标是，可以真正的按需引入，生成 JS 代码体积足够小，可以直接在 HTML 中以单独链接的方式引入。

- https://react-bootstrap.github.io/
- https://react-bootstrap.github.io/
- https://material-ui.com/zh/
- https://ant.design/


https://www.npmjs.com/package/rc-notification
http://react-component.github.io/notification/examples/simple.html


## 设计思路


## 起步

目前我们在三个课堂使用了这些 antd 组件，需要提供替代控件，尽量保持接口兼容，在示例页面中展示。

``` js
export { default as Badge } from 'antd/lib/badge';
export { default as Pagination } from 'antd/lib/pagination';
export { default as Table } from 'antd/lib/table';
export { default as Modal } from 'antd/lib/modal';
export { default as Input } from 'antd/lib/input';
export { default as Select } from 'antd/lib/select';
export { default as Popconfirm } from 'antd/lib/popconfirm';
export { default as Popover } from 'antd/lib/popover';
export { default as Form } from 'antd/lib/form';
export { default as Menu } from 'antd/lib/menu';
export { default as Tooltip } from 'antd/lib/tooltip';
export { default as Cascader } from 'antd/lib/cascader';
export { default as Carousel } from 'antd/lib/carousel';
export { default as message } from 'antd/lib/message';
export { default as Button } from 'antd/lib/button';
export { default as DatePicker } from 'antd/lib/date-picker';
export { default as Checkbox } from 'antd/lib/checkbox';
export { default as Dropdown } from 'antd/lib/dropdown';
export { default as Upload } from 'antd/lib/upload';
export { default as Progress } from 'antd/lib/progress';
export { default as notification } from 'antd/lib/notification';
export { default as Spin } from 'antd/lib/spin';
export { default as Tabs } from 'antd/lib/tabs';
export { default as Row } from 'antd/lib/row';
export { default as Col } from 'antd/lib/col';
export { default as TimePicker } from 'antd/lib/time-picker';
export { default as Radio } from 'antd/lib/radio';
export { default as Breadcrumb } from 'antd/lib/breadcrumb';
export { default as Switch } from 'antd/lib/switch';
export { default as Tree } from 'antd/lib/tree';
```
