import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const DelVehicle = (props) => {

    const [vehicleList, setVehicleList] = useState([])
    const [vehicleId, setVehicleId] = useState('')

    const headers = { // wyłuskanie parametru ID w celu przekazania parametru na BackEnd
        'id': vehicleId
    }

    useEffect(()=> {
        Axios.get('http://localhost:3001/getVehicleList').then((response) => {
            setVehicleList(response.data)
        })
    },[])

    const submitDelVehicle = () => {
        Axios.delete('http://localhost:3001/deleteVehicle', {headers}).then(
            alert("Pojazd popranie usunięto! :)"),
            props.refresh()
        )
    }

    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <table className="col-10 center-block text-center">
                <tr>
                    <th><h5>Usuń pojazd</h5></th>
                </tr>
                <tr>
                    <td>
                        <select class="form-select form-select-lg mb-3 col-12" onChange={(e) => {
                            setVehicleId(e.target.value)
                            console.log("ustawiono:"+ vehicleId)
                        }}>
                            <option selected>...Wybierz pojazd</option>
                            {vehicleList.map((val) => {
                                return (
                                    <option value={val.Id}>{val.Id}. {val.Name} {val.Model}</option>
                                )
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><input type="button" className="btn btn-danger" value="usuń pojazd" onClick={submitDelVehicle}></input></td>
                </tr>
            </table>
        </div>
    );
}

export default DelVehicle;


