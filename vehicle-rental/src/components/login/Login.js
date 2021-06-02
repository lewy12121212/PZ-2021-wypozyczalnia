import React from 'react';
import './Login.css';
//


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      Login: '',
      Password: ''  
    };
  }

  setLogin = (Login) => {
    this.setState({
      ...this.state,
      Login: Login
    })
  }

  setPassword = (Password) => {
    this.setState({
      ...this.state,
      Password: Password
    })
  }

  render() {
    return(
      <div className="login-wrapper">
        <h1>Zaloguj się :)</h1>
        <label>
            <p>Login:</p>
            <input type="text" onChange={e => this.setLogin(e.target.value)}/>
        </label>
        <label>
            <p>Hasło:</p>
            <input type="password" onChange={e => this.setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit" className="btn btn-success" onClick={() => this.props.SendLoginData(this.state.Login, this.state.Password)}>Zaloguj</button>
        </div>

      </div>
    )
  }
  
}

export default Login