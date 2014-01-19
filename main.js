var fs = require("fs");
var system = require("system");
var term = require("ringo/term");

var viewer = require("./viewer");
var convolution = require("./convolution");
var transform = require("./transform");

/*
if (system.args.length !== 3) {
   term.writeln("Insufficient arguments!");
   system.exit(1);
}

if (!fs.exists(system.args[1])) {
   term.writeln("First parameter is the input image!");
   system.exit(1);
}

transform.resize(system.args[1], system.args[2], Math.pow(500, 2));
*/

//var img = javax.imageio.ImageIO.read(new java.io.File(system.args[2]));

/*viewer.viewImage(convolution.filter(img, [
   [1,0,-1],
   [2,0,-2],
   [1,0,-1]
]));
*/

//viewer.viewImage(img);

var modb = require("./modb");

if (system.args.length < 2) {
   term.writeln("Insufficient arguments!");
   system.exit(1);
}

var db = modb.open(system.args[1]);

if (system.args.length === 3) {
   var file = fs.open(system.args[2], {
      write: true,
      binary: false
   });

   file.writeLine("@RELATION mediaobjects");
   file.writeLine("@ATTRIBUTE value NUMERIC");
   file.writeLine("@ATTRIBUTE class {positive,negative}");

   var rand = new java.util.Random();

   file.writeLine("@DATA");
   db.positiveInstances.forEach(function(element) {
      file.writeLine((5 + rand.nextGaussian()) + ",positive");
   });
   db.negativeInstances.forEach(function(element) {
      file.writeLine((0 + Math.abs(rand.nextGaussian())) + ",negative");
   });

   file.close();
}
