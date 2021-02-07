import React, { ReactElement, useState } from "react";
import { Dropdown } from "react-overlays";
import DropdownToggle from "./DropdownToggle";
import "./style/index.less";
interface LivodDropdownProps {
  children: ReactElement;
  overlay: ReactElement;
}

const LivodDropdown: React.FC<LivodDropdownProps> = ({ children, overlay }) => {
  const [show, setShow] = useState(false);
  const onToggle = (nextShow) => setShow(nextShow);
  return (
    <Dropdown show={show} onToggle={onToggle}>
      {() => (
        <>
          <DropdownToggle>{children}</DropdownToggle>
          {overlay}
        </>
      )}
    </Dropdown>
  );
};

export default LivodDropdown;
