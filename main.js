var fs = require("fs");
var system = require("system");
var term = require("ringo/term");

var viewer = require("./viewer");
var convolution = require("./convolution");
var transform = require("./transform");
var weka = require("./weka-utils");
var matlab = require("./matlab-utils");

var modb = require("./modb");

var proxy = matlab.getProxy(false);
proxy.eval("addpath('" + module.resolve("./matlab") + "')");

if (system.args.length < 2) {
   term.writeln("Insufficient arguments!");
   system.exit(1);
}

var db = modb.open(system.args[1]);

if (system.args.length === 3) {
   var arffWriter = weka.getArffWriter(system.args[2]);

   arffWriter.open();
   arffWriter.relation("mean-hue");
   arffWriter.numericAttr("meanhue");
   arffWriter.numericAttr("meansat");
   arffWriter.numericAttr("meanval");
   arffWriter.numericAttr("meanlum");
   arffWriter.nominalAttr("class", ["positive", "negative"]);

   var rand = new java.util.Random();

   arffWriter.data();
   db.positiveInstances.forEach(function(path) {
      proxy.eval("[h, s, v] = f1_mean_hsv('" + path + "')");
      proxy.eval("[l] = f2_mean_lab('" + path + "')");

      var h = proxy.getVariable("h")[0];
      var s = proxy.getVariable("s")[0];
      var v = proxy.getVariable("v")[0];
      var l = proxy.getVariable("l")[0];

      if (h >= 0 && s >= 0 && v >= 0) {
         arffWriter.instance(h, s, v, l, "positive");
      }
   });
   db.negativeInstances.forEach(function(path) {
      proxy.eval("[h, s, v] = f1_mean_hsv('" + path + "')");
      proxy.eval("[l] = f2_mean_lab('" + path + "')");

      var h = proxy.getVariable("h")[0];
      var s = proxy.getVariable("s")[0];
      var v = proxy.getVariable("v")[0];
      var l = proxy.getVariable("l")[0];

      if (h >= 0 && s >= 0 && v >= 0) {
         arffWriter.instance(h, s, v, l, "negative");
      }
   });

   // Close Matlab and ARFF writer
   proxy.disconnect();
   arffWriter.close();
}