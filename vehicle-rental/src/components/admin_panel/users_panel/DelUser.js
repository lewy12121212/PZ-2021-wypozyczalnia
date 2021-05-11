import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const DelUser = (props) => {

    const [usersList, setUsersList] = useState([])
    const [userId, setUserId] = useState('')

    const headers = { // wyłuskanie parametru ID w celu przekazania parametru na BackEnd
        'id': userId
    }

    useEffect(()=> {
        Axios.get('http://localhost:3001/getAllUsersInfo').then((response) => {
            setUsersList(response.data)
        })
    },[])

    const submitDelUser = () => {
        Axios.delete('http://localhost:3001/deleteUser', {headers}).then(
            alert("Użytkownka popranie usunięto! :)"),
            props.refresh()
        )
    }


    return (
        <div className="container option_panel_box d-flex justify-content-center">
            <table className="col-10 center-block text-center">
                <tr>
                    <th><h5>Usuń użytkownika</h5></th>
                </tr>
                <tr>
                    <td>
                        <select class="form-select form-select-lg mb-3 col-12" onChange={(e) => {
                            setUserId(e.target.value)
                            console.log("ustawiono:"+ userId)
                        }}>
                            <option selected>...Wybierz użytkownika</option>
                            {usersList.map((val) => {
                                return (
                                    <option value={val.Id}>{val.Id}. {val.Name} {val.Surname}</option>
                                )
                            })}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td><input type="button" className="btn btn-danger" value="usuń użytkownika" onClick={submitDelUser}></input></td>
                </tr>
            </table>
        </div>
    );
}

export default DelUser;


