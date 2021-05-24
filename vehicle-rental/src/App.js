//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
// usunięty USESTATE i USEEFFECT :/
import AdminPanel from './components/admin_panel/AdminPanel'
import ServicePanel from './components/service_panel/ServicePanel'
import EmployeePanel from './components/employee_panel/EmployeePanel'

import AddDataFrom from './components/AddDataTests/AddDataForm'
import Login from './components/login/Login'
//import LoginComponent from './components/LoginComponent'
//import VehicleList from './components/VehicleList'
import Axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: null,
      login: '',
      type: '',  
      loginData: null 
    };
  }

  SendLoginData = (Login, Password) => {
    if(Login !== '' && Password !== ''){
      Axios.post('http://localhost:3001/login', {
        login: Login,
        password: Password
      }).then((response) => {
        this.setState({
          ...this.state,
          loginData: response.data
        })
      });
      alert("Poprawnie" + this.state.loginData)
    } else {
      alert('Nie uzupełniono wszystkich danych!')
    }
  }

  render() {
    if(!this.state.token) {
      return <Login SendLoginData={this.SendLoginData}/>
    } else {
      return (
        <div className="wrapper">
          <h1><center>Wypożyczalnia</center></h1>
            <BrowserRouter>
              <Switch>
                <Route path="/AddDataForm">
                  <AddDataFrom />
                </Route>
                <Route path="/AdminPanel">
                  <AdminPanel />
                </Route>
                <Route path="/ServicePanel">
                  <ServicePanel />
                </Route>
                <Route path="/EmployeePanel">
                  <EmployeePanel />
                </Route>
              </Switch>
            </BrowserRouter>
        </div>
        );
    }
  }

}


//function App() {
//  const [token, setToken] = useState();
//  const [login, setLogin] = useState('');
//  const [acconuntType, setAccountType] = useState('');
//}

export default App;
