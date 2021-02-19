导入

```js static
import { Modal } from "livod-ui";
```

基本使用

```jsx
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";
const [isModalVisible, setIsModalVisible] = useState(false);

const showModal = () => {
  setIsModalVisible(true);
};

const handleOk = () => {
  setIsModalVisible(false);
};

const handleCancel = () => {
  setIsModalVisible(false);
};

<>
  <Button type="primary" onClick={showModal}>
    Open Modal
  </Button>
  <Modal
    title="Basic Modal"
    visible={isModalVisible}
    onOk={handleOk}
    onCancel={handleCancel}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</>;
```

异步关闭

```jsx
import React from "react";
import { Modal, Button } from "../../index.ts";

const [visible, setVisible] = React.useState(false);
const [confirmLoading, setConfirmLoading] = React.useState(false);
const [modalText, setModalText] = React.useState("Content of the modal");

const showModal = () => {
  setVisible(true);
};

const handleOk = () => {
  setModalText("The modal will be closed after two seconds");
  setConfirmLoading(true);
  setTimeout(() => {
    setVisible(false);
    setConfirmLoading(false);
  }, 2000);
};

const handleCancel = () => {
  console.log("Clicked cancel button");
  setVisible(false);
};

<>
  <Button type="primary" onClick={showModal}>
    Open Modal with async logic
  </Button>
  <Modal
    title="Title"
    visible={visible}
    onOk={handleOk}
    confirmLoading={confirmLoading}
    onCancel={handleCancel}
  >
    <p>{modalText}</p>
  </Modal>
</>;
```

自定义页脚

```jsx
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";

const [loading, setLoading] = useState(false);
const [visible, setVisible] = useState(false);

const showModal = () => {
  setVisible(true);
};

const handleOk = () => {
  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    setVisible(false);
  }, 3000);
};

const handleCancel = () => {
  setVisible(false);
};

<>
  <Button type="primary" onClick={showModal}>
    Open Modal with customized footer
  </Button>
  <Modal
    visible={visible}
    title="Title"
    onOk={handleOk}
    onCancel={handleCancel}
    footer={[
      <Button key="back" onClick={handleCancel}>
        Return
      </Button>,
      <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
        Submit
      </Button>,
    ]}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</>;
```

确认对话框

```jsx padded
import React from "react";
import { Modal, Button } from "../../index.ts";

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

<>
  <Button onClick={showConfirm}>Confirm</Button>
  <Button onClick={showPromiseConfirm}>With promise</Button>
  <Button onClick={showDeleteConfirm}>Delete</Button>
  <Button onClick={showPropsConfirm}>With extra props</Button>
</>;
```

信息提示

```jsx padded
import React from "react";
import { Modal, Button } from "../../index.ts";

function info() {
  Modal.info({
    title: "This is a notification message",
    content: (
      <div>
        <p>some messages...some messages...</p>
        <p>some messages...some messages...</p>
      </div>
    ),
    onOk() {},
  });
}

function success() {
  Modal.success({
    content: "some messages...some messages...",
  });
}

function error() {
  Modal.error({
    title: "This is an error message",
    content: "some messages...some messages...",
  });
}

function warning() {
  Modal.warning({
    title: "This is a warning message",
    content: "some messages...some messages...",
  });
}
<>
  <Button onClick={info}>Info</Button>
  <Button onClick={success}>Success</Button>
  <Button onClick={error}>Error</Button>
  <Button onClick={warning}>Warning</Button>
</>;
```

国际化

```jsx padded
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";

const LocalizedModal = () => {
  const [visible, setVisible] = useState(false);
  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Modal
      </Button>
      <Modal
        title="Modal"
        visible={visible}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};

function confirm() {
  Modal.confirm({
    title: "Confirm",
    content: "Bla bla ...",
    icon: "warning",
    okText: "确认",
    cancelText: "取消",
  });
}

<>
  <LocalizedModal />
  <Button onClick={confirm}>Confirm</Button>
</>;
```

自定义位置

```jsx padded
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";

const [modal1Visible, setModal1Visible] = useState(false);
const [modal2Visible, setModal2Visible] = useState(false);

<>
  <Button type="primary" onClick={() => setModal1Visible(true)}>
    Display a modal dialog at 20px to Top
  </Button>
  <Modal
    title="20px to Top"
    style={{ top: 20 }}
    visible={modal1Visible}
    onOk={() => setModal1Visible(false)}
    onCancel={() => setModal1Visible(false)}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
  <br />
  <br />
  <Button type="primary" onClick={() => setModal2Visible(true)}>
    Vertically centered modal dialog
  </Button>
  <Modal
    title="Vertically centered modal dialog"
    visible={modal2Visible}
    onOk={() => setModal2Visible(false)}
    onCancel={() => setModal2Visible(false)}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
</>;
```

销毁确认对话框

```jsx
import React from "react";
import { Modal, Button } from "../../index.ts";
function destroyAll() {
  Modal.destroyAll();
}
const { confirm } = Modal;

function showConfirm() {
  for (let i = 0; i < 3; i += 1) {
    setTimeout(() => {
      confirm({
        content: <Button onClick={destroyAll}>Click to destroy all</Button>,
        onOk() {
          console.log("OK");
        },
        onCancel() {
          console.log("Cancel");
        },
      });
    }, i * 500);
  }
}

<Button onClick={showConfirm}>Confirm</Button>;
```

自定义页脚按钮属性

```jsx
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";

const [visible, setVisible] = useState(false);
const showModal = () => {
  setVisible(true);
};

const handleOk = (e) => {
  console.log(e);
  setVisible(false);
};

const handleCancel = () => {
  setVisible(false);
};

<>
  <Button type="primary" onClick={showModal}>
    Open Modal with customized button props
  </Button>
  <Modal
    title="Basic Modal"
    visible={visible}
    onOk={handleOk}
    onCancel={handleCancel}
    okButtonProps={{ disabled: true }}
    cancelButtonProps={{ disabled: true }}
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
</>;
```

自定义模态框的宽度

```jsx
import React, { useState } from "react";
import { Modal, Button } from "../../index.ts";

const [visible, setVisible] = useState(false);
<>
  <Button type="primary" onClick={() => setVisible(true)}>
    Open Modal of 1000px width
  </Button>
  <Modal
    title="Modal 1000px width"
    visible={visible}
    onOk={() => setVisible(false)}
    onCancel={() => setVisible(false)}
    width={1000}
  >
    <p>some contents...</p>
    <p>some contents...</p>
    <p>some contents...</p>
  </Modal>
</>;
```
