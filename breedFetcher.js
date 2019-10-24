// const path = process.argv[3];

const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
 let url = "htps://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(url, (error, response, body) => {
    // console.log('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data[0] === undefined) {
      callback(null, "No cat exists")
      } else {
        console.log(data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription };
