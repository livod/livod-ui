import React, { useRef, useState, useEffect } from "react";
import Overlay from "react-overlays/Overlay";
import "./style/index.less";

export type Placement = "bottom" | "top" | "left" | "right";

interface PopoverProps {
  /** 标题内容 */
  title: string;
  /** 主体内容 */
  content?: React.ReactNode;
  /** Popover出现的方位 */
  placement?: Placement;
  style?: React.CSSProperties;
  /** Popover自定义样式 */
  popoverStyle?: React.CSSProperties;
}

const Popover: React.FC<PopoverProps> = ({
  title,
  placement = "top",
  children,
  style,
  popoverStyle,
  content,
}) => {
  const triggerRef = useRef(null);
  const containerRef = useRef(null);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleHide = () => {
    setShow(false);
  };
  useEffect(() => {
    if (show) {
      containerRef.current.querySelector(".livod-popover").style.zIndex = 99;
    }
  }, [show]);
  return (
    <div className="flex flex-col items-center" ref={containerRef}>
      {React.cloneElement(children as React.ReactElement, {
        ref: triggerRef,
        onMouseEnter: handleShow,
        onMouseLeave: handleHide,
        style,
      })}
      <Overlay
        show={show}
        rootClose
        offset={[0, 10]}
        onHide={() => setShow(false)}
        placement={placement}
        container={containerRef}
        target={triggerRef}
      >
        {({ props, arrowProps, placement }) => {
          return (
            <div className={"livod-popover"} {...props}>
              <div
                className={"livod-popover-arrow " + placement}
                {...arrowProps}
              />
              <div className={"livod-popover-inner"} style={popoverStyle}>
                <div className="livod-popover-title">{title}</div>
                <div className="livod-popover-inner-content">{content}</div>
              </div>
            </div>
          );
        }}
      </Overlay>
    </div>
  );
};

export default Popover;
