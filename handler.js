"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");
var request = require("request");
let async = require('async');

async.whilst(() => {console.log("Request.."); return true; },
(cb) => {
  funker.handle((args, callback) => {
    console.log(args);
    var ops = {
      json: true,
      uri: "http://api.open-notify.org/astros.json"
    };
    request.get(ops, (err, res, body) => {
      var speechOutput = "There's currently " + body.number + " people in space";
      sample.response.outputSpeech.text = speechOutput;
      sample.response.card.content = speechOutput;
      callback(sample);
      cb();
    });
  });
});
