// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("song", "id", "ChangeMe123", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

newFunction();
  function newFunction() {
    connect.createConnection(function (err) {
      if (err)
        throw err;
      console.log("connected to database");
      // Exports the connection for other files to use
      module.exports = sequelize;
    });
  }

