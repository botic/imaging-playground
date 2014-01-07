addToClasspath("./lib/im4java.jar");
importPackage(Packages.org.im4java.core);

var system = require("system");
var term = require("ringo/term");
var viewer = require("./viewer");

if (system.args.length !== 3) {
   term.writeln("Insufficient arguments!");
   system.exit(1);
}

var cmd = new GraphicsMagickCmd("convert");
var op = new GMOperation();
op.addImage();
op.resize(300,200);
op.addImage();
cmd.run(op, system.args[1], system.args[2]);

var img = javax.imageio.ImageIO.read(new java.io.File(system.args[1]));

var rgbFilter = new JavaAdapter(java.awt.image.RGBImageFilter, {
   filterRGB: function (x, y, rgb) {
        return (  (rgb & 0x00000000)
                | (rgb & 0xffff0000)
                | (rgb & 0x00000000));
    }
});

img = java.awt.Toolkit.getDefaultToolkit().createImage(
   new java.awt.image.FilteredImageSource(img.getSource(), rgbFilter)
);


var kernel = new java.awt.image.Kernel(3,3, [
   1,0,-1,
   2,0,-2,
   1,0,-1
]);

//var op = java.awt.image.ConvolveOp(kernel, java.awt.image.ConvolveOp.EDGE_NO_OP, null);
//viewer.viewImage(op.filter(img, null));
viewer.viewImage(img);