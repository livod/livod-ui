import React from "react";
import { Message, Button } from "../../src";

const success = () => {
  Message.loading("Action in progress..", 2.5)
    .then(() => Message.success("Loading finished", 2.5))
    .then(() => Message.info("Loading finished is finished", 2.5));
};

export default () => (
  <Button onClick={success}>Display sequential messages</Button>
);
