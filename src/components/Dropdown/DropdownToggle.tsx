import React, { ReactElement, useMemo } from "react";
import { useDropdownToggle } from "react-overlays";
interface DropdownToggleProps {
  children: ReactElement;
  clickTrigger?: boolean;
}

const DropdownToggle: React.FC<DropdownToggleProps> = ({
  children,
  clickTrigger,
}) => {
  const [props, { toggle }] = useDropdownToggle();

  const specifiedToggle = useMemo(() => {
    return {
      onClick: toggle,
    };
  }, [clickTrigger, toggle]);

  return React.cloneElement(children, {
    ...props,
    ...specifiedToggle,
  });
};

export default DropdownToggle;
