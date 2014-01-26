function [ meanHue, meanSat, meanVal ] = f1_mean_hsv( file )
    % calculates the mean hsv values for a rgb image
    disp(file);
    img = imread(file);
    
    if size(img, 3) > 2
        hsv = rgb2hsv(img);
        meanHue = mean(mean(hsv(:,:,1)));
        meanSat = mean(mean(hsv(:,:,2)));
        meanVal = mean(mean(hsv(:,:,3)));
    else
        meanHue = -1;
        meanSat = -1;
        meanVal = -1;
    end
end