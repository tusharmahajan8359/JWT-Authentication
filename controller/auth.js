const jwt = require("jsonwebtoken");
const jwtKey = "tusharmahajansimformsolutions";
const Customer = require("../models/index");
const sequelize = require("../utils/database");
function verifyToken(req, res, next) {
  let token;
  let data = req.query || req.body;
  sequelize.sync().then(() => {
    //res.json(data.id);
    Customer.findByPk(data.id).then((response) => {
      //res.json({ response });
      token = response.token;

      const verified = jwt.verify(token, jwtKey);

      if (verified.id == data.id && verified.id == data.id) {
        next();
      } else {
        res.json({ result: "!Token not Found" });
      }
    });
  });
}

module.exports = verifyToken;
