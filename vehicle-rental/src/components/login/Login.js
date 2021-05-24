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
        <h1>Please Log In</h1>
        <label>
            <p>Username</p>
            <input type="text" onChange={e => this.setLogin(e.target.value)}/>
        </label>
        <label>
            <p>Password</p>
            <input type="password" onChange={e => this.setPassword(e.target.value)}/>
        </label>
        <div>
            <button type="submit" onClick={() => this.props.SendLoginData(this.state.Login, this.state.Password)}>Submit</button>
        </div>

      </div>
    )
  }
  
}

export default Login