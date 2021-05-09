import React, {useState, useEffect} from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Axios from 'axios'
import RentalsInfo from './RentalsInfo'
import RepairsInfo from './RepairsInfo'
import MainVehicleInfo from './MainVehicleInfo'
// panel wyświetlania informacji o pojeździe 
// informacje zawarte w tabelach bazy danych
// vdb_vehicles, vdb_vehicles_rentals, vdb_repairs

const VehicleInfoPanel = (props) => {

  const [vehicleData, setVehicleData] = useState([])
  const [vehicleRepairData, setVehicleRepairData] = useState([])
  const [vehicleRentalsData, setVehicleRentalsData] = useState([])

  const headers = { // wyłuskanie parametru ID w celu przekazania parametru na BackEnd
    'Id': props.vehicle['Id']
  }

  useEffect(()=> {
      Axios.get('http://localhost:3001/getVehicleInfo', {headers}).then((response) => {
          setVehicleData(response.data)
      })
  },[]);

  useEffect(()=> {
    Axios.get('http://localhost:3001/getVehicleRepairInfo', {headers}).then((response) => {
        setVehicleRepairData(response.data)
    })
  },[]);

  useEffect(()=> {
    Axios.get('http://localhost:3001/getVehicleRentalsInfo', {headers}).then((response) => {
        setVehicleRentalsData(response.data)
    })
  },[]);

  return (
      <div className="VehicleMainView">
        <MainVehicleInfo vehicleData={vehicleData} />
        <RepairsInfo vehicleRepairData={vehicleRepairData} />
        <RentalsInfo vehicleRentalsData={vehicleRentalsData} />
      </div>
  )
}

export default VehicleInfoPanel;
