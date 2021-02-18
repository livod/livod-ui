import React from "react";
import { Message, Button } from "../../src";

const info = () => {
  Message.info("This is a normal message");
};

export default () => (
  <Button type="primary" onClick={info}>
    Display normal message
  </Button>
);
