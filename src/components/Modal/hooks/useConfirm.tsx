import React from "react";
import ReactDOM from "react-dom";
import { OriginLivodModal } from "../index";
// confirm props接口
export interface ConfirmOptions {
  title?: string;
  content?: string;
  onOk?: (event: React.MouseEvent) => void | Promise<any>;
  onCancel?: () => void;
  okType?: "primary" | "danger";
  okButtonProps?: {
    disabled: boolean
  }
  cancelButtonProps?: {
    disabled: boolean
  }
}

// confirm弹窗
function useConfirm(props: ConfirmOptions) {
  const { title, content, okType, okButtonProps, cancelButtonProps} = props;
  const node = document.createElement("div");
  // 删除confirm及其相关组件
  // 细节基于原生DOM，需要优化
  const destroy = () => {
    const nodeNext = node.nextElementSibling;
    const nodeNextNext = nodeNext.nextElementSibling;
    document.body.removeChild(node);
    document.body.removeChild(nodeNext);
    document.body.removeChild(nodeNextNext);
  };
  const handleCancel = () => {
    props.onCancel && props.onCancel();
    destroy();
  };
  // 这里有处理promise的情况
  // 细节基于原生DOM，需要优化
  const handleOk = (event: React.MouseEvent) => {
    if (props.onOk) {
      const promise:any = props.onOk(event);
      if (promise instanceof Promise) {
        let loadingEl = document.createElement('span')
        loadingEl.className = "livod-loading"
        event.currentTarget.insertBefore(loadingEl, event.currentTarget.lastChild)
        promise.then(() => {
          destroy()
        })
      }else{
        destroy()
      }
    } else {
      destroy();
    }
  };
  document.body.append(node);
  ReactDOM.render(render(), node);

  
  function render() {
    return (
      <OriginLivodModal
        visible={true}
        onCancel={handleCancel}
        onOk={handleOk}
        header={false}
        okType={okType}
        okButtonProps={okButtonProps}
        cancelButtonProps={cancelButtonProps}
      >
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
        {title && <span className="ant-modal-confirm-title">{title}</span>}
        {content && <div className="ant-modal-confirm-content">{content}</div>}
      </OriginLivodModal>
    );
  }
}

export default useConfirm;
