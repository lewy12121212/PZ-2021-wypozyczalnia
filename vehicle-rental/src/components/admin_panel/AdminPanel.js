import React from 'react'
//import '../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import MainPanel from './MainPanel'
import ClientPanel from './client_panel/ClientPanel'
import HistoryPanel from './history_panel/HistoryPanel'
import UsersPanel from './users_panel/UsersPanel'
import VehiclePanel from './vehicle_panel/VehiclePanel'


class AdminPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visable_main_panel: true,
      visable_user_panel: false,
      visable_vehice_panel: false,
      visable_client_panel: false,
      visable_history_panel: false
    };
  }

  triggerShowMainPanel = () => {
    this.setState({
      ...this.state,
      visable_main_panel: true,
      visable_user_panel: false,
      visable_vehice_panel: false,
      visable_client_panel: false,
      visable_history_panel: false
    })
  }

  triggerShowUserPanel = () => {
    this.setState({
      ...this.state,
      visable_main_panel: false,
      visable_user_panel: true,
      visable_vehice_panel: false,
      visable_client_panel: false,
      visable_history_panel: false
    })
  }

  triggerShowVehiclePanel = () => {
    this.setState({
      ...this.state,
      visable_main_panel: false,
      visable_user_panel: false,
      visable_vehice_panel: true,
      visable_client_panel: false,
      visable_history_panel: false
    })
  }

  triggerShowClientPanel = () => {
    this.setState({
      ...this.state,
      visable_main_panel: false,
      visable_user_panel: false,
      visable_vehice_panel: false,
      visable_client_panel: true,
      visable_history_panel: false
    })
  }

  triggerShowHistoryPanel = () => {
    this.setState({
      ...this.state,
      visable_main_panel: false,
      visable_user_panel: false,
      visable_vehice_panel: false,
      visable_client_panel: false,
      visable_history_panel: true
    })
  }

  render() {
    return (
      <div className="MainComponentDiv container">
        <h2>Panel administratora</h2>

        {this.state.visable_main_panel && 
          <MainPanel 
            triggerShowUserPanel={this.triggerShowUserPanel}
            triggerShowVehiclePanel={this.triggerShowVehiclePanel}
            triggerShowClientPanel={this.triggerShowClientPanel}
            triggerShowHistoryPanel={this.triggerShowHistoryPanel}
            triggerShowMainPanel={this.triggerShowMainPanel}
          />
        }

        {this.state.visable_user_panel && <UsersPanel triggerShowMainPanel={this.triggerShowMainPanel} />}
        {this.state.visable_vehice_panel && <VehiclePanel triggerShowMainPanel={this.triggerShowMainPanel} />}
        {this.state.visable_client_panel && <ClientPanel triggerShowMainPanel={this.triggerShowMainPanel} />}
        {this.state.visable_history_panel && <HistoryPanel triggerShowMainPanel={this.triggerShowMainPanel}/>}
        

      </div>
    )
  }

}

export default AdminPanel;
