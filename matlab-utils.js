addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/activation.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/activationclient.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/appmanagement.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/bde.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/beans.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/common.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/comparisons.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/deactivation.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/desktop.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/fatalexit.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/foundation_libraries.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/hg.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/html.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/ide.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/install.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/instutil.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/instwiz.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/jmi.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/lmlogin.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/matlab.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mde.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mlservices.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mlwebservices.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mlwidgets.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mvm.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mwswing.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/mwt.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/net.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/page.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/product.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/publishparser.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/resource_core.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/services.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/timer.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/toolstrip.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/util.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/vrd.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/webintegration.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/webproxy.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/widgets.jar");
addToClasspath("/Applications/MATLAB_R2013b.app/java/jar/xml.jar");

addToClasspath("./jars/matlabcontrol.jar")

importPackage(Packages.matlabcontrol);

var log = require("ringo/logging").getLogger(module.id);

var getProxy = exports.getProxy = function(hidden) {
   var factory = new MatlabProxyFactory(MatlabProxyFactoryOptions.Builder().setHidden(hidden).build());
   return factory.getProxy();
};