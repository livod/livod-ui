import React from "react";
import { Modal, Button } from "../../src";

class LocalizedModal extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  hideModal = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
          Modal
        </Button>
        <Modal
          title="Modal"
          visible={this.state.visible}
          onOk={this.hideModal}
          onCancel={this.hideModal}
          okText="确认"
          cancelText="取消"
        >
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
          <p>Bla bla ...</p>
        </Modal>
      </>
    );
  }
}

function confirm() {
  Modal.confirm({
    title: "Confirm",
    content: "Bla bla ...",
    icon: "warning",
    okText: "确认",
    cancelText: "取消",
  });
}

const App = () => (
  <>
    <LocalizedModal />
    <Button onClick={confirm}>Confirm</Button>
  </>
);
export default App;
