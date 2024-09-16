const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ordersRouter = require("./routes/orders");
const authRouter = require("./routes/auth");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/coffeeShopDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB", err);
  });

app.use("/orders", ordersRouter);
app.use("/auth", authRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
