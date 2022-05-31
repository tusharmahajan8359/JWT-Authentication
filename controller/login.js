const Customer = require("../models/index");
const jwt = require("jsonwebtoken");
const jwtKey = "tusharmahajansimformsolutions";

const loginController = async (req, res) => {
  let userdata = await Customer.findByPk(req.body.username);

  if (userdata && userdata.password == req.body.password) {
    const jwtdata = {
      id: req.body.username,
      password: req.body.password,
    };
    jwt.sign(jwtdata, jwtKey, (err, token) => {
      if (token) {
        Customer.update({ token: token }, { where: { id: req.body.username } });
      }
    });
    res.redirect(
      `/profile?id=${req.body.username}&password=${req.body.password}`
    );
  } else {
    res.json({ result: "!Invalid UserId or Password" });
  }
};

const loginform = (req, res) => {
  res.render("loginform");
};

module.exports = { loginController, loginform };
