import React, { useState } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const AddUser = (props) => {

    //for add user
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const [type, setType] = useState('')

    const [userData, setUserData] = useState([])

    const submitAddUser = () => { // to instert data

        if(password === repassword){ 
            if(name !== "" && surname !== "" && password !== ""){
                setUserData([
                    ...userData, 
                    {   
                        Name: name,
                        Surname: surname,
                        Login: login,
                        Password: password,
                        Type: type
                    }
                ]);

                Axios.post('http://localhost:3001/insertUser', {
                    name: name,
                    surname: surname,
                    login: login,
                    password: password,
                    type: type
                });

                alert("Poprawnie dodano użytkownika :)")
                props.refresh()
            } else {
                alert("Niektóre dane są puste :/")
                console.log("undefined data of repair :(")
            }
        } else {
            alert("Hasła nie są identyczne!")
        }
        
    }

    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <table className="col-10 center-block text-center">
                <tr>
                    <th colspan="2"><h5>Dodaj użytkownika</h5></th>
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
                    <td>Login:</td>
                    <td>
                        <input type="text" onChange={(e) => {
                            setLogin(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Hasło:</td>
                    <td>
                        <input type="password" onChange={(e) => {
                            setPassword(e.target.value)
                        }}></input>    
                    </td>
                </tr>
                <tr>
                    <td>Powtórz hasło: </td>
                    <td>
                        <input type="password" onChange={(e) => {
                            setRepassword(e.target.value)
                        }}></input>
                    </td>
                </tr>
                <tr>
                    <td>Type:</td>
                    <td>
                        <select class="form-select col-12" onChange={(e) => {
                            setType(e.target.value)
                        }}>
                            <option selected>...Wybierz typ użytkownika</option>
                            <option value="administrator">administrator</option>
                            <option value="serwisant">serwisant</option>
                            <option value="pracownik">pracownik</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><input type="button" className="btn btn-success" value="dodaj użytkownika" onClick={submitAddUser}></input></td>
                </tr>
            </table>
        </div>
    )
}

export default AddUser;


