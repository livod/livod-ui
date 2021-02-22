import React, { useMemo } from "react";
import TextArea from "./TextArea";
import "./style/index.less";
export interface OriginInputProps {
  /** 占位符 */
  placeholder?: string;
  className?: string;
  value?: string;
  /** 是否有错(影响样式) */
  hasError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const OriginInput: React.FC<OriginInputProps> & {
  TextArea: typeof TextArea;
} = ({ className = "", hasError = false, ...rest }) => {
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

OriginInput.displayName = "Input";

OriginInput.TextArea = TextArea;

export default OriginInput;
