import React from "react";
import { Tooltip } from "../../src";

const App = () => {
  return (
    <Tooltip title="hello" tooltipStyle={{ fontSize: "12px" }}>
      <a>hover me</a>
    </Tooltip>
  );
};
export default App;
