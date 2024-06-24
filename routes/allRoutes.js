const express = require("express");
const router = express.Router();
const User = require("../models/costumerSchema");
const moment = require("moment");
const userController = require('../controllers/userController')
// Get Request

router.get("/", userController.user_index_get);



router.get("/edit/:id", userController.user_edit_get);

router.get("/view/:id", userController.user_view_get);

// Post Request


router.post("/search", userController.user_search_post);

// DELETE Request

router.delete("/edit/:id",userController.user__delete);

// PUT Request
router.put("/edit/:id",userController.user__put);

module.exports = router;
