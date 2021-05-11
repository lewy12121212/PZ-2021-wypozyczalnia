import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import '../../components_style/style.css'
//import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddDataForm = props => {

    //to insert data
    const [vehicleName, setVehicleName] = useState("")
    const [vehicleModel, setVehicleModel] = useState("")
    //to get data
    const [vehicleList, setVehiceList] = useState([])
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/getVehicle').then((response) => {
            setVehiceList(response.data)
        })
    },[])

    const submitAddVehicle = () => { // to instert data
        Axios.post('http://localhost:3001/insertVehicle', {
            vehicleName: vehicleName, 
            vehicleModel: vehicleModel
        });

        if(vehicleName !== "" && vehicleModel !== ""){ //typeof ? 
            setVehiceList([
                ...vehicleList, 
                {Name: vehicleName, Model: vehicleModel}
            ]);
        } else {
            console.log("undefined data of vehicle :(")
        }

    };

    return (
        <div className='dataForm'>
            <h1>Test add data to database</h1>
            <label>Nazwa pojazdu</label>
            <input type="text" name="vahicleName" id="vahicleName" onChange={(e) => {
                setVehicleName(e.target.value)
            }} />
            <label>Model pojazdu</label>
            <input type="text" name="vahicleModel" id="vahicleModel" onChange={(e) => {
                setVehicleModel(e.target.value)
            }}/>
            <input type="button" className="btn btn-success" name="addVehicle" value="Dodaj pojazd do bazy" onClick={submitAddVehicle}/>
            {vehicleList.map((val) => {
                return (
                    <div className="card">
                        <h2>{val.Name}</h2>
                        <p><h5>{val.Model}</h5></p>
                        <div className="input-group mb-3 singleCard">
                            <button className="btn btn-danger">Usuń</button>
                            <input type="text" className=""></input>
                            <button className="btn btn-warning">Aktualizuj</button>
                        </div>
                    </div>
                );
                
            })}
        </div>);
}

export default AddDataForm