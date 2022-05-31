const Sequelize = require("sequelize");

const sequelize = new Sequelize("mylocaldb", "tushar", "tushar", {
  host: "localhost",
  dialect: "postgres",
});
module.exports = sequelize;
