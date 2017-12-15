var mySql = require("server2.js");

var connection = mySql.createConnection({
    host: "localhost",
    user: "ronronrecords",
    password: "Ocilla1944Ron",
    database: "Octogrammar"
});

connection.createConnection(function(err){
    if(err)
    throw err;
    console.log("connected to database");
});

module.exports = connection;