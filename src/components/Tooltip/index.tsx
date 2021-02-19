import React, { useRef, useState, useEffect } from "react";
import Overlay from "react-overlays/Overlay";
import "./style/index.less";

export type Placement = "bottom" | "top" | "left" | "right";

interface TooltipProps {
  /** 文字内容 */
  title: string;
  /** tooltip出现的方位 */
  placement?: Placement;
  style?: React.CSSProperties;
  /** tooltip自定义样式 */
  tooltipStyle?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = "bottom",
  children,
  style,
  tooltipStyle,
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
      containerRef.current.querySelector(".livod-tooltip").style.zIndex = 99;
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
            <div className={"livod-tooltip"} {...props}>
              <div
                className={"livod-tooltip-arrow " + placement}
                {...arrowProps}
              />
              <div className={"livod-tooltip-body"} style={tooltipStyle}>
                {title}
              </div>
            </div>
          );
        }}
      </Overlay>
    </div>
  );
};

export default Tooltip;
