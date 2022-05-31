const express = require("express");
const routes = express.Router();

const { loginController, loginform } = require("../controller/login");
const updateform = require("../controller/update");
const {
  createnewuser,
  newuserform,
  userprofile,
} = require("../controller/user");
const verifyToken = require("../controller/auth");

routes.get("/", loginform);

routes.post("/login", loginController);

routes.get("/createuserform", newuserform);

routes.post("/createnewuser", createnewuser);

routes.get("/updateview", verifyToken, updateform);

routes.get("/profile", verifyToken, userprofile);

module.exports = routes;
