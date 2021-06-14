import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const AddClient = (props) => {

    //for add Client
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [mail, setMail] = useState('')

    //const [clientData, setClientData] = useState([])

    const submitAddClient = () => { // to instert data

        if(name !== "" && surname !== "" && phoneNumber !== "" && mail !== "" && phoneNumber.length <= 9){

            Axios.post('http://localhost:3001/insertClient', {
                name: name,
                surname: surname,
                phoneNumber: phoneNumber,
                mail: mail
            });
        
            setName('')
            setSurname('')
            setPhoneNumber('')
            setMail('')

            alert("Poprawnie dodano klienta :)")
            document.getElementById("addClientForm").reset();
            props.refresh()
        } else {
            alert("Niektóre dane nie są poprawne :/")
            console.log("undefined data of client :(")
        }
        
    }

    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <form id="addClientForm" className="container option_panel_box d-flex justify-content-center">
            <table className="col-8 center-block text-center">
                <tr>
                    <th colspan="2"><h5>Dodaj klientów</h5></th>
                </tr>
                <tr>
                    <td>Imię:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setName(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Nazwisko:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setSurname(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Telefon:</td>
                    <td>
                        <input type="text" maxlength="9" onChange={(e) => {
                            setPhoneNumber(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Mail:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setMail(e.target.value)
                        }}></input>
                    </td>
                </tr>

                <tr>
                    <td colspan="2"><input type="button" className="btn btn-success" value="dodaj klienta" onClick={submitAddClient}></input></td>
                </tr>
            </table>
            </form>
        </div>
    )
}

export default AddClient;


