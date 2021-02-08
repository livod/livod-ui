import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import { OriginLivodModal } from "./index";
import SwitchIcon from "./SwitchIcon";
export type IconType = "success" | "error" | "info" | "warning";
// confirm props接口
export interface ConfirmOptions {
  title?: string;
  content?: any;
  onOk?: (event: React.MouseEvent) => void | Promise<any>;
  onCancel?: () => void;
  okType?: "primary" | "danger";
  icon?: IconType | ReactNode;
  okButtonProps?: {
    disabled?: boolean;
  };
  cancelButtonProps?: {
    disabled?: boolean;
  };
  okText?: string;
  cancelText?: string;
  node?: HTMLElement;
}

// confirm弹窗
function Confirm(props: ConfirmOptions) {
  const {
    title = "some title",
    content,
    okType,
    okButtonProps,
    cancelButtonProps,
    icon = "success",
    okText,
    cancelText,
  } = props;
  const [show, setShow] = useState(true);

  const handleCancel = () => {
    props.onCancel && props.onCancel();
    setShow(false);
  };
  // 这里有处理promise的情况
  // 细节基于原生DOM，需要优化
  const handleOk = (event: React.MouseEvent) => {
    if (props.onOk) {
      const promise: any = props.onOk(event);
      if (promise instanceof Promise) {
        let loadingEl = document.createElement("span");
        loadingEl.className = "livod-loading";
        event.currentTarget.insertBefore(
          loadingEl,
          event.currentTarget.lastChild
        );
        promise.then(() => {
          setShow(false);
        });
      } else {
        setShow(false);
      }
    } else {
      setShow(false);
    }
  };

  function render() {
    return (
      <OriginLivodModal
        visible={show}
        onCancel={handleCancel}
        onOk={handleOk}
        header={false}
        okType={okType}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
        okText={okText}
        cancelText={cancelText}
        ignoreCancel={true}
      >
        {SwitchIcon(icon)}
        {title && <span className="livod-modal-confirm-title">{title}</span>}
        {content && (
          <div className="livod-modal-confirm-content">{content}</div>
        )}
      </OriginLivodModal>
    );
  }
  return render();
}

// 生成特定组件(info, error, warning, success)
// 本质上是调用Confirm,传入特定icon字段
const iconTypeArr = ["error", "info", "warning", "success"];
export type SpecConfirmType = {
  [p in IconType]: typeof Confirm;
};
const specConfirm: SpecConfirmType = {} as SpecConfirmType;
iconTypeArr.forEach(
  (icon) =>
    (specConfirm[icon] = (options: ConfirmOptions) => {
      const node = document.createElement("div");
      document.body.append(node);
      ReactDOM.render(<Confirm {...options} icon={icon}></Confirm>, node);
    })
);
export { specConfirm };
export default (props) => {
  const node = document.createElement("div");
  document.body.append(node);
  ReactDOM.render(<Confirm {...props}></Confirm>, node);
};
