// src/MyDataVisualizationComponent.js
import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function MyDataVisualizationComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/data-endpoint`)
      .then((response) => response.json())
      .then(setData)
      .catch((err) => {
        console.error(err);
        setError(err);
      });
  }, []);

  if (error) return <p>Error loading data.</p>;
  if (!data.length) return <p>Loading...</p>;

  return (
    <div>
      <h2>Data Visualization</h2>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default MyDataVisualizationComponent;
