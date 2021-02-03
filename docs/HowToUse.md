# Livod-ui

## 介绍

Livod-ui基于React-overlays，致力于提供最轻量级的UI框架，且提供最大程度与Ant-design兼容的API。

### 导入

方式一： 将源代码拉取至本地，使用 npm i 安装相关依赖，运行 npm run build。根目录下生成 esm 文件，即可使用(需导入 react-overlays 包)。

方式二： npm（后续）

#### DEMO 运行

安装好依赖，使用 npm run dev，自行修改 index.tsx 测试组件

（后续预置对应场景的 DEMO）

## 文档

### 整体参考

https://ant-design.gitee.io/components/overview-cn/

### 进度

| 组件名 | Antd官方案例数 | 已完成案例数 | 完成 |
| :----: | :------------: | :----------: | :--: |
| Modal  |       13       |      10      |  👌   |
| Button |       9        |      1       |  ✍️   |

### 细节区别（只有已完成的组件会提供细节区别）

#### Modal

#### 未实现案例

- 1列4行
- 1列6行
- 2列6行

__描述__

1列4行案例：更新状态无需调用update方法，**可以使用state进行状态变更**，代码可读性更强且性能更好。

1列6行案例：绝大多数情况用不到context，如需使用应优先考虑代码设计。

2列6行案例：要引入react-draggable库且应用场景较少，可通过Modal组件进行二次封装设计。

#### API区别

|   参数   | 说明                                                         |       类型        |  默认值   |
| :------: | :----------------------------------------------------------- | :---------------: | :-------: |
| **icon** | Livod-ui内部封装了四种组件，可满足绝大部分需求，因此icon属性可以传入字符串("success" \| "error" \| "info" \| "warning")或是一个ReactNode | string\|ReactNode | "success" |

