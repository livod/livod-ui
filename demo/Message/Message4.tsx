import React from "react";
import { message, Button } from "../../src";

const success = () => {
  const hide = message.loading("Action in progress..", 0);
  // Dismiss manually and asynchronously
  console.log(hide);
  setTimeout(hide, 2500);
};

export default () => (
  <Button onClick={success}>Display a loading indicator</Button>
);
