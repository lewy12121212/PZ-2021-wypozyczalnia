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

//import AddDataFrom from './components/AddDataTests/AddDataForm'
import Login from './components/login/Login'
//import LoginComponent from './components/LoginComponent'
//import VehicleList from './components/VehicleList'
import Axios from 'axios'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      token: false,
      login: '',
      type: '',  
      loginData: []
    };
  }

  SendLoginData = (Login, Password) => {
    if(Login !== '' && Password !== ''){
      Axios.post('http://localhost:3001/login', {
        login: Login,
        password: Password
      }).then((response) => {
        //alert(Object.values(response.data[0].Login))
        this.setState({
          ...this.state,
          loginData: response.data,
          login: Object.values(response.data[0].Login),
          type: Object.values(response.data[0].Type),
          token: true
        })
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
  }

  render() {

    if(this.state.token === false) {
      return (
        <div>
          <h2>{this.state.loginData}</h2>
          <Login SendLoginData={this.SendLoginData}/>
        </div>
      )
    } else if(this.state.token === true) {

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


      //return (
      //  <div className="wrapper">
      //    <h1><center>Wypożyczalnia</center></h1>
      //      <BrowserRouter>
      //        <Switch>
      //          <Route path="/AddDataForm">
      //            <AddDataFrom />
      //          </Route>
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
    }
  }

}


//return (
//  <div>
//    <h1>Zalogowano jako użytkownik:</h1>
//      {this.state.loginData.map((val) => {
//        return (
//          <div>
//            <h2>{val.Login}</h2>
//            {val.Type}
//          </div>
//        )
//      })}
//  </div>
//)

//function App() {
//  const [token, setToken] = useState();
//  const [login, setLogin] = useState('');
//  const [acconuntType, setAccountType] = useState('');
//}

export default App;
