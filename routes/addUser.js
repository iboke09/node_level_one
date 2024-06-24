const express = require("express");
const router = express.Router();
const User = require("../models/costumerSchema");
const moment = require("moment");
const userController = require('../controllers/userController')



router.get("",userController.user_add_get);

router.post("",userController.user__post);


module.exports = router;