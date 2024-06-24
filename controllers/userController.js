const User = require("../models/costumerSchema");
const moment = require("moment");

const user_index_get = (req, res) => {
  User.find()
    .then((result) => {
      console.log(result);
      res.render("index.ejs", { result, moment: moment });
    })
    .catch((error) => {
      console.log(error);
    });
};

const user_edit_get = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/edit", { result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_view_get = (req, res) => {
  User.findById(req.params.id)
    .then((result) => {
      console.log(result);
      res.render("user/view", { result, moment: moment });
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_search_post = (req, res) => {
  console.log(req.body);
  const searchText = req.body.searchText.trim();
  User.find({
    $or: [{ firstName: searchText }, { lastName: searchText }],
  })
    .then((result) => {
      res.render("user/search", { arr: result, moment: moment });
    })
    .catch((error) => {
      console.log(error);
    });
};

const user__delete = (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const user__put = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body)
    .then((result) => {
      console.log(result);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const user_add_get = (req, res) => {
  res.render("user/add");
};

const user__post = (req, res) => {
  User.create(req.body)
    .then(() => {
      res.redirect("/");
    })
    .catch((error) => {
      console.log(error);
    });
};

module.exports = {
  user_index_get,
  user_edit_get,
  user_view_get,
  user_search_post,
  user__delete,
  user__put,
  user_add_get,
  user__post,
};
