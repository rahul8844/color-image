import { COLOR_DIVISION, STEP_DIFF } from "../utils/constants";
import { getColors, getImageUrl } from "../utils/util";
import { saveAs } from 'file-saver'
import { useEffect, useState } from "react";
import './styles.css';

/** Image Component */
const ImageFormation =(props)=>{
    const [imageUrl, setImageUrl] = useState('');
    
    useEffect(()=>{
        setImageUrl(getImageUrl(getColors()));
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