// Import statements
const express = require("express");
const router = express.Router();

// Get all user controllers that manipulate the user database
const userControllers = require("../../controllers/userControllers");

// @route POST api/users/signup
// @desc add new user to database and authenticate user
// @access public
router.post("/signup", userControllers.signUpController);

// @route POST api/users/signin
// @desc authenticate user based on given credentials
// @access public
router.post("/signin", userControllers.signInController);

// @route POST api/users/signin
// @desc sign user out
// @access public
router.post("/signout", userControllers.signOutController);

// @route GET api/users/data
// @desc get data of the user in the current session
// @access public
router.get("/data", userControllers.getUserDataController);

module.exports = router;
