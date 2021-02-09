import React, { useEffect } from "react";
import { Modal, message } from "../../src";

export default () => {
  useEffect(() => {
    message.error("123", 99);
  }, []);

  return (
    <Modal visible={true} title={"123123"} onOk={() => console.log(1)}>
      <input type="text" />
    </Modal>
  );
};
