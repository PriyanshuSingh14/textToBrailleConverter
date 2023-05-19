import DropPdf from './DropPdf.js';
import './PdfBox.css';
import SelectPdf from './SelectPdf.js';


function PdfBox(){
    return (
        <div className="pdfInputBox">
            <SelectPdf></SelectPdf>
            <DropPdf></DropPdf>
            

    </div>
    );
}
export default PdfBox;