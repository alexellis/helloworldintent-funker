"use strict"

let funker = require("./funker-node");
let sample = require("./sampleresponse.json");

funker.handle(function(args, callback) {
  console.log(args);

  callback(sample);
});
