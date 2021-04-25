import React from 'react';
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import VehicleList from './VehicleList'


class ServicePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visable_serivce_panel: true,
      visable_vehice_info: false
    };
  }

  triggerShowVehiceInfo = () => {
    this.setState({
      ...this.state,
      visable_serivce_panel: false,
      visable_vehice_info: true
    })
  }

  triggerShowPanelVisable = () => {
    this.setState({
      ...this.state,
      visable_serivce_panel: true,
      visable_vehice_info: false
    })
  }

  render() {
    return (
      <div className="MainComponentDiv container">
        <div className="row justify-content-center"><h2 className="PanelName">Panel serwisanta</h2></div>
        <div className="BoxContainer row">
          <div className="SingleComponentBox col-md">
            <h5>Lista uszkodzonych pojazdów</h5>
            <VehicleList listParam="dostępny"/>
          </div>
          <div className="SingleComponentBox col-md">
            <h5>Lista pojazdów oczekujących na części</h5>
            <VehicleList listParam="oczekujący"/>
          </div>
          <div className="SingleComponentBox col-md">
            <h5>Ważne informacje</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default ServicePanel;
