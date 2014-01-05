exports.viewImage = function(bufferedImage) {
   var frame = new javax.swing.JFrame("Image Viewer"); 
   frame.setDefaultCloseOperation(javax.swing.JFrame.DISPOSE_ON_CLOSE);

   var pane = frame.getContentPane();
   var label = new javax.swing.JLabel(new javax.swing.ImageIcon(bufferedImage));

   pane.add(new javax.swing.JScrollPane(label), javax.swing.JLabel.CENTER);

   frame.setSize(960, 600);
   frame.setVisible(true);
};