import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import AddVehicle from './AddVehicle'
import DelVehicle from './DelVehicle'

const VehiclePanel = (props) => {

    return (
        <div>
            <h4>Menadżer użytkowników</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AddVehicle refresh={props.triggerShowMainPanel}/>
                    </div>
                    <div className="col">
                        <DelVehicle refresh={props.triggerShowMainPanel}/>    
                    </div>
                </div>
            </div>
            <br></br>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default VehiclePanel;





