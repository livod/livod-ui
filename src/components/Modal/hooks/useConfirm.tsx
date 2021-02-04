import React, { ReactNode, useState } from "react";
import ReactDOM from "react-dom";
import { OriginLivodModal } from "../index";

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
  // 选择icon组件
  const switchIcon = (Icon: ReactNode | string) => {
    if (typeof Icon !== "string") {
      return (
        <span
          role="img"
          aria-label="exclamation-circle"
          className="anticon-exclamation-circle"
        >
          {Icon}
        </span>
      );
    } else {
      switch (Icon) {
        case "info":
          return (
            <span
              role="img"
              aria-label="exclamation-circle"
              className="info anticon-exclamation-circle"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="info-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z"></path>
              </svg>
            </span>
          );
        case "warning":
          return (
            <span
              role="img"
              aria-label="exclamation-circle"
              className="warning anticon-exclamation-circle"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="exclamation-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
                <path d="M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z"></path>
              </svg>
            </span>
          );
        case "error":
          return (
            <span
              role="img"
              aria-label="exclamation-circle"
              className="error anticon-exclamation-circle"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="close-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M685.4 354.8c0-4.4-3.6-8-8-8l-66 .3L512 465.6l-99.3-118.4-66.1-.3c-4.4 0-8 3.5-8 8 0 1.9.7 3.7 1.9 5.2l130.1 155L340.5 670a8.32 8.32 0 00-1.9 5.2c0 4.4 3.6 8 8 8l66.1-.3L512 564.4l99.3 118.4 66 .3c4.4 0 8-3.5 8-8 0-1.9-.7-3.7-1.9-5.2L553.5 515l130.1-155c1.2-1.4 1.8-3.3 1.8-5.2z"></path>
                <path d="M512 65C264.6 65 64 265.6 64 513s200.6 448 448 448 448-200.6 448-448S759.4 65 512 65zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>
            </span>
          );
        default:
          return (
            <span
              role="img"
              aria-label="exclamation-circle"
              className="success anticon-exclamation-circle"
            >
              <svg
                viewBox="64 64 896 896"
                focusable="false"
                data-icon="check-circle"
                width="1em"
                height="1em"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>
            </span>
          );
      }
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
      >
        {switchIcon(icon)}
        {title && <span className="ant-modal-confirm-title">{title}</span>}
        {content && <div className="ant-modal-confirm-content">{content}</div>}
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
      Confirm(
        Object.assign(options, {
          icon,
        })
      );
    })
);
export { specConfirm };
export default (props) => {
  const node = document.createElement("div");
  document.body.append(node);
  ReactDOM.render(<Confirm {...props}></Confirm>, node);
};
