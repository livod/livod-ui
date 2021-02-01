import styled from "styled-components";
import Modal from "react-overlays/Modal";
import React from "react";
import Button from "../Button";
const LivodModalFooter = styled.div`
  padding: 10px 16px;
  text-align: right;
  background: 0 0;
  border-top: 1px solid #f0f0f0;
  border-radius: 0 0 2px 2px;
`;

const LivodModalBody = styled.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
`;
const LivodModalCloseX = styled.span`
  display: block;
  width: 56px;
  height: 56px;
  font-size: 16px;
  font-style: normal;
  line-height: 56px;
  text-align: center;
  text-transform: none;
  text-rendering: auto;
`;
const LivodModalClose = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  background: 0 0;
  border: 0;
  outline: 0;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
`;
const LivodModalHeader = styled.div`
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
  box-sizing: border-box;
`;
const LivodModalTitle = styled.div`
  margin: 0;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  word-wrap: break-word;
`;
const Backdrop = styled.div`
  position: fixed;
  z-index: 1040;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #000;
  opacity: 0.5;
`;
// we use some pseudo random coords so nested modals
// don't sit right on top of each other.
const FixedModal = styled(Modal)`
  position: fixed;
  width: 400px;
  z-index: 1040;
  top: 30%;
  left: calc(50% - 200px);
  background-color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

interface MyModalProps{
  title?: string,
  visible: boolean
  onCancel?: Function,
  onOk?: Function,
  okText?: string,
  cancelText?: string,
  children?: any,
}


const MyModal:React.FC<MyModalProps> = (props) => {
  const renderBackdrop = (props) => <Backdrop {...props} />;
  const { children, visible, onCancel, cancelText, okText, onOk } = props;
  return (
    <FixedModal
      show={visible}
      onHide={onCancel}
      renderBackdrop={renderBackdrop}
      aria-labelledby="modal-label"
    >
      <>
        <LivodModalHeader>
          <LivodModalTitle>{props.title}</LivodModalTitle>
          <LivodModalClose onClick={onCancel}>
            <LivodModalCloseX>
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
            </LivodModalCloseX>
          </LivodModalClose>
        </LivodModalHeader>
        <LivodModalBody>{children || {}}</LivodModalBody>
        <LivodModalFooter className="livod-modal-footer">
          <Button onClick={onCancel}>{cancelText}</Button>
          <Button type="primary" onClick={onOk}>
            {okText}
          </Button>
        </LivodModalFooter>
      </>
    </FixedModal>
  );
}

MyModal.defaultProps = {
  okText: "确定",
  cancelText: "取消",
  onCancel: () => {},
  onOk: () => {},
}

export default MyModal
