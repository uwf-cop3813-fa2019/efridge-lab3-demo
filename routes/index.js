var express = require('express');
var router = express.Router();

const asteroidService = require('../lib/services/asteroidService');

// Lets the user get all asteroids for new years day for a
// given year
router.get('/', async function(req, res) {

  // If we get a year passed in as a query param
  if(req.query.year) {
    console.log(req.query.year);

    // Get the asteroid data for that year
    let asteroids = await asteroidService.getAstroidsByDate(req.query.year + "-01-01");
    // Show it to the user
  
    res.render('index', { 
      title: "Asteroids for " + req.query.year,
      asteroids: asteroids 
    });
  } else {
    res.render('index', { 
      title: "Error: no year provided",
      asteroids: [] 
    });
  }


});


module.exports = router;
