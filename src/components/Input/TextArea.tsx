import React, { TextareaHTMLAttributes } from "react";

interface OriginTextAreaProps extends TextareaHTMLAttributes<Element> {}

const convertClassName = (className) => {
  if (!className) {
    return "livod-input";
  } else {
    return "livod-input " + className;
  }
};

const OriginTextArea: React.FC<OriginTextAreaProps> = ({ ...rest }) => {
  const { className } = rest;

  return (
    <textarea {...rest} className={convertClassName(className)}></textarea>
  );
};

export default OriginTextArea;
