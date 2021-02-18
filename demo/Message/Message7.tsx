import React from "react";
import { Message, Button } from "../../src";

const success = () => {
  Message.success({
    content: "This is a prompt message with custom className and style",
    className: "custom-class",
    style: {
      marginTop: "20vh",
    },
  });
};

export default () => <Button onClick={success}>Customized style</Button>;
