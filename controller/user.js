const Customer = require("../models/index");
const jwt = require("jsonwebtoken");
const jwtKey = "tusharmahajansimformsolutions";
const sequelize = require("../models/index");
const createnewuser = (req, res) => {
  sequelize
    .sync()
    .then(() => {
      Customer.create(req.body).then((result) => {
        //res.json({ result });
        const jwtdata = {
          id: result.id,
          password: result.password,
        };
        jwt.sign(jwtdata, jwtKey, (err, token) => {
          if (token) {
            res.json({ id: result.id });
            Customer.update({ token: token }, { where: { id: result.id } });
          }
        });
      });
    })
    .then(() => {
      //res.render("index", {});
      console.log("inserted");
    });
};

const newuserform = (req, res) => {
  res.render("createuserform");
};

const userprofile = async (req, res) => {
  //res.json({ data: req.query });
  const data = req.query || req.body;
  const querydata = await Customer.findByPk(data.id);
  res.render("userdetails", {
    data: {
      id: querydata.id,
      email: querydata.email,
      name: querydata.name,
      password: querydata.password,
    },
  });
};

module.exports = { createnewuser, newuserform, userprofile };
