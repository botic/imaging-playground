importPackage(java.awt);
importPackage(java.awt.image);

var filter = exports.filter = function filter (image, kernel) {
   if (!Array.isArray(kernel)
      || !kernel.reduce(function(onlyArrays, value) { return onlyArrays && Array.isArray(value); }, true) ) {
      throw "Kernel is not in the form [[],[],...]";
   }

   return (new ConvolveOp(
      new Kernel(kernel[0].length, kernel.length, Array.prototype.concat.apply([], kernel)),
      ConvolveOp.EDGE_NO_OP,
      null
   )).filter(image, null);
};