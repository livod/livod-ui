import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-overlays";
import SwitchIcon from "./SwitchIcon";
import "./style/index.less";

export type MessageType = "info" | "error" | "warning" | "success" | "loading";

export interface MessageReturnType extends PromiseLike<any> {
  (): void;
}

export type Message<T extends string> = {
  [p in T]: (
    msg: string | object,
    timeout?: number,
    key?: any
  ) => MessageReturnType;
};
// 包裹所有的message
let container: any = null;

// 暴露出去的Message对象
const message: Message<MessageType> = {} as Message<MessageType>;
const messageTypeArr: MessageType[] = ["info", "error", "warning", "success"];

const OriginMessage: React.FC<any> = React.forwardRef(
  ({ timeout, tobeRemovedNode, type, msg, className, style }, ref) => {
    const [show, setShow] = useState(true);
    /* 原生DOM操作实现清除节点 */
    const clearNode = () => {
      (container as Element).removeChild(tobeRemovedNode);
      if ((container as Element).childNodes.length === 0) {
        container.parentNode.removeChild(container);
        container = null;
      }
    };
    React.useImperativeHandle(
      ref,
      () => ({
        destroy() {
          setShow(false);
          clearNode();
        },
      }),
      [setShow, clearNode]
    );
    useEffect(() => {
      const id = setTimeout(
        () => {
          setShow(false);
          clearNode();
        },
        timeout ? timeout : 999999
      );
      return () => {
        if (!id) return;
        clearTimeout(id);
        clearNode();
      };
    }, []);
    return (
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="modal-label"
        container={container}
        autoFocus={false}
        className={"livod-message " + className}
        style={style}
      >
        <div>
          <span className="livod-message-icon">{SwitchIcon(type)}</span>
          <span>{msg}</span>
        </div>
      </Modal>
    );
  }
);

const showMessage = (type, msg = "", timeout = 3) => {
  // 对第二个参数进行纠正
  let config = null;
  if (Object.prototype.toString.call(msg) === "[object Object]") {
    config = msg;
    msg = config.content;
  }
  if (!container) {
    container = document.createElement("div");
    container.className = "livod-message-container";
    document.body.append(container);
  }
  const tobeRenderedNode = document.createElement("div");
  container.append(tobeRenderedNode);
  ReactDOM.render(
    <OriginMessage
      timeout={timeout * 1000}
      type={type}
      msg={msg}
      style={config && config.style}
      className={config && config.className}
      tobeRemovedNode={tobeRenderedNode}
    ></OriginMessage>,
    tobeRenderedNode
  );
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(undefined);
      }, timeout * 1000);
    } catch (error) {
      reject(error);
    }
  });
};

let loadingHelper = new Map();
const LoadingMessage = ({
  msg = "",
  timeout = 3,
  tobeRemovedNode,
  _key,
  style,
  className,
}) => {
  const ref = useRef(null);
  useEffect(() => {
    loadingHelper.set(_key, ref);
  }, [ref]);
  return (
    <OriginMessage
      timeout={timeout * 1000}
      type="loading"
      msg={msg}
      tobeRemovedNode={tobeRemovedNode}
      ref={ref}
      style={style}
      className={className}
    ></OriginMessage>
  );
};
const showLoadingMessage = (msg = "", timeout, key) => {
  // 对第一个参数进行纠正
  let config = null;
  if (Object.prototype.toString.call(msg) === "[object Object]") {
    config = msg;
    msg = config.content;
  }

  if (!container) {
    container = document.createElement("div");
    container.className = "livod-message-container";
    container.style.overflow = "visible";
    document.body.append(container);
  }
  const tobeRenderedNode = document.createElement("div");
  container.append(tobeRenderedNode);
  ReactDOM.render(
    <LoadingMessage
      timeout={timeout * 1000}
      msg={msg}
      tobeRemovedNode={tobeRenderedNode}
      _key={key}
      style={config && config.style}
      className={config && config.className}
    ></LoadingMessage>,
    tobeRenderedNode
  );
};
// loading组件判断两种情况，如果传入的timeout为空或者为0，则返回一个可取消的函数。
// 其它情况则返回一个promise对象。
message.loading = ((msg, timeout = 0, key = {}) => {
  showLoadingMessage(msg, timeout, key);
  if (timeout !== 0) {
    return new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(undefined);
          if (loadingHelper.has(key)) {
            loadingHelper.get(key).current.destroy();
          }
          loadingHelper.delete(key);
        }, timeout * 1000);
      } catch (error) {
        reject(error);
      }
    });
  }

  return () => {
    if (loadingHelper.has(key)) {
      loadingHelper.get(key).current.destroy();
    }
    loadingHelper.delete(key);
  };
}) as (msg: string, timeout?: number, key?: any) => MessageReturnType;

messageTypeArr.forEach((v) => {
  message[v] = showMessage.bind(null, v);
});

export default message;
