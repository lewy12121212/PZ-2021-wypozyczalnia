import React from 'react';
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import VehicleList from './VehicleList'
import VehicleInfoPanel from '../vehicle_info_component/VehicleInfoPanel'


class ServicePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visable_serivce_panel: true,
      visable_vehice_info: false,
      visable_vehicle_form: false,
      active_vehicle: null
    };
  }

  triggerShowVehiceInfo = (vehicle_id) => {
    this.setState({
      ...this.state,
      visable_serivce_panel: false,
      visable_vehicle_info: true,
      visable_vehicle_form: false,
      active_vehicle: vehicle_id
    })
  }

  triggerShowPanelVisable = () => {
    this.setState({
      ...this.state,
      visable_serivce_panel: true,
      visable_vehicle_info: false,
      visable_vehicle_form: false
    })
  }

  handleVehicle = (active_vehicle) => {
    this.setState({active_vehicle: active_vehicle});
  }

  render() {
    return (

      <div>
        {this.state.visable_serivce_panel &&
          <div className="MainComponentDiv container">
            <div className="row justify-content-center"><h2 className="PanelName">Panel serwisanta</h2></div>
            <div className="BoxContainer row">
              <div className="SingleComponentBox col-md">
                <h5>Lista uszkodzonych pojazdów</h5>
                <VehicleList listParam="w naprawie" triggerShowVehiceInfo={this.triggerShowVehiceInfo} setActiveVehicle={this.handleVehicle}/>
              </div>
              <div className="SingleComponentBox col-md">
                <h5>Lista pojazdów oczekujących na części</h5>
                <VehicleList listParam="oczekujący" triggerShowVehiceInfo={this.triggerShowVehiceInfo} setActiveVehicle={this.handleVehicle}/>
              </div>
              <div className="SingleComponentBox col-md">
                <h5>Ważne informacje</h5>
              </div>
            </div>
          </div>
        }

        {this.state.visable_vehicle_info && 
          <div>
            <VehicleInfoPanel vehicle={this.state.active_vehicle}/>
            <button className="btn btn-warning" onClick={this.triggerShowPanelVisable}>Powrót</button>
          </div>
        }
      </div>      
    );
  }
}

export default ServicePanel;
