var io = require("io"),
    fs = require("fs");

function ArffWriter(path) {

   var file = null;

   this.open = function () {
      file = fs.open(path, {
         write: true,
         binary: false
      });
   };

   this.relation = function (name) {
      file.writeLine("@RELATION " + name);
   };

   this.attr = function (definition) {
      file.writeLine("@ATTRIBUTE " + definition);
   };

   this.numericAttr = function (name) {
      this.attr(name + " NUMERIC");
   };

   this.nominalAttr = function (name, classes) {
      this.attr(name + " {" + classes.join(",") + "}");
   };

   this.stringAttr = function (name) {
      this.attr(name + " STRING");
   };

   this.data = function () {
      file.writeLine("");
      file.writeLine("@DATA");
   };

   this.instance = function() {
      var args = Array.prototype.slice.call(arguments);
      file.writeLine(args.reduce(function(previousValue, currentValue) {
         return previousValue + "," + (currentValue !== null ? currentValue : "?");
      }));
   };

   this.close = function () {
      file.close();
   };

};

exports.getArffWriter = function getArffWriter(path) {
   return new ArffWriter(path);
};