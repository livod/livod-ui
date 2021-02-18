import React from "react";
import { Message, Button } from "../../src";

const success = () => {
  Message.success("This is a success message");
};

const error = () => {
  Message.error("This is an error message");
};

const warning = () => {
  Message.warning("This is a warning message");
};

export default () => (
  <>
    <Button onClick={success}>Success</Button>
    <Button onClick={error}>Error</Button>
    <Button onClick={warning}>Warning</Button>
  </>
);
