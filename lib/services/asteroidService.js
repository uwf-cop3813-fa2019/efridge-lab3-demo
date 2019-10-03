const axios = require('axios');


let asterioidService = {

    /**
     * gets all asteroids from Nasa for a given date
     * @param {string} startDate - A string that represents the starting date
     * @param {string} endDate - A string that represents the ending date
     * @param {boolean} filterDangerous - A boolean that says if we need to filter only dangerous asteroids
     */
    getAstroidsByDate: function(startDate, endDate, filterDangerous = false) {

        // Make a request for a user with a given ID
        return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=DEMO_KEY`)
        .then(function (response) {

            let asteroids = response.data.near_earth_objects;
            let allAsteroids = [];
            // Build an array with asteroids in it
            Object.keys(asteroids).forEach(function(key) {
                allAsteroids = allAsteroids.concat(asteroids[key]);
            });

            // If we are filtering dangerous ones, run the the array through a filter first
            if(filterDangerous) {
                return allAsteroids.filter( a => {
                    return a.is_potentially_hazardous_asteroid;
                });

            // Otherwise return an array with all the asteroids in it
            } else {
                return allAsteroids;
            }

        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return []; // Safe value if no data found
        });

    }

};

module.exports = asterioidService;