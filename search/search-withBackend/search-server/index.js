const { Database } = require("fakebase");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 9090;

app.use(cors());
const db = new Database("./db");
const Fruits = db.table("fakedata");

app.get("/", (req, res) => {
  res.send("hello visitor");
});

app.get("/fruits", async (req, res) => {
  const fruits = await Fruits.findAll();
  console.log(fruits);
  res.send(fruits);
});

app.post("/addItem", async (req, res) => {
  const newItem = req.body;
  Fruits.create(newItem)
    .then(() => res.sendStatus(200))
    .catch(() => res.sendStatus(500));
});

app.listen(PORT, () => {
  console.log(`App are running on http://localhost:${PORT}`);
});
