import './outbox.css';
// import imgsym from "./image.jpg";
import PdfBox from './PdfBox.js';
import ConvertButtonPdf from './ConvertButtonPdf.js';
import ConvertbtnAudio from './ConvertbtnAudio.js';
function OutBox(){
    return(
        <div className="outbox">
           {/* <div className="image">
            <img src={imgsym } alt="help_them" height="110px" width="110px" ></img>
            </div>  */}
            <div className="title">
                <strong>TEXT TO BRAILLE OR SOUND</strong>
            </div>
            <PdfBox></PdfBox>
            <ConvertButtonPdf></ConvertButtonPdf>
            <ConvertbtnAudio></ConvertbtnAudio>
        </div>
    );
}

export default OutBox;