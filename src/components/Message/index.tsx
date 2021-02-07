import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Modal } from "react-overlays";
import SwitchIcon from "./SwitchIcon";
import "./style/index.less";

export type MessageType = "info" | "error" | "warning" | "success";

export type Message<T extends string> = {
  [p in T]: (msg: string, timeout?: number) => void;
};

// 包裹所有的message
let container: any = null;

// 暴露出去的Message对象
let message: Message<MessageType> = {} as Message<MessageType>;
let messageTypeArr: MessageType[] = ["info", "error", "warning", "success"];

const OriginMessage = ({ timeout, tobeRemovedNode, type, msg }) => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      (container as Element).removeChild(tobeRemovedNode);
      if ((container as Element).childNodes.length === 0) {
        container.parentNode.removeChild(container);
        container = null;
      }
    }, timeout);
  }, []);
  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      aria-labelledby="modal-label"
      container={container}
      autoFocus={false}
      className="livod-message"
    >
      <div>
        <span className="livod-message-icon">{SwitchIcon(type)}</span>
        <span>{msg}</span>
      </div>
    </Modal>
  );
};

const showMessage = (type, msg = "", timeout = 3) => {
  if (!container) {
    container = document.createElement("div");
    container.className = "livod-message-container";
    container.style.overflow = "visible";
    document.body.append(container);
  }
  const tobeRenderedNode = document.createElement("div");
  container.append(tobeRenderedNode);
  ReactDOM.render(
    <OriginMessage
      timeout={timeout * 1000}
      type={type}
      msg={msg}
      tobeRemovedNode={tobeRenderedNode}
    ></OriginMessage>,
    tobeRenderedNode
  );
};

messageTypeArr.forEach((v) => {
  message[v] = showMessage.bind(null, v);
});

export default message;
