import { COLOR_DIVISION, STEP_DIFF } from "../utils/constants";
import { getImageUrl } from "../utils/util";
import { saveAs } from 'file-saver'
import { useEffect, useState } from "react";
import './styles.css';

/** Image Component */
const ImageFormation =(props)=>{
    const [imageUrl, setImageUrl] = useState('');
    
    useEffect(()=>{
        const colorPoints = [];
        const colors = [];
        /** Finding equally disributed numbers which lies in range 0 - 255 */
        for (let i = 1; i <= COLOR_DIVISION; i++) {
            colorPoints.push(i * STEP_DIFF - 1);
        }

        /** Getting all the colors which can be made from above 32 r g b combination */
        colorPoints.forEach(r => {
            colorPoints.forEach(g => {
                colorPoints.forEach(b => {
                    colors.push([r, g, b]);
                });
            })
        });
        setImageUrl(getImageUrl(colors));
    },[]);

    const downloadImage = () => {
        saveAs(imageUrl, 'image.jpg') // Put your image url here.
    }

    return(
        <div id="image-html">
            <button 
                onClick={downloadImage} 
                style={{marginBottom: '5px',cursor: 'pointer', padding: '5px'}}
            >Download Image</button>
            <img src={imageUrl}/>
        </div>
    )
}

export default ImageFormation;