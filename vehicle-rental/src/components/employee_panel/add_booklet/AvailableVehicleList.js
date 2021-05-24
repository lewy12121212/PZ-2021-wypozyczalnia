import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components_style/style.css'
import '../style.css'
import VehicleItem from './VehicleItem';
import PdfGenerator from './PdfGenerator';

const AvailableVehicleList = (props) => {

    const [vehicleList, setVehiceList] = useState([])
    //const [chooseVehicleList,  = useState([])
    var chooseVehicleList = []

    useEffect(()=> {
        Axios.get('http://localhost:3001/getAvailableVehicleList').then((response) => {
            setVehiceList(response.data)
        })
    },[]);

    const ChooseVehicle = (vehicle) => {
        chooseVehicleList.push(vehicle)
    }

    const RemoveChooseVehicle = (vehicle) => {
        chooseVehicleList.pop(vehicle)
    }

    return (
        <div>
            {vehicleList.map((val) => {
                return (
                    <div>
                        <VehicleItem vehicle={val} ChooseVehicle={ChooseVehicle} RemoveChooseVehicle={RemoveChooseVehicle}/> 
                    </div>
                ); // przekazanie parametrów do komponentu pojedynczego "itemu"
            })}
            <PdfGenerator chooseVehicleList={chooseVehicleList}/>
        </div>
    );
}

//                         <label><input type="checkbox" value={val.Id}></input></label>
export default AvailableVehicleList;
