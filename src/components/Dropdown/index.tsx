import React, { ReactNode, useState } from "react";
import { useDropdownToggle, Dropdown } from "react-overlays";
import { Button } from "../../index";
import "./style/index.less";

interface ToggleProps {
  children?: any;
  toggleChildren?: ReactNode;
}
const Toggle = ({ children, toggleChildren }: ToggleProps) => {
  const [props, { toggle }] = useDropdownToggle();
  return (
    <span {...props} onClick={toggle as any} className="toggle-wrapper">
      {toggleChildren || <Button>{children}</Button>}
    </span>
  );
};

const DropdownButton = ({
  show,
  onToggle,
  drop,
  alignEnd,
  title,
  children,
  overlay,
}) => (
  <Dropdown
    show={show}
    onToggle={onToggle}
    drop={drop}
    alignEnd={alignEnd}
    itemSelector="button:not(:disabled)"
  >
    {({ props }) => (
      <div {...props}>
        <Toggle toggleChildren={children}>{title}</Toggle>
        {overlay}
      </div>
    )}
  </Dropdown>
);

interface LivodDropDownProps {
  children?: any;
  overlay?: ReactNode;
}

const LivodDropDown: React.FC<LivodDropDownProps> = (props) => {
  const [show, setShow] = useState(false);
  const { children, overlay } = props;
  return (
    <DropdownButton
      show={show}
      onToggle={(nextShow) => setShow(nextShow)}
      title
      drop="down"
      alignEnd={false}
      overlay={overlay}
    >
      {children}
    </DropdownButton>
  );
};

export default LivodDropDown;
