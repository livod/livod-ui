import React, { MouseEvent } from "react";
import "./style/index.less";

interface ButtonProps {
  /** Button组件的类型 */
  type?: "primary" | "danger";
  /** 点击事件 */
  onClick?: (event: MouseEvent) => void;
  children?: any;
  /** 是否是loading状态 */
  loading?: boolean;
  /** 是否被禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: Object;
}
/**
 * @param type 传入type prop
 * @param correctedType 返回正确的类名
 */
function correctTypeProp(type: string) {
  let correctedType: string = "";
  const PRIMARY = "primary";
  const DANGER = "danger";
  switch (type) {
    case PRIMARY:
      correctedType = PRIMARY;
      break;
    case DANGER:
      correctedType = DANGER;
      break;
    default:
      correctedType = "";
  }
  return correctedType;
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  (
    {
      onClick,
      type = "primary",
      disabled = false,
      loading = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        onClick={onClick}
        className={"livod-button " + correctTypeProp(type)}
        disabled={disabled === true}
        ref={ref as any}
        {...rest}
      >
        {loading && <span className="livod-loading"></span>}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
export default Button;
