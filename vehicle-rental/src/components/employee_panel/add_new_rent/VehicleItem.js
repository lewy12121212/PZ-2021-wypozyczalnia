import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components_style/style.css'
import '../style.css'

const VehicleItem = (props) => {

    const handleChooseVehicleClick = () => {
        props.ChooseVehicle(props.vehicle)
    }

    return (
        
        <div className="SingleVehicleItem VehicleItemHover">
            <div className="container row" onClick={handleChooseVehicleClick}>
                <div className="col-2 box">
                    <img src={props.vehicle['Img']} style={{height: '100px'}} alt="Zdjęcie pojazdu"/>
                </div>
                <div className="col-4 align-self-center text-center box">
                    <h2>{props.vehicle['Name']}</h2>
                    <h5>{props.vehicle['Model']}</h5>
                </div>
                <div className="col-4 align-self-center text-center box">
                    <h5>Typ pojazdu: {props.vehicle['Type']}</h5>
                    <h5>Pojemość silnika: {props.vehicle['Engine_capacity']}</h5>
                </div>
                <div className="col-2 align-self-center box">
                    <button className="btn btn-warning">Informacje</button>
                </div>

            </div>

        </div>
    );

}

export default VehicleItem;