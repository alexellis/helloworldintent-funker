"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");
var request = require("request");

funker.handle(function(args, callback) {
  console.log(args);
  var ops = {
    json: true,
    uri: "http://api.open-notify.org/astros.json"
  };

  request.get(ops, (err, res, body) => {
    var speechOutput = "There's currently " + body.number + " people in space";
    sample.response.outputSpeech.text = speechOutput;
    sample.card.content = speechOutput;
    callback(sample);
  });
});
