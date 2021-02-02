import ReactDOM from "react-dom";
import React, { useState } from "react";
import {Modal} from "../src";
import "../src/style/index.less";
function TestModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    console.log(1);
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <React.Fragment>
      <button onClick={showModal}>open</button>
      <Modal
        title="Basic"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>hello world</div>
      </Modal>
    </React.Fragment>
  );
}
ReactDOM.render(<TestModal></TestModal>, document.querySelector("#container"));
