//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
//import VehicleList from './components/VehicleList'
import AddDataFrom from './components/AddDataTests/AddDataForm'
//import LoginComponent from './components/LoginComponent'
//import AdminPanel from './components/admin_panel/AdminPanel'
//import ServicePanel from './components/service_panel/ServicePanel'
//import EmployeePanel from './components/employee_panel/EmployeePanel'
//import Login from './components/login/Login'


function App() {
  const [token, setToken] = useState();

  //if(!token) {
  //  return <Login setToken={setToken} />
  //}

  //return (
  //  <div className="wrapper">
  //    <h1>Wypożyczalnia</h1>
  //      <BrowserRouter>
  //        <Switch>
  //          <Route path="/AdminPanel">
  //            <AdminPanel />
  //          </Route>
  //          <Route path="/ServicePanel">
  //            <ServicePanel />
  //          </Route>
  //          <Route path="/EmployeePanel">
  //            <EmployeePanel />
  //          </Route>
  //        </Switch>
  //      </BrowserRouter>
  //  </div>
  //  );

  return(
    <div>
      <AddDataFrom />
    </div>
  )
}

export default App;
