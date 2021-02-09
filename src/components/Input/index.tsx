import React from "react";
import "./style/index.less";
export interface OriginInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OriginInput: React.FC<OriginInputProps> = ({ className, ...rest }) => {
  return (
    <>
      <input
        type="text"
        className={"livod-input" + (className ? " " + className : "")}
        {...rest}
      />
    </>
  );
};

export default OriginInput;
