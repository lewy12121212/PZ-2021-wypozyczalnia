import React, {useState, useEffect} from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Axios from 'axios'

// panel wyświetlania informacji o pojeździe 
// informacje zawarte w tabelach bazy danych
// vdb_vehicles, vdb_vehicles_rentals, vdb_repairs

const VehicleInfoPanel = (props) => {

  const [vehicleData, setVehicleData] = useState([])
  const [vehicleRepairData, setVehicleRepairData] = useState([])
  const [vehicleRentalsData, setVehicleRentalsData] = useState([])

  const headers = {
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
        <h1>Informacje o pojedździe</h1>
        <div className="MainInfo">
          {vehicleData.map((val) => {
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

        
        <div className="RepaiInfo">
          <h4>Informacje o naprawach pojazdu</h4>
          <div className="VehicleInfoDiv">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Id mechanika</th>
                    <th scope="col">Id pojazdu</th>
                    <th scope="col">Wymienione części</th>
                    <th scope="col">Wykonane czynności naprawcze</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleRepairData.map((val) => {
                    return (
                      <tr>
                        <th scope="row">{val.Id}</th>
                        <td>{val.Reparer_id}</td>
                        <td>{val.Vehicle_id}</td>
                        <td>{val.Replaced_parts}</td>
                        <td>{val.Activities_performed}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        </div>

        <div className="RepaiInfo">
          <h4>Informacje o wypożyczeniach pojazdu</h4>
          <div className="VehicleInfoDiv">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Id klienta</th>
                    <th scope="col">Id pojazdu</th>
                    <th scope="col">Data wypożyczenia</th>
                    <th scope="col">Przewidywana data zwrotu</th>
                    <th scope="col">Status wypożyczenia</th>
                  </tr>
                </thead>
                <tbody>
                  {vehicleRentalsData.map((val) => {
                    return (
                      <tr>
                        <th scope="row">{val.Id}</th>
                        <td>{val.Customer_id}</td>
                        <td>{val.Vehicle_id}</td>
                        <td>{val.Rent_data}</td>
                        <td>{val.Return_data}</td>
                        <td>{val.State}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        </div>
      </div>
  )
}

export default VehicleInfoPanel;
