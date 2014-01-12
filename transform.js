addToClasspath("./lib/im4java.jar");
importPackage(Packages.org.im4java.core);

// Always use GraphicsMagick
java.lang.System.setProperty("im4java.useGM", "true");

const PRECISION = 0.9999;

var dimensionsForArea = function(width, height, area) {
   while ((width * height) > 0 && (width * height) > area) {
      width = width * PRECISION;
      height = height * PRECISION;
   };

   return {
      "width": width,
      "height": height
   };
};

var resize = exports.resize = function resize(src, dst, area) {
   var info = new Info(src, true);

   var dim = dimensionsForArea(info.getImageWidth(), info.getImageHeight(), area);

   var cmd = new GraphicsMagickCmd("convert");
   var op = new GMOperation();
   op.addImage();
   op.resize(Math.ceil(dim.width),Math.ceil(dim.height));
   op.addImage();
   cmd.run(op, src, dst);
};
