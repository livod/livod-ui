import Modal from "react-overlays/Modal";
import React from "react";
import Button from "../Button";

import "./style/index.less";

interface MyModalProps {
  title?: string;
  visible: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  okText?: string;
  cancelText?: string;
  children?: any;
  confirmLoading?: boolean;
}

const MyModal: React.FC<MyModalProps> = (props) => {
  const renderBackdrop = (props) => (
    <div className="livod-backdrop" {...props} />
  );
  const {
    children,
    visible,
    onCancel,
    cancelText,
    okText,
    onOk,
    confirmLoading,
  } = props;
  return (
    <Modal
      show={visible}
      onHide={onCancel}
      renderBackdrop={renderBackdrop}
      aria-labelledby="modal-label"
      className="livod-fixed-modal"
    >
      <>
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
        <div className="livod-modal-body">{children || {}}</div>
        <div className="livod-modal-footer">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button type="primary" onClick={onOk} confirmLoading={confirmLoading}>
            {okText}
          </Button>
        </div>
      </>
    </Modal>
  );
};

MyModal.defaultProps = {
  okText: "确定",
  cancelText: "取消",
  onCancel: () => {},
  onOk: () => {},
};

export default MyModal;
