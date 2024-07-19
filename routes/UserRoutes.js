const express = require("express");

const UserController = require("../controllers/UserController.js");
const checkAuth = require("../middlewares/check-auth.js");

const router = express.Router();
 
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/:userId", checkAuth, UserController.getOneUser);

module.exports = router;
