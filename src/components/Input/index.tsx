import React, { useMemo } from "react";
import "./style/index.less";
export interface OriginInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OriginInput: React.FC<OriginInputProps> = ({
  className = "",
  hasError,
  ...rest
}) => {
  const classname = useMemo(() => {
    if (className) {
      className = " " + className;
    }
    if (hasError) {
      className += " has-error";
    }
    return "livod-input" + className;
  }, [className, hasError]);
  return (
    <>
      <input type="text" className={classname} {...rest} />
    </>
  );
};

export default OriginInput;
