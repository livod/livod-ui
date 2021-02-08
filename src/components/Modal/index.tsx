import Modal from "react-overlays/Modal";
import React, { ReactNode, useMemo, useCallback } from "react";
import Button from "../Button";
import Confirm, {
  ConfirmOptions,
  specConfirm,
  SpecConfirmType,
} from "./Confirm";

import "./style/index.less";
interface OriginLivodModalProps {
  title?: string;
  visible: boolean;
  onCancel?: () => void;
  onOk?: (event: React.MouseEvent) => void;
  okText?: string;
  cancelText?: string;
  children?: any;
  confirmLoading?: boolean;
  footer?: (() => ReactNode) | ReactNode | ReactNode[];
  header?: boolean;
  okType?: "danger" | "primary";
  okButtonProps?: {
    disabled?: boolean;
  };
  cancelButtonProps?: {
    disabled?: boolean;
  };
  style?: object;
  width?: number;
  height?: number;
  className?: string;
  ignoreCancel?: boolean;
}
/**
 * 使用React-overlays提供的manage接口，管理全局Modal
 */
const manager = new Modal.Manager();
/**
 * destroyAll方法删除页面上所有的模态框
 */
const destroyAll = () => {
  // 暂时将container认定为containers数组的第一个元素，通常情况下是body
  let container = manager.containers[0];
  manager.modals.forEach((v) => {
    container.removeChild(v.dialog);
    container.removeChild(v.backdrop);
  });
  const len = manager.modals.length;
  for (let i = 0; i < len; i++) {
    manager.remove(manager.modals[0]);
  }
};
export const OriginLivodModal: React.FC<OriginLivodModalProps> = (props) => {
  const renderBackdrop = useCallback(
    (props) => <div className="livod-backdrop" {...props} />,
    []
  );
  const {
    children,
    visible,
    onCancel,
    cancelText,
    okText,
    okType,
    onOk,
    confirmLoading,
    footer,
    header,
    cancelButtonProps,
    okButtonProps,
    style,
    width,
    height,
    className,
    ignoreCancel,
  } = props;

  /**
   * 对footer prop的三种形式进行处理
   */
  const footerMemo = useMemo<ReactNode[]>(() => {
    if (typeof footer === "function") {
      return [footer()];
    } else if (typeof footer === "object") {
      if (!Array.isArray(footer)) {
        return [footer];
      } else {
        return footer;
      }
    }
    if (ignoreCancel) {
      return [
        <Button
          disabled={okButtonProps.disabled}
          key="default-confirm"
          type={okType || "primary"}
          onClick={onOk}
          loading={confirmLoading}
        >
          {"知道了"}
        </Button>,
      ];
    }
    return [
      <Button
        disabled={cancelButtonProps.disabled}
        key="default-cancel"
        onClick={onCancel}
      >
        {cancelText}
      </Button>,
      <Button
        disabled={okButtonProps.disabled}
        key="default-confirm"
        type={okType || "primary"}
        onClick={onOk}
        loading={confirmLoading}
      >
        {okText}
      </Button>,
    ];
  }, [footer, confirmLoading]);

  /**
   * 对style进行处理
   */
  const convertedStyle = useMemo(() => {
    const extraStyle: any = {};
    width && (extraStyle.width = `${width}px`);
    height && (extraStyle.height = `${height}px`);
    return Object.assign(style || {}, extraStyle);
  }, [width, height, style]);

  const onHide = () => {
    onCancel();
  };
  return (
    <Modal
      show={visible}
      manager={manager}
      onHide={onHide}
      renderBackdrop={renderBackdrop}
      aria-labelledby="modal-label"
      className={"livod-fixed-modal " + className}
      style={convertedStyle}
    >
      <>
        {header ? (
          <div className="livod-modal-header">
            <div className="livod-modal-title">{props.title}</div>
            <div className="livod-modal-close" onClick={onCancel}>
              <div className="livod-modal-closex">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="close"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </div>
            </div>
          </div>
        ) : null}
        <div className="livod-modal-body">{children || null}</div>
        <div className={"livod-modal-footer " + (header ? null : "no-border")}>
          {footerMemo.map((v) => v)}
        </div>
      </>
    </Modal>
  );
};

OriginLivodModal.defaultProps = {
  okText: "确定",
  cancelText: "取消",
  onCancel: () => {},
  onOk: () => {},
  header: true,
  okButtonProps: {
    disabled: false,
  },
  cancelButtonProps: {
    disabled: false,
  },
};

const LivodModal = OriginLivodModal as typeof OriginLivodModal & {
  confirm: (options: ConfirmOptions) => void;
  destroyAll: () => void;
} & SpecConfirmType;

// 挂载特定confirm组件
let specConfirmKeys = Object.keys(specConfirm);
specConfirmKeys.forEach((key) => {
  LivodModal[key] = specConfirm[key];
});

LivodModal.confirm = Confirm;
// destroyAll方法删除页面上所有的模态框
LivodModal.destroyAll = destroyAll;

export default LivodModal;
