const express = require("express");
const app = express();
const port = 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
const User = require("./models/costumerSchema");
app.set("view engine", "ejs");
app.use(express.static("public"));

// Auto Refresh

const path = require("path");
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, "public"));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Get Request

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
});

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
});

app.get("/user/view.html", (req, res) => {
  res.render("user/view");
});

// Post Request

app.post("/user/add.html", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.redirect("/user/add.html");
    })
    .catch((error) => {
      console.log(error);
    });
  console.log(req.body);
});

mongoose
  .connect(
    "mongodb+srv://fazexxibrahim0909:AQnr4dvM01Zy2zuo@cluster0.fnr7f3r.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.post("/", (req, res) => {
  console.log(req.body);
  const myData = new User(req.body);
  myData
    .save()
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
});
