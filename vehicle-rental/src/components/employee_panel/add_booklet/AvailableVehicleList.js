import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components_style/style.css'
import '../style.css'
import VehicleItem from './VehicleItem';

const AvailableVehicleList = (props) => {

    const [vehicleList, setVehiceList] = useState([])

    useEffect(()=> {
        Axios.get('http://localhost:3001/getAvailableVehicleList').then((response) => {
            setVehiceList(response.data)
        })
    },[]);

    return (
        <div>
            {vehicleList.map((val) => {
                return (
                    <div>
                        <label><input type="checkbox" value={val.Id}></input></label>
                        <VehicleItem vehicle={val} ChooseVehicle={props.ChooseVehicle} /> 
                    </div>
                ); // przekazanie parametrów do komponentu pojedynczego "itemu"
            })}
        </div>
    );
}

export default AvailableVehicleList;
