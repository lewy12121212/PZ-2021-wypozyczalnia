import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'

const VehicleItem = (props) => {

    //setVehicle = () => {
    //    var lang = this.dropdown.value;
    //    this.props.onSelectLanguage(lang);            
    //}
    const handleInfoClick = () => {
        props.triggerShowVehiceInfo(props.vehicle);
    }

    const handleRepairInfoClick = () => {
        props.triggerShowRepairForm(props.vehicle);
    }

    return (
        
        <div className="SingleVehicleItem">
            <h2>{props.vehicle['Name']}</h2>
            <p>
                <h5>{props.vehicle['Model']}</h5>
                <img src={props.vehicle['Img']} style={{height: '200px'}} alt="Zdjęcie pojazdu"/>
            </p>
            <div className="input-group mb-3 singleCard">
                <button className="btn btn-warning" onClick={handleInfoClick}>Informacje</button>
                <button className="btn btn-success" onClick={handleRepairInfoClick}>Zakończ serwisowanie</button>
            </div>
        </div>
    );

}

export default VehicleItem;