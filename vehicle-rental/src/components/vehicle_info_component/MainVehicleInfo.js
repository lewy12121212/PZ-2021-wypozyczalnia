import React from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

//wyświetlanie podstawowych informacji o pojedździe
// tabela vdb_vehicles
const RentalsInfo = (props) => {

    return(
        <div>
            <h1>Informacje o pojedździe</h1>
            <div className="MainInfo">
            {props.vehicleData.map((val) => {
            return (
                <div className="VehicleInfoDiv">
                <h2>{val.Name}</h2>
                <h5>Id: {val.Id}</h5>
                <h5>Model: {val.Model}</h5>
                <h5>Type: {val.Type}</h5>
                <h5>Engine capacity: {val.Engine_capacity}</h5>
                <h5>State: {val.State}</h5>
                </div>
            )
            })}
            </div>
        </div>

    )
}

export default RentalsInfo;