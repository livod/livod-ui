import React, { MouseEvent } from "react";
import "./style/index.less";

interface ButtonProps {
  type?: string;
  onClick?: (event: MouseEvent) => void;
  children?: any;
  confirmLoading?: boolean;
}
/**
 * @param type 传入type prop
 * @param correctedType 返回正确的类名
 */
function correctTypeProp(type: string) {
  let correctedType: string = "";
  const PRIMARY = "primary";
  switch (type) {
    case PRIMARY:
      correctedType = PRIMARY;
      break;
    default:
      correctedType = "";
  }
  return correctedType;
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={"livid-button " + correctTypeProp(props.type)}
    >
      <div className="livid-loading"></div>
      {props.children}
    </button>
  );
};

export default Button;
