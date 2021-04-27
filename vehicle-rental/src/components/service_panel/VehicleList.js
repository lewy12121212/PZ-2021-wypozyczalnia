import React, { useState, useEffect} from 'react'
import VihicleItem from './VehicleItem'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'
import VehicleItem from './VehicleItem';

const VehicleList = (props) => {

    const [vehicleList, setVehiceList] = useState([])

    useEffect(()=> {
        Axios.get('http://localhost:3001/getVehicleList').then((response) => {
            setVehiceList(response.data)
        })
    },[]);

    return (
        <div>
            {vehicleList.map((val) => {
                if(props.listParam == val.State){ //listowanie w zależności od statusu pojazdu
                    return (
                        <VehicleItem vehicle={val} triggerShowVehiceInfo={props.triggerShowVehiceInfo} setActiveVehicle={props.handleVehicle}/>  
                    ); // przekazanie parametrów do komponentu pojedynczego "itemu"
                }
            })}
        </div>
    );
}

export default VehicleList;
