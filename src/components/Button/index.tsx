import React from "react";
import styled from "styled-components";

const LivodButton = styled.button`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 15px;
  font-size: 14px;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.85);
  background: #fff;
  border: 1px solid #d9d9d9;
  outline: 0;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    color: #40a9ff;
    background: #fff;
    border-color: #40a9ff;
  }

  &.primary {
    color: #fff;
    background: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  }
  &.primary:active,
  &.primary:hover,
  &.primary:focus {
    color: #fff;
    background: #40a9ff;
    border-color: #40a9ff;
  }
`;

interface ButtonProps {
  type?: string;
  onClick?: Function;
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
    <LivodButton
      onClick={props.onClick}
      className={correctTypeProp(props.type)}
    >
      {props.children}
    </LivodButton>
  );
};

export default Button;
