import { COlOR_DIVISION, STEP_DIFF } from "../utils/constants";
import { getImageUrl } from "../utils/util";

const ImageFormation =(props)=>{
    const colorPoints = [];
    const colors = [];
    for (let i = 1; i <= COlOR_DIVISION; i++) {
        colorPoints.push(i*STEP_DIFF);
    }
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

export default ImageFormation