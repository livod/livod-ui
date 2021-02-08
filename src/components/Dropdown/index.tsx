import React, { ReactElement, useState } from "react";
import { Dropdown } from "react-overlays";
import DropdownToggle from "./DropdownToggle";
import "./style/index.less";
interface LivodDropdownProps {
  children: ReactElement;
  overlay: ReactElement;
  placement?: Placement;
  trigger?: string;
}

export type Placement =
  | "up"
  | "upEnd"
  | "down"
  | "downEnd"
  | "left"
  | "leftEnd"
  | "right"
  | "rightEnd";

const convertPlacement = (placement: Placement) => {
  if (!placement) {
    return ["down"];
  }
  return placement.split(/\B(?=[A-Z])/);
};

const LivodDropdown: React.FC<LivodDropdownProps> = ({
  children,
  overlay,
  placement,
  trigger,
}) => {
  const [drop, alignEnd] = convertPlacement(placement);
  const [show, setShow] = useState(false);
  const onToggle = (nextShow) => setShow(nextShow);
  return (
    <Dropdown
      show={show}
      onToggle={onToggle}
      drop={drop as any}
      alignEnd={alignEnd === "End" ? true : false}
    >
      {() => (
        <>
          <DropdownToggle trigger={trigger}>{children}</DropdownToggle>
          {overlay}
        </>
      )}
    </Dropdown>
  );
};

export default LivodDropdown;
