const axios = require('axios');


let asterioidService = {

    /**
     * gets all asteroids from Nasa for a given date
     * @param {string} date - A string that represents the starting and ending dates
     */
    getAstroidsByDate: function(date) {

        // Make a request for a user with a given ID
        return axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=DEMO_KEY`)
        .then(function (response) {
            // handle success
            console.log( response.data.near_earth_objects[date] );
            return response.data.near_earth_objects[date];
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            return []; // Safe value if no data found
        });

    }

};

module.exports = asterioidService;