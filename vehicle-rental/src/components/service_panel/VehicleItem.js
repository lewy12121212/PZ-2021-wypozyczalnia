import React, { useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'

const VehicleItem = (props) => {

    return (
        
        <div className="SingleVehicleItem">
            <h2>{props.name}</h2>
            <p>
                <h5>{props.model}</h5>
            </p>
            <div className="input-group mb-3 singleCard">
                <button className="btn btn-warning">Informacje</button>
                <button className="btn btn-success">Dodaj czynności serwisowe</button>
            </div>
        </div>
    );

}

export default VehicleItem;