importPackage(javax.swing);

exports.viewImage = function viewImage(bufferedImage) {
   var frame = new JFrame("Image Viewer");
   frame.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);

   var pane = frame.getContentPane();
   var label = new JLabel(new ImageIcon(bufferedImage));

   pane.add(new JScrollPane(label), JLabel.CENTER);

   frame.setSize(960, 600);
   frame.setVisible(true);
};