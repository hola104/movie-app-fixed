import React from "react";
import { Spin } from "antd";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="spin">
      <Spin size="large" />
    </div>
  );
};

export default Spinner;
