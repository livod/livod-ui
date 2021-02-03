import ReactDOM from "react-dom";
import React from "react";
import { Modal, Button } from "../src";
import "../src/style/index.less";
class App extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button
          type="primary"
          onClick={() =>
            Modal.confirm({
              title: "Are you sure delete this task?",
              content: "Some descriptions",
              okText: "Yes",
              okType: "danger",
              icon: (
                <svg
                  className="icon"
                  style={{
                    width: "1em",
                    height: "1em",
                    verticalAlign: "middle",
                    fill: "currentColor",
                    overflow: "hidden",
                  }}
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2353"
                >
                  <path
                    d="M730.38 429.12l0.49 345.05c0.05 33.86-27.36 61.34-61.22 61.37l-312.36 0.35c-33.84 0.04-61.31-27.36-61.36-61.2l-0.49-345.08"
                    fill="#3CD392"
                    p-id="2354"
                  ></path>
                  <path
                    d="M357.21 853.89c-43.67 0-79.22-35.5-79.29-79.18l-0.49-345.08c-0.01-9.94 8.03-18.01 17.97-18.03h0.03c9.93 0 17.99 8.04 18 17.97l0.49 345.08c0.03 23.84 19.45 43.22 43.29 43.23h0.05l312.37-0.35c11.56-0.01 22.43-4.53 30.6-12.72 8.17-8.19 12.66-19.07 12.64-30.63l-0.49-345.05c-0.01-9.94 8.03-18.01 17.97-18.03h0.03c9.93 0 17.99 8.04 18 17.97l0.49 345.05c0.03 21.18-8.19 41.11-23.15 56.11-14.96 15-34.86 23.27-56.05 23.29l-312.37 0.35c-0.03 0.02-0.06 0.02-0.09 0.02z"
                    fill="#2F1E6C"
                    p-id="2355"
                  ></path>
                  <path
                    d="M729.88 535.31L856.6 430.72 723.15 253.39a116.626 116.626 0 0 0-93.35-46.51l-235.78 0.28c-35.8 0.04-69.6 16.52-91.69 44.7l-134.1 178.01 126.2 104.44"
                    fill="#3CD392"
                    p-id="2356"
                  ></path>
                  <path
                    d="M729.89 553.31a17.96 17.96 0 0 1-13.89-6.54c-6.33-7.67-5.24-19.01 2.42-25.34l113.45-93.64-123.1-163.58c-18.54-24.64-48.01-39.34-78.84-39.34h-0.11l-235.79 0.28c-30.42 0.04-58.64 13.77-77.44 37.68L192.95 426.97l112.95 93.48c7.66 6.34 8.73 17.68 2.39 25.34s-17.69 8.73-25.34 2.39l-126.2-104.44c-7.41-6.13-8.69-17.01-2.9-24.7l134.1-178.01 0.21-0.27c25.66-32.74 64.23-51.55 105.83-51.6l235.79-0.28h0.16c42.08 0 82.3 20.06 107.6 53.69L870.98 419.9c5.79 7.69 4.5 18.58-2.92 24.71L741.33 549.19a17.9 17.9 0 0 1-11.44 4.12z"
                    fill="#2F1E6C"
                    p-id="2357"
                  ></path>
                  <path
                    d="M512.88 309.3c-27.96 0-54.74-10.34-75.42-29.12-20.53-18.64-33.4-44.05-36.22-71.54-1.02-9.89 6.18-18.73 16.07-19.74 9.88-1.02 18.73 6.18 19.74 16.07 4 38.96 36.6 68.33 75.83 68.33s71.83-29.38 75.83-68.33c1.02-9.89 9.86-17.09 19.75-16.07 9.89 1.02 17.08 9.86 16.07 19.74-2.82 27.49-15.69 52.89-36.22 71.54-20.68 18.78-47.47 29.12-75.43 29.12zM548.7 570.26c-9.94 0-18-8.06-18-18v-74.63l-58.24-22.4v60.78c0 9.94-8.06 18-18 18s-18-8.06-18-18v-62.26c0-11.53 5.67-22.31 15.18-28.84 9.5-6.53 21.6-7.95 32.36-3.81l60.27 23.18c13.41 5.16 22.42 18.28 22.42 32.65v75.32c0.01 9.96-8.05 18.01-17.99 18.01z"
                    fill="#2F1E6C"
                    p-id="2358"
                  ></path>
                  <path
                    d="M403.72 519.64a32.62 25.37 0 1 0 65.24 0 32.62 25.37 0 1 0-65.24 0Z"
                    fill="#2F1E6C"
                    p-id="2359"
                  ></path>
                  <path
                    d="M497.96 555.89a32.62 25.37 0 1 0 65.24 0 32.62 25.37 0 1 0-65.24 0Z"
                    fill="#2F1E6C"
                    p-id="2360"
                  ></path>
                  <path
                    d="M295.85 566.43c-8.93 0-16.16-7.24-16.16-16.16v-92.54c0-8.93 7.24-16.16 16.16-16.16s16.16 7.24 16.16 16.16v92.54c0 8.93-7.24 16.16-16.16 16.16z"
                    fill="#2F1E6C"
                    p-id="2361"
                  ></path>
                  <path
                    d="M730.16 566.43c-8.93 0-16.16-7.24-16.16-16.16v-92.54c0-8.93 7.24-16.16 16.16-16.16s16.16 7.24 16.16 16.16v92.54c0 8.93-7.23 16.16-16.16 16.16z"
                    fill="#2F1E6C"
                    p-id="2362"
                  ></path>
                </svg>
              ),
              okButtonProps: {},
              cancelText: "No",
              onOk() {
                return new Promise((res) => {
                  setTimeout(() => res(1), 3000);
                });
              },
              onCancel() {
                console.log("Cancel");
              },
            })
          }
        >
          Open Modal with customized footer
        </Button>
        <Modal
          visible={visible}
          title="Title"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
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
      </>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#container"));
