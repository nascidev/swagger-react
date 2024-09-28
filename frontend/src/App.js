// src/App.js
import React from "react";
import SwaggerComponent from './components/SwaggerComponent';
import MyDataVisualizationComponent from "./components/MyDataVisualizationComponent";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>My API Documentation</h1>
      </header>
      <SwaggerComponent specUrl="http://localhost:8000/openapi.json" />

      <MyDataVisualizationComponent />
    </div>
  );
}

export default App;
