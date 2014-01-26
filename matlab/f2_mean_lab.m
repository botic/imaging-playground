function [ meanLum ] = f2_mean_lab( file )
    %F2_MEAN_LAB Calculates the mean luminance of the image
    
    disp(file);
    img = imread(file);
    
    if size(img, 3) > 2
        labImg = applycform(img, makecform('srgb2lab'));
        meanLum = mean(mean(labImg(:,:,1)));
    else
        meanLum = -1;
    end
end

