import React, { MouseEvent } from "react";
import "./style/index.less";

interface ButtonProps {
  type?: "primary" | "danger";
  onClick?: (event: MouseEvent) => void;
  children?: any;
  loading?: boolean;
  disabled?: boolean;
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

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, type, disabled, loading, children } = props;
  return (
    <button
      onClick={onClick}
      className={"livod-button " + correctTypeProp(type)}
      disabled={disabled === true}
    >
      {loading && <span className="livod-loading"></span>}
      {children}
    </button>
  );
};

export default Button;
