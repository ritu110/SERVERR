const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const cors = require("cors");
// const productsRouter = require("./routes/products");
// const cartRouter = require("./routes/cart");

const PORT = process.env.PORT || 3500;
const DB_URL = process.env.DB_URL;

const app = express();

// middleware
app.use(express.json());
app.use(cors());

// routes
// app.use("/products", productsRouter);
// app.use("/cart", cartRouter);

const dbConnection = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("Database Connected");
    app.listen(PORT, () => console.log("Server is running on port " + PORT));
  } catch (error) {
    console.error("DB Connection Error: " + error.message);
  }
};

dbConnection();
// XW8hTCEVyDb1x2Tc
