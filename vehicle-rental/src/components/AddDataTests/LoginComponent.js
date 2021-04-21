import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import '../components_style/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginComponent = props => {

    //to insert data
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    //user Data
    const [userData, setUserData] = useState([])

    const SubmitLogin = () => { // login method
        Axios.post('http://localhost:3001/login', {
            login: login, 
            password: password
        }).then(res => {
            setUserData(res.data)
            //console.log(res.data)
            console.log(userData)

        });

    };

    return (
        <div className='LoginComponent container col-4'>
            <h2>Zaloguj się</h2>
            <input type="text" name="LoginValue" id="LoginValue" onChange={(e) => {
                setLogin(e.target.value)
            }} />
            <input type="password" name="PasswordValue" id="PasswordValue" onChange={(e) => {
                setPassword(e.target.value)
            }}/>
            <input type="button" className="btn btn-primary" name="LoginButton" value="Zaloguj" onClick={SubmitLogin}/>
        </div>
    );
}

export default LoginComponent;