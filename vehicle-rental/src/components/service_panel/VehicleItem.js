import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'

const VehicleItem = (props) => {

    //setVehicle = () => {
    //    var lang = this.dropdown.value;
    //    this.props.onSelectLanguage(lang);            
    //}
    const handleClick = () => {
        props.triggerShowVehiceInfo(props.vehicle);
    }

    return (
        
        <div className="SingleVehicleItem">
            <h2>{props.vehicle['Name']}</h2>
            <p>
                <h5>{props.vehicle['Model']}</h5>
            </p>
            <div className="input-group mb-3 singleCard">
                <button className="btn btn-warning" onClick={handleClick}>Informacje</button>
                <button className="btn btn-success">Dodaj czynności serwisowe</button>
            </div>
        </div>
    );

}

export default VehicleItem;