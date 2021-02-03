/* eslint-disable import/first */
import Modal from "react-overlays/Modal";
import React, { ReactNode, useMemo, useCallback } from "react";
import Button from "../Button";
import useConfirm, {
  ConfirmOptions,
  specConfirm,
  SpecConfirmType,
} from "./hooks/useConfirm";

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
}

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

  return (
    <Modal
      show={visible}
      onHide={onCancel}
      renderBackdrop={renderBackdrop}
      aria-labelledby="modal-label"
      className="livod-fixed-modal"
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

LivodModal.confirm = useConfirm;

/**
 * @param node 传入的挂载节点
 * @description 利用原生DOM删除Modal组件
 */
export const destroy = (node) => {
  const nodeNext = node.nextElementSibling;
  const nodeNextNext = nodeNext.nextElementSibling;
  document.body.removeChild(node);
  document.body.removeChild(nodeNext);
  document.body.removeChild(nodeNextNext);
};
// destroyAll方法删除页面上所有的模态框
LivodModal.destroyAll = () => {
  const nodeList = document.querySelectorAll(".livod-fixed-modal");
  nodeList.forEach((v) =>
    destroy(v.previousElementSibling.previousElementSibling)
  );
};

export default LivodModal;
