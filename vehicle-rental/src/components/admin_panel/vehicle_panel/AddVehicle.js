import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import Cloudinary from '../../cloudinary/cloudinary'

const AddVehicle = (props) => {

    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [type, setType] = useState('')
    const [engine, setEngine] = useState('')
    const [img, setImg] = useState('')
    const state = "dostępny"

    const [vehicleData, setVehicleData] = useState([])

    const submitAddVehicle = () => { // to instert data

        Axios.post('http://localhost:3001/insertVehicle', {
            name: name,
            model: model,
            type: type,
            engine: engine,
            state: state,
            img: img
        });
    
        if(name !== "" && model !== "" && type !== "" && engine !== "" && state !== "" && img !== ""){
            setVehicleData([
                ...vehicleData, 
                {   
                    Name: name,
                    Model: model,
                    Type: type,
                    Engine_capacity: engine,
                    State: state,
                    Img: img
                }
            ]);
            alert("Poprawnie dodano pojazd :)")
            props.refresh()
        } else {
            alert("Niektóre dane są puste :/")
            console.log("undefined data of repair :(")
        }
    }

    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <table className="col-10 center-block text-center">
                <tr>
                    <th colspan="2"><h5>Dodaj pojazd</h5></th>
                </tr>
                <tr>
                    <td>Nazwa:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Model:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setModel(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Typ:</td>
                    <td>
                        <select class="form-select col-12" onChange={(e) => {
                            setType(e.target.value)
                        }}>
                            <option selected>...Wybierz typ pojazdu</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="VAN">VAN</option>
                            <option value="Coupe">Coupe</option>
                            <option value="Camper">Camper</option>
                            <option value="Cabriolet">Cabriolet</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Pojemność silnika:</td>
                    <td>
                        <input type="number" onChange={(e) => {
                            setEngine(e.target.value)
                        }}></input>    
                    </td>
                </tr>
                <tr>
                    <td>Zdjęcie:</td>
                    <td>
                        <Cloudinary setImg={setImg}/>   
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="button" className="btn btn-success" value="dodaj pojazd" onClick={submitAddVehicle}></input></td>
                </tr>
            </table>
        </div>
    )
}

export default AddVehicle;


