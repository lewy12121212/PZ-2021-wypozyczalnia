import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'
import VehicleItem from './VehicleItem';

const VehicleList = (props) => {

    const [vehicleList, setVehiceList] = useState([])
    const [forRefresh, setForRefresh] = useState(false)

    useEffect(()=> {
        Axios.get('http://localhost:3001/getVehicleList').then((response) => {
            setVehiceList(response.data)
        })
    },[]);

    function triggerRefreshPanel(){
        Axios.get('http://localhost:3001/getVehicleList').then((response) => {
            setVehiceList(response.data)
        })

        if(this.for_refresh === false){
            setForRefresh(true)
        } else {
            setForRefresh(false)
        }

        props.triggerRefreshPanel()
    }

    return (
        <div>
            {vehicleList.map((val) => {
                if(props.listParam === val.State){ //listowanie w zależności od statusu pojazdu
                    return (
                        <VehicleItem 
                            vehicle={val} 
                            triggerShowVehiceInfo={props.triggerShowVehiceInfo} 
                            triggerShowRepairForm={props.triggerShowRepairForm} 
                            setActiveVehicle={props.handleVehicle}
                            triggerRefreshPanel={triggerRefreshPanel}
                        />  
                    ); // przekazanie parametrów do komponentu pojedynczego "itemu"
                } else {
                    return ("") // w celu usunięcią ostrzeżenia
                }
            })}
        </div>
    );
}

export default VehicleList;
