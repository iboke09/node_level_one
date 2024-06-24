const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const allRoutes = require('./routes/allRoutes')
const addUserRoute = require('./routes/addUser')
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

app.use(allRoutes)
app.use('/user/add',addUserRoute)
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

// app.post("/", (req, res) => {
//   console.log(req.body);
//   const myData = new User(req.body);
//   myData
//     .save()
//     .then(() => {
//       res.redirect("/");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });
