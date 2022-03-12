import React from "react";

import "./styles/loading.css";

function LoadingComponent({ message }) {
  return (
    <div className="loading">
      <h2>{message}</h2>
    </div>
  );
}

export default LoadingComponent;
