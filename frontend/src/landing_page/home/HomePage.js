import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";

// Import LiveStock component
import LiveStock from "../../components/LiveStock";

function HomePage() {
  return (
    <>
      <Hero />
      <Awards />
      <Stats />

      {/* 🔥 LIVE STOCK PRICES SECTION */}
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Live Stock Prices
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          {/* AlphaVantage Stock Symbols (BSE Only) */}
          <LiveStock symbol="RELIANCE.BSE" />
          <LiveStock symbol="TCS.BSE" />
          <LiveStock symbol="INFY.BSE" />
        </div>
      </div>

      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}

export default HomePage;
