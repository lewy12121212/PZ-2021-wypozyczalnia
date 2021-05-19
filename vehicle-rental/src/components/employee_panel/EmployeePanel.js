import React from 'react';
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import AddNewRent from './add_new_rent/AddNewRent'
import EndRent from './end_rent/EndRent'

class EmployeePanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visable_employee_panel: true,      
      visable_add_new_rent: false,
      visable_end_rent: false,
      visable_info: false,
      visable_booklet: false
    };
  }

  triggerShowEmployeePanel = () => {
    this.setState({
      ...this.state,
      visable_employee_panel: true,      
      visable_add_new_rent: false,
      visable_end_rent: false,
      visable_info: false,
      visable_booklet: false
    })
  }

  triggerShowAddNewRent = () => {
    this.setState({
      ...this.state,
      visable_employee_panel: false,      
      visable_add_new_rent: true,
      visable_end_rent: false,
      visable_info: false,
      visable_booklet: false
    })
  }

  triggerShowEndRent = () => {
    this.setState({
      ...this.state,
      visable_employee_panel: false,      
      visable_add_new_rent: false,
      visable_end_rent: true,
      visable_info: false,
      visable_booklet: false
    })
  }

  triggerShowInfo = () => {
    this.setState({
      ...this.state,
      visable_employee_panel: false,      
      visable_add_new_rent: false,
      visable_end_rent: false,
      visable_info: true,
      visable_booklet: false
    })
  }

  triggerShowBooklet = () => {
    this.setState({
      ...this.state,
      visable_employee_panel: false,      
      visable_add_new_rent: false,
      visable_end_rent: false,
      visable_info: false,
      visable_booklet: true
    })
  }

  render() {
    return (
      <div className="MainComponentDiv container justify-content-center">
        <div className="row justify-content-center"><h2 className="PanelName">Panel pracownika</h2></div>
        {this.state.visable_employee_panel && 
          <div className="container row justify-content-center">
            <div className="Column col-4">
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-success button-box col-12" onClick={this.triggerShowAddNewRent}>nowe wypożyczenie</button>
              </div>
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-danger button-box col-12" onClick={this.triggerShowEndRent}>zakończ wypożyczenie</button>
              </div>
            </div>
            <div className="Column col-4">
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-primary button-box col-12" onClick={this.triggerShowInfo}>info</button>
              </div>
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-warning button-box col-12" onClick={this.triggerShowBooklet}>broszury</button>
              </div>
            </div>
          </div>
        }

        {this.state.visable_add_new_rent && <AddNewRent ShowEmployeePanel={this.triggerShowEmployeePanel}/>}
        {this.state.visable_end_rent && <EndRent ShowEmployeePanel={this.triggerShowEmployeePanel}/>}


      </div>      
    );
  }
}

export default EmployeePanel;
