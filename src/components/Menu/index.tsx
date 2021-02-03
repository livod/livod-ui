import React from "react";
import { useDropdownMenu, useDropdownToggle } from "react-overlays";
import "./style/index.less";

interface ItemProps {
  onClick?: () => void;
  children?: any;
  danger?: boolean;
}
const Item: React.FC<ItemProps> = ({ onClick, danger, children }) => {
  const [props, { toggle }] = useDropdownToggle();
  props;
  return (
    <li
      onClick={() => {
        onClick && onClick();
        toggle(false);
      }}
      className={"livod-dropdown-menu-item " + (danger ? "danger" : "")}
      role="menuitem"
    >
      {children}
    </li>
  );
};

interface OriginMenuProps {
  role?: any;
  children?: any;
}

export type MenuType = React.FC<OriginMenuProps> & {
  Item: typeof Item;
};

const OriginMenu: React.FC<OriginMenuProps> = ({ role, children }) => {
  const { show, props } = useDropdownMenu({
    flip: true,
    offset: [0, 8],
  }) as any;
  return (
    <div
      className={"menu-wrapper " + (show ? "display-flex" : "display-none")}
      {...props}
      role={role}
    >
      <ul className="livod-dropdown-menu" role="menu" tabIndex={0}>
        {children}
      </ul>
    </div>
  );
};

const Menu: MenuType = OriginMenu as MenuType;
Menu.Item = Item;
export default Menu;
