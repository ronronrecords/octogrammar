// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var song = require("octogrammar/server.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Search for Specific song (or all songs) then provides JSON
  app.get("/api/:song?", function(req, res) {

    // If the user provides a specific song in the URL...
    if (req.params.song) {

      // Then display the JSON for ONLY that song.
      // (Note how we're using the ORM here to run our searches)
      song.findOne({
        where: {
          title: req.params.song
        },
        attributes: ['id', 'name']
      }).then(function(result) {
        return res.json(result);
      });
    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the songs.
      // (Note how we're using Sequelize here to run our searches)
      song.findAll({})
        .then(function(result) {
          return res.json(result);
        });
    }

  });

  // If a user sends data to add a new song...
  app.post("/api/new", function(req, res) {

    // Take the request...
    var song = req.body;

    // Create a routeName
    var routeName = song.name.replace(/\s+/g, "").toLowerCase();

    // Then add the song to the database using sequelize
    song.create({
      title:song.title,
      id: song.id,
      writers: song.wrtiters,
      dateCreated: song.dateCreated,
      dateModified: song.dateModified
    });
  });
};

