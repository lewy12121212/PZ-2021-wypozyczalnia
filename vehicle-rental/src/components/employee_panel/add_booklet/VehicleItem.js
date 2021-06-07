import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components_style/style.css'
import '../style.css'
import VehicleInfoPanel from '../../vehicle_info_component/VehicleInfoPanel'

const VehicleItem = (props) => {

    var chooseState = false
    const [vehicleInfo, setVehicleInfo] = useState(false)

    const handleChooseVehicleClick = () => {
        if(chooseState === false){
            props.ChooseVehicle(props.vehicle)
            document.getElementById(props.vehicle['Id']).style.background="rgba(255,0,0,0.5)"
            chooseState = true
        } else if(chooseState === true){
            props.RemoveChooseVehicle(props.vehicle)
            document.getElementById(props.vehicle['Id']).style.background="rgba(255,255,255,0)"
            chooseState = false
        }
    }

    const handleInfoOver = () => {
        setVehicleInfo(true)
    }

    const handleInfoOut = () => {
        setVehicleInfo(false)
    }


    return (
        
        <div className="SingleVehicleItem VehicleItemHover" id={props.vehicle['Id']} onClick={handleChooseVehicleClick} onMouseEnter={handleInfoOver} onMouseLeave={handleInfoOut}>
            <div className="container row">
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
                </div>

            </div>
            { (vehicleInfo === true) && 
                <div className="info_div col-12" id="vehicle_info_div">
                    <VehicleInfoPanel vehicle={props.vehicle} />
                </div>
            }

        </div>
    );

}

export default VehicleItem;