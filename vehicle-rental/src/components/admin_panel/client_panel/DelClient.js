import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const DelClick = (props) => {

    const [clientsList, setClientsList] = useState([])
    const [clientId, setClientId] = useState('')

    const headers = { // wyłuskanie parametru ID w celu przekazania parametru na BackEnd
        'id': clientId
    }

    useEffect(()=> {
        Axios.get('http://localhost:3001/getAllClientInfo').then((response) => {
            setClientsList(response.data)
        })
    },[])

    const submitDelClient = () => {
        Axios.delete('http://localhost:3001/deleteClient', {headers}).then(
            alert("Użytkownka popranie usunięto! :)"),
            props.refresh()
        )
    }


    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <table className="col-10 center-block text-center">
                <tr>
                    <th><h5>Usuń klienta</h5></th>
                </tr>
                <tr>
                    <td>
                        <select class="form-select form-select-lg mb-3 col-12" onChange={(e) => {
                            setClientId(e.target.value)
                            console.log("ustawiono:"+ clientId)
                        }}>
                            <option selected>...Wybierz klienta</option>
                            {clientsList.map((val) => {
                                return (
                                    <option value={val.Id}>{val.Id}. {val.Name} {val.Surname} {val.Phone_number} {val.Mail}</option>
                                )
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><input type="button" className="btn btn-danger" value="usuń klienta" onClick={submitDelClient}></input></td>
                </tr>
            </table>
        </div>
    );
}

export default DelClick;


