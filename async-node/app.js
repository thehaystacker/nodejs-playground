// API
// https://api.darksky.net/forecast/b89fd11ec115964c7331e702bb467fac/37.8267,-122.4233

const apiUrl =
  "https://api.darksky.net/forecast/b89fd11ec115964c7331e702bb467fac/37.8267,-122.4233";

// // USING DEFAULT https MODULE

// const https = require("https");

// https
//   .get(apiUrl, response => {
//     let chunkString = "";

//     response.on("data", chunk => {
//       chunkString += chunk;
//     });

//     response.on("end", () => {
//       console.log("[data]", JSON.parse(chunkString));
//     });
//   })
//   .on("errro", error => {
//     console.log("[error]", error);
//   });

// // USING request NPM PACKAGE

// const request = require("request");

// request(apiUrl, { json: true }, (error, response, body) => {
//   if (error) {
//     return console.log("[error]", error);
//   }
//   console.log("[response]", response);
//   console.log("[statusCode]", response && response.statusCode);
//   console.log("[body]", body);
// });

// // USING axios npm PACKAGE
// const axios = require('axios');

// axios.all([
//     firstUrl, 
//     secondUrl
// ]).then(axios.spread((response1, response2) => {
//     console.log(response1.data);
//     console.log(response2.data);
    
// })).catch(error => {
//     console.log('[error]', error);
    
// });