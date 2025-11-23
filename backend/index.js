require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

// MODELS
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

// AUTH ROUTES
const authRoutes = require("./routes/authRoutes");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/auth", authRoutes);

// ------------------------------
// GET LIVE STOCK PRICE (AlphaVantage)
// ------------------------------
app.get("/stock/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol;

    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${process.env.ALPHAVANTAGE_KEY}`;

    const response = await axios.get(url);

    const price = response.data["Global Quote"]["05. price"];

    if (!price) {
      return res.status(400).json({ error: "No price returned" });
    }

    res.json({ symbol, price });
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
});

// ------------------------------
// Existing REST APIs
// ------------------------------
app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order saved!");
});

// ------------------------------
// START SERVER
// ------------------------------
app.listen(PORT, () => {
  mongoose.connect(uri);
  console.log(`Backend running on port ${PORT}`);
});
