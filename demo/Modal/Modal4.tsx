import React from "react";
import { Modal, Button } from "../../src";

const { confirm } = Modal;

function showConfirm() {
  confirm({
    title: "Do you Want to delete these items?",
    icon: "info",
    content: "Some descriptions",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

function showPromiseConfirm() {
  confirm({
    title: "Do you want to delete these items?",
    icon: "info",
    content:
      "When clicked the OK button, this dialog will be closed after 1 second",
    onOk() {
      return new Promise((resolve, reject) => {
        setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
      }).catch(() => console.log("Oops errors!"));
    },
    onCancel() {},
  });
}

function showDeleteConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    icon: "info",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

function showPropsConfirm() {
  confirm({
    title: "Are you sure delete this task?",
    icon: "info",
    content: "Some descriptions",
    okText: "Yes",
    okType: "danger",
    okButtonProps: {
      disabled: true,
    },
    cancelText: "No",
    onOk() {
      console.log("OK");
    },
    onCancel() {
      console.log("Cancel");
    },
  });
}

const App = () => (
  <>
    <Button onClick={showConfirm}>Confirm</Button>
    <Button onClick={showPromiseConfirm}>With promise</Button>
    <Button onClick={showDeleteConfirm}>Delete</Button>
    <Button onClick={showPropsConfirm}>With extra props</Button>
  </>
);
export default App;
