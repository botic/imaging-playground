importPackage(java.nio.file);

var log = require("ringo/logging").getLogger(module.id);

var createVisitor = function(files, positive, path) {
   return new JavaAdapter(java.nio.file.SimpleFileVisitor, {
      preVisitDirectory: function (dir, attrs) {
         if (path.equals(dir) || dir.toString().toLowerCase().indexOf(positive ? "_positive_" : "_negative_") >= 0) {
            return FileVisitResult.CONTINUE;
         } else {
            return FileVisitResult.SKIP_SUBTREE;
         }
      },
      visitFile: function (file, attrs) {
         files.push(file.toString());
         return FileVisitResult.CONTINUE;
      }
   });
};

function Database (path) {
   this.positiveInstances = [];
   this.negativeInstances = [];

   java.nio.file.Files.walkFileTree(FileSystems.getDefault().getPath(path), java.util.EnumSet.of(FileVisitOption.FOLLOW_LINKS), 10, createVisitor(this.positiveInstances, true, FileSystems.getDefault().getPath(path)));
   java.nio.file.Files.walkFileTree(FileSystems.getDefault().getPath(path), java.util.EnumSet.of(FileVisitOption.FOLLOW_LINKS), 10, createVisitor(this.negativeInstances, false, FileSystems.getDefault().getPath(path)));

};

exports.open = function (path) {
   return new Database(path);
};