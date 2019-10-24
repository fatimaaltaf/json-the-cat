const url = "https://api.thecatapi.com/v1/breeds/search?q=" + process.argv[2];
// const path = process.argv[3];

const request = require('request');
request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  if (error) {
    console.log("Request failed");
  } else {
    const data = JSON.parse(body);
    if (data[0] === undefined) {
      console.log("No cat exists");
    } else {
      console.log(data[0].description);
    }
    // const data = JSON.parse(body);
    // console.log(data[0].description);
  }
});
