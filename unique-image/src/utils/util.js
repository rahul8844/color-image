import { createCanvas } from 'canvas';
import { IMAGE_SIZE } from './constants';

/* getImage Url generates Image based on colors passed in params */ 
export const getImageUrl = (colors) => {

    // Creating Canvas for image with width-256px and height-128px
    const canvas = createCanvas(IMAGE_SIZE.width, IMAGE_SIZE.height);    

    // taking context of generated canvas
    const ctx = canvas.getContext('2d');      
    
    // creating Image with No color and same size
    const imgData = ctx.createImageData(IMAGE_SIZE.width, IMAGE_SIZE.height);  
    
    for (let i = 0; i < imgData.data.length; i += 4) {  // Filling colors in Image
        const cPos = i / 4;
        imgData.data[i] = colors[cPos][0];
        imgData.data[i + 1] = colors[cPos][1];
        imgData.data[i + 2] = colors[cPos][2];
        imgData.data[i + 3] = 255;
    }
    ctx.putImageData(imgData, 0, 0);                // Putting Image to the canvas so we can get image url
    return canvas.toDataURL();                      // return image url with filled color
}