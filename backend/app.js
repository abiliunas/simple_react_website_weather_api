const { response } = require("express");
const express = require("express");
var request = require("request");
const app = express();
const port = 4000;

app.get("/getweather", (req, res) => {
  request(
    "http://api.weatherapi.com/v1/current.json?key=237d59f2dcd04a8b8d2165536221606&q=" +
      "Vilnius",
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var parsed = JSON.parse(body);
        var temp = parsed["current"]["temp_c"];
        res.send({ temp });
      }
    }
  );
});
