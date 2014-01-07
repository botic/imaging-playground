addToClasspath("./lib/im4java.jar");
importPackage(Packages.org.im4java.core);

var fs = require("fs");
var system = require("system");
var term = require("ringo/term");
var viewer = require("./viewer");
var convolution = require("./convolution");

if (system.args.length !== 3) {
   term.writeln("Insufficient arguments!");
   system.exit(1);
}

if (!fs.exists(system.args[1])) {
   term.writeln("First parameter is the input image!");
   system.exit(1);
}

var cmd = new GraphicsMagickCmd("convert");
var op = new GMOperation();
op.addImage();
op.resize(600,600);
op.addImage();
cmd.run(op, system.args[1], system.args[2]);

var img = javax.imageio.ImageIO.read(new java.io.File(system.args[2]));

viewer.viewImage(convolution.filter(img, [
   [1,0,-1],
   [2,0,-2],
   [1,0,-1]
]));
