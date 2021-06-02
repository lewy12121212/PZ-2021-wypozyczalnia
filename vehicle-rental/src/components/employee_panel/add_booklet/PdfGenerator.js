import React from 'react';
import jsPDF from 'jspdf'

class PdfGenerator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    };

    generatePDF = () => {
        var doc = new jsPDF('p', 'pt');
        doc.text(20, 40, 'Nasza oferta:')
        doc.addFont('helvetica', 'normal')

        var i = 1

        this.props.chooseVehicleList.map(function(val){
            doc.text(140, i * 120 + 30, val.Id + ": " + val.Name); 
            doc.text(140, i * 120 + 50, "Model:" + val.Model +", Typ: " + val.Type); 
            doc.text(140, i * 120 + 70, "Silnik:" + val.Engine_capacity); 
            doc.addImage(val.Img, 'JPEG', 20, i * 120, 100, 100);
            doc.line(20, i * 120 + 110, 570, i * 120 + 110);
            i += 1;
            return 0
        })
        doc.save('demo.pdf')
    }   
    
    render() {
        return (
            <div>
            <button className="btn btn-success" onClick={this.generatePDF} type="primary">Generuj broszurę</button> 
            </div>
        );
    }
}

export default PdfGenerator;