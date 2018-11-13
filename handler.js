"use strict";

const axios = require("axios");
const tw = require("./config");

module.exports.dadJoke = async (event, context) => {
  try {
    const getJoke = await axios({
      url: "https://icanhazdadjoke.com/",
      headers: {
        Accept: "application/json"
      }
    });

    tw.post("statuses/update", { status: getJoke.data.joke }, function(
      error,
      tweet,
      response
    ) {
      if (error) {
        console.log(error);
      }
      console.log(tweet); // Tweet body.

      //console.log(response); // Raw response object.
    });
  } catch (err) {
    console.log(`Error => ${err}`);
  }
};
