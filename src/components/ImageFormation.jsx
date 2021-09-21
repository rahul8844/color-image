import { COLOR_DIVISION, STEP_DIFF } from "../utils/constants";
import { getImageUrl } from "../utils/util";

/** Image Component */
const ImageFormation =(props)=>{
    const colorPoints = [];
    const colors = [];
    /** Finding equally disributed numbers which lies in range 0 - 255 */
    for (let i = 1; i <= COLOR_DIVISION; i++) {
        colorPoints.push(i*STEP_DIFF - 1 );
    }

    /** Getting all the colors which can be made from above 32 r g b combination */
    colorPoints.forEach(r => {
        colorPoints.forEach(g => {
            colorPoints.forEach(b => {
                colors.push([r, g, b]);
            });
        })
    });
    return(
        <div id="image-html">
            <img src={getImageUrl(colors)}/>
        </div>
    )
}

export default ImageFormation;