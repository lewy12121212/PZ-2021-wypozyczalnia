import React, { useState } from 'react';
import './Login.css';
import Axios from 'axios'
import PropTypes from 'prop-types';


async function loginUser(credentials) {
  return fetch('http://localhost:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }


export default function Login({ setToken }) {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  //const [userData, setUserData] = useState([])

  const HandleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      login,
      password
    });
    console.log(login + " " + password)
    setToken(token);
  }  
  //const HandleSubmit = () => { // to instert data
  //  Axios.post('http://localhost:3001/login', {
  //    login: login, 
  //    password: password
  //  }).then(res => {
  //      setUserData(res.data)
  //      //console.log(res.data)
  //      console.log(userData)
  //      setToken("userData");
  //  });
  //}

  return(
    <div className="login-wrapper">
        <h1>Please Log In</h1>
        <form onSubmit={HandleSubmit}>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => setLogin(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}