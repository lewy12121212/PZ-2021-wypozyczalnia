//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
// usunięty USESTATE i USEEFFECT :/
import AdminPanel from './components/admin_panel/AdminPanel'
import ServicePanel from './components/service_panel/ServicePanel'
import EmployeePanel from './components/employee_panel/EmployeePanel'
//import { useCookies } from "react-cookie";
//import cookie from "react-cookie";
//import Cookies from 'universal-cookie';
//import cookie from "react-cookie";
//import AddDataFrom from './components/AddDataTests/AddDataForm'
import Login from './components/login/Login'
//import LoginComponent from './components/LoginComponent'
//import VehicleList from './components/VehicleList'
import Axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props);
    var login = this.getCookie("login")
    var type = this.getCookie("type")
    console.log(typeof login + " : " + typeof type)
    if(login !== '' && type !== ''){
      console.log("null")
      this.state = {
        token: true,
        login: login,
        type: type,  
        loginData: []
      }; 
    } else {
      console.log("not null")
      this.state = {
        token: false,
        login: '',
        type: '',  
        loginData: []
      }; 
    }

  }

  SendLoginData = (Login, Password) => {
    if(Login !== '' && Password !== ''){
      Axios.post('http://localhost:3001/login', {
        login: Login,
        password: Password
      }).then((response) => {
        //alert(Object.values(response.data[0].Login))
        if(response.data.length > 0){
          this.setState({
            ...this.state,
            loginData: response.data,
            login: Object.values(response.data[0].Login),
            type: Object.values(response.data[0].Type),
            token: true
          })

          document.cookie = "login=" + this.state.login + "; path=/;"
          document.cookie = "type=" + this.state.type + "; path=/;"

        } else {

          alert("Nie ma takiego użytkownika! :/")
          document.cookie = "login=; path=/;"
          document.cookie = "type=; path=/;"
          
        }
        
      });
    } else {
      alert('Nie uzupełniono wszystkich danych!')
    }
  }

  LogOut = () => {
    this.setState({
      ...this.state,
      token: false,
      login: '',
      type: '',  
      loginData: []
    })
    document.cookie = "login=; path=/;"
    document.cookie = "type=; path=/;"
    this.getCookie("login")
    console.log("wylogowano!")
  }

  getCookie = (cookieName) => {
    let cookie = {};
    document.cookie.split(';').forEach(function(el) {
      let [key,value] = el.split('=');
      cookie[key.trim()] = value;
    })
    console.log(cookie[cookieName]);
    return cookie[cookieName];
  }

  render() {

    if(this.state.token === false) {
      return (
        <div>
          <h2>{this.state.loginData}</h2>
          <Login SendLoginData={this.SendLoginData}/>
        </div>
      )
    } else if(this.state.token === true)  {

      if(this.state.type.toString() === 'a,d,m,i,n,i,s,t,r,a,t,o,r'){
        return(
          <div className="wrapper">
          <h1><center>Wypożyczalnia</center></h1>
            <AdminPanel />
            <center className="btn-center">
              <button className="btn btn-warning" onClick={this.LogOut}>Wyloguj</button>
            </center>
          </div>
        )
      } else if(this.state.type.toString() === 'p,r,a,c,o,w,n,i,k'){
        return(
          <div className="wrapper">
          <h1><center>Wypożyczalnia</center></h1>
            <EmployeePanel />
            <center className="btn-center">
              <button className="btn btn-warning" onClick={this.LogOut}>Wyloguj</button>
            </center>
          </div>
        )
      } else if(this.state.type.toString() === 's,e,r,w,i,s,a,n,t'){
        return(
          <div className="wrapper">
          <h1><center>Wypożyczalnia</center></h1>
            <ServicePanel />
            <center className="btn-center">
              <button className="btn btn-warning" onClick={this.LogOut}>Wyloguj</button>
            </center>
          </div>
        )
      } else {
        return(
          <div>login error: {this.state.login} : {this.state.type}</div>
        )
      }

    }
  }

}

export default App;
