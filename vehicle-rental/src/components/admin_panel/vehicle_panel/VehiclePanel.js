import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const VehiclePanel = (props) => {

    return (
        <div>
            <h4>Menadżer pojazdów</h4>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default VehiclePanel;


