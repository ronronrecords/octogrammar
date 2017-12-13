// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var song = require("octogrammar/server.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function(req, res) {

    // If the user provides a specific character in the URL...
    if (req.params.song) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      song.findOne({
        where: {
          routeName: req.params.song
        },
        attributes: ['id', 'name']
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using Sequelize here to run our searches)
      song.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var song = req.body;

    // Create a routeName
    var routeName = song.name.replace(/\s+/g, "").toLowerCase();

    // Then add the character to the database using sequelize
    song.create({
      routeName: routeName,
      title: song.name,
      id: song.role,
      writers: song.age,
      forcePoints: song.forcePoints
    });
  });
};
