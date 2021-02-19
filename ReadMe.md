# Livod-ui

## 介绍

Livod-ui 基于 React-overlays，致力于提供最轻量级的 UI 框架，且提供最大程度与 Ant-design 兼容的 API。

### 导入

方式一： 将源代码拉取至本地，使用 npm i 安装相关依赖，运行 npm run build。根目录下生成 esm 文件，即可使用(需导入 react-overlays 包)。

方式二： npm

```js
npm install livod-ui
```

```js
// 我们提供esm从而享受tree shaking的能力
import { Modal } from "livod-ui";
```



### 阅读文档

```js
npm run docs
```

#### DEMO 运行

> 不推荐

```
npm run dev
```

修改demo目录下的index.tsx入口文件即可。

### 进度

|  组件名  | Antd 官方案例数 | 已完成案例数 | 完成 |
| :------: | :-------------: | :----------: | :--: |
|  Modal   |       13        |      10      |  👌  |
| Dropdown |       10        |      4       |  👌  |
| message  |        8        |      6       |  👌  |
|  Button  |        9        |      1       |  ✍️  |
|  Table   |       32        |      1       |  ✍️  |
|  Input   |       15        |      1       |  ✍️  |

### 细节区别（只有已完成的组件会提供细节区别）

### Modal

未实现案例

- 1 列 4 行(手动更新和关闭)
- 1 列 6 行(使用 Hooks 获得上下文)
- 2 列 6 行(自定义渲染对话框)

描述

1 列 4 行案例：更新状态无需调用 update 方法，**可以使用 state 进行状态变更**，代码可读性更强且性能更好。

1 列 6 行案例：绝大多数情况用不到 context，如需使用应优先考虑代码设计。

2 列 6 行案例：要引入 react-draggable 库且应用场景较少，可通过 Modal 组件进行二次封装设计。

#### API 区别

|   参数   | 说明                                                                                            |                          类型                           |  默认值   |
| :------: | :---------------------------------------------------------------------------------------------- | :-----------------------------------------------------: | :-------: |
| **icon** | Livod-ui 内部封装了四种组件，可满足绝大部分需求，因此 icon 属性可以传入字符串或是一个 ReactNode | "success" \| "error" \| "info" \| "warning" \|ReactNode | "success" |

### Dropdown

注意！ Dropdown 组件需配套使用 DropdownMenu 组件而不是 Menu!

你可以选择这样导入

```js
import { Dropdown, DropdownMenu as Menu } from "livod-ui";
```

实现案例

- 1 列 1 行(基本)
- 1 列 3 行(触发方式)
- 2 列 1 行(弹出位置)
- 2 列 5 行(右键菜单)

描述

部分案例可以通过二次封装实现，Dropdown 组件如果要完整实现要进行较多改动，在此精简至基于 React-overlays 库开发可实现的最小功能。

#### API 区别

|     参数      | 说明                                                       | 类型                                                                            | 默认值  |
| :-----------: | :--------------------------------------------------------- | :------------------------------------------------------------------------------ | :-----: |
| **placement** | 与 ant-design 不同，livod-ui 提供了八种可选的 placement 值 | "up"\| "upEnd"\| "down"\| "downEnd"\| "left"\| "leftEnd"\| "right"\| "rightEnd" | "down"  |
|  **trigger**  | 与 ant-design 不同，trigger 属性只需要提供一个字符串       | "contextMenu" \| "click"                                                        | "click" |

### message

未实现案例

- 2 列 3 行(更新消息内容)
- 2 列 4 行(通过 Hooks 获取上下文)

描述

更新消息内容可通过 state 实现相同效果，用户可控，因此不提供此案例实现。

通过 Hooks 获取上下文暂不提供。

#### API 区别

本 API 无任何区别
