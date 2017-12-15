var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("song", "id", "ChangeMe123", {
  host: "localhost",
  dialect: "mysql",
  database: "octogrammar",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
