import React, { useEffect, useState } from "react";
import axios from "axios";

function LiveStock({ symbol }) {
  const [price, setPrice] = useState(null);

  const loadPrice = async () => {
    try {
      const res = await axios.get(`http://localhost:3002/stock/${symbol}`);
      setPrice(parseFloat(res.data.price).toFixed(2));
    } catch (err) {
      setPrice("Error");
    }
  };

  useEffect(() => {
    loadPrice(); // load once

    // Refresh price every 15 seconds
    const interval = setInterval(loadPrice, 15000);

    return () => clearInterval(interval);
  }, [symbol]);

  return (
    <div
      style={{
        padding: 20,
        margin: "20px auto",
        width: 300,
        background: "#eee",
        borderRadius: 10,
        textAlign: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h3>{symbol}</h3>
      <h1 style={{ color: "#0066ff" }}>
        {price ? price : "Loading..."}
      </h1>
    </div>
  );
}

export default LiveStock;
