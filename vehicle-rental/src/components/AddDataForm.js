import React, { useState, useEffect} from 'react'
import Axios from 'axios'
//import Button from 'react-bootstrap/Button';
//import 'bootstrap/dist/css/bootstrap.min.css';

const AddDataForm = props => {

    const [vehicleName, setVehicleName] = useState("")
    const [vehicleModel, setVehicleModel] = useState("")
    const submitAddVehicle = () => {
        Axios.post('http://localhost:3001/insertVehicle', {
            vehicleName: vehicleName, 
            vehicleModel: vehicleModel
        }).then(() => {
            alert("Nowy pojazd poprawnie dodano do bazy")
        });
    }

    return (
        <div className='dataForm'>
            <h1>Test add data to database</h1>
            <label>Nazwa pojazdu</label>
            <input type="text" name="vahicleName" onChange={(e) => {
                setVehicleName(e.target.value)
            }} />
            <label>Model pojazdu</label>
            <input type="text" name="vahicleModel" onChange={(e) => {
                setVehicleModel(e.target.value)
            }}/>
            <input type="button" className="btn btn-success" name="addVehicle" value="Dodaj pojazd do bazy" onClick={submitAddVehicle}/>
        </div>);
}

export default AddDataForm