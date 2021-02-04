import React, { useState, useEffect } from "react";
import { Dropdown, Menu, Modal } from "../src";
import "../src/style/index.less";
function App() {
  let menu = (
    <Menu>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.alipay.com/"
        >
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  const { state, setState } = useCustomHook();
  const [show, setShow] = useState(false);
  const aRef = React.useRef(null);
  const ref = useWaitForDOMRef(aRef, () => console.log("onResolved callback"));
  console.log(aRef, ref);
  useEffect(() => {
    console.log("app useEffect");
  }, []);
  console.log("useCustomHook called");
  return (
    <>
      <Dropdown overlay={menu}>
        <a
          ref={aRef}
          onClick={(e) => {
            setState(state + 1);
            console.log(aRef, ref);
            setShow(true);
            e.preventDefault();
          }}
        >
          {state}
        </a>
      </Dropdown>
      <Modal visible={show}>{"aababab"}</Modal>
    </>
  );
}
type DOMContainer<T extends HTMLElement = HTMLElement> =
  | T
  | React.RefObject<T>
  | null
  | (() => T | React.RefObject<T> | null);
const resolveContainerRef = <T extends HTMLElement>(
  ref: DOMContainer<T> | undefined
): T | HTMLBodyElement | null => {
  if (typeof document === "undefined") return null;
  if (ref == null) return document.body as HTMLBodyElement;
  if (typeof ref === "function") ref = ref();

  if (ref && "current" in ref) ref = ref.current;
  if ((ref as HTMLElement)?.nodeType) return (ref as T) || null;
  return null;
};
function useWaitForDOMRef<T extends HTMLElement = HTMLElement>(
  ref: DOMContainer<T> | undefined,
  onResolved?: (element: T | HTMLBodyElement) => void
) {
  const [resolvedRef, setRef] = useState(() => resolveContainerRef(ref));
  console.log("useWaitForDOMRef called");
  if (!resolvedRef) {
    const earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  useEffect(() => {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);

  useEffect(() => {
    const nextRef = resolveContainerRef(ref);
    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);

  return resolvedRef;
}

function useCustomHook() {
  const [state, setState] = useState(0);
  useEffect(() => {
    console.log("customhook useEffect run");
  }, [state]);
  return {
    state,
    setState,
  };
}

export default App;
