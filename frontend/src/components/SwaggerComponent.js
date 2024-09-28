// src/components/SwaggerComponent.js
import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

const SwaggerComponent = ({ specUrl }) => {
  return (
    <div>
      <SwaggerUI url={specUrl} />
    </div>
  );
};

export default SwaggerComponent;
