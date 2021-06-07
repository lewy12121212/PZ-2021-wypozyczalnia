/* eslint-disable react-hooks/exhaustive-deps */ //usunięcie ostrzeżenia o niestepłnionych zależnościch (headers in UseEffect)
import React, {useState, useEffect} from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import Axios from 'axios'
// panel wyświetlania informacji o pojeździe 
// informacje zawarte w tabelach bazy danych
// vdb_vehicles, vdb_vehicles_rentals, vdb_repairs

const AddRepairPanel = (props) => {

  const vehicleId = props.vehicle['Id']
  const [reparerId, setReparerId] = useState("")
  const [replacedParts, setReplacedParts] = useState("")
  const [activitiesPerformed, setActivitiesPerformed] = useState("")

  const [usersList, setUsersList] = useState([])
  const [repairData, setRepairData] = useState([])

  const headers = { // wyłuskanie parametru ID w celu przekazania parametru na BackEnd
    'userstype': 'serwisant'
  }

  useEffect(()=> {
    Axios.get('http://localhost:3001/getUsersInfo', {headers}).then((response) => {
      setUsersList(response.data)
    })
  }, []);


  const submitAddRepair = () => { // to instert data


    if(reparerId !== "" && vehicleId !== "" && replacedParts !== ""  && activitiesPerformed !== ""){ //typeof ? 
      setRepairData([
          ...repairData, 
          {
            Reparer_id: reparerId,
            Vehicle_id: vehicleId,
            Replaced_parts: replacedParts,
            Activities_performed: activitiesPerformed
          }
      ]);
      Axios.post('http://localhost:3001/insertRepair', {
        reparerId: reparerId, 
        vehicleId: vehicleId,
        replacedParts: replacedParts,
        activitiesPerformed: activitiesPerformed
      });

    } else {
      console.log("undefined data of repair :(")
      alert("Nie wypełniono potrzebnych danych!")
    }

  };


  return (
    <div className="VehicleMainView">
      Id pojazdu: {vehicleId}
      <h2>Zakończ serwisowanie</h2>
      <form>
        <table className="">
          <tr>
            <td>Id serwisanta:</td>
            <td>
              <select onChange={(e) => {
                setReparerId(e.target.value)
              }}>
                <option value="">...Wybierz serwisanta</option>
                {usersList.map((val) => {
                return (
                    <option value={val.Id}>
                      {val.Id}, {val.Name}, {val.Surname}
                    </option>
                )
                })}
              </select>
            </td>
          </tr>
          <tr>
            <td>Wymienione części:</td>
            <td>
              <textarea cols="50" rows="5" onChange={(e) => {
                setReplacedParts(e.target.value)
              }}></textarea>
            </td>
          </tr>
          <tr>
            <td>Wykonane czynności:</td>
            <td>
              <textarea cols="50" rows="5" onChange={(e) => {
                setActivitiesPerformed(e.target.value)
              }} ></textarea>
            </td>
          </tr>
          <tr>
            <td>
              <button className="btn btn-primary" onClick={submitAddRepair}>Zakończ serwisowanie</button>
            </td>
          </tr>
        </table>
      </form>
    </div>
  )
}

export default AddRepairPanel;
