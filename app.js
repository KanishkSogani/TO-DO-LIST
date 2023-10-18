const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/todo");

const trySchema = new mongoose.Schema({
  name: String,
});

const item = mongoose.model("task", trySchema);

app.get("/", (req, res) => {
  item
    .find()
    .then((result) => {
      res.render("list", { dayej: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post("/", (req, res) => {
  const itemName = req.body.ele1;
  const todo5 = new item({
    name: itemName,
  });
  todo5.save();
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const checked = req.body.checkbox1;
  item
    .findByIdAndRemove(checked)
    .then(() => {
      console.log("Deleted");
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen("3000", () => {
  console.log("Server is running");
});
