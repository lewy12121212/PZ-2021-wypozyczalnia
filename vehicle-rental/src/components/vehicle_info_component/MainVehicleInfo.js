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
                <h5>Typ: {val.Type}</h5>
                <h5>Pojemność silnika: {val.Engine_capacity}</h5>
                <h5>Status: {val.State}</h5>
                <img src={val.Img} style={{height: '200px'}} alt="Zdjęcie pojazdu"/>
                </div>
            )
            })}
            </div>
        </div>

    )
}

export default RentalsInfo;