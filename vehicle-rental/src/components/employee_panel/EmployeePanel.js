import React from 'react';
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


class EmployeePanel extends React.Component {

  render() {
    return (
      <div className="MainComponentDiv container justify-content-center">
        <div className="row justify-content-center"><h2 className="PanelName">Panel serwisanta</h2></div>
          <div className="container row justify-content-center">
            <div className="Column col-4">
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-success button-box col-12">nowe wypożyczenie</button>
              </div>
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-danger button-box col-12">zakończ wypożyczenie</button>
              </div>
            </div>
            <div className="Column col-4">
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-primary button-box col-12">info</button>
              </div>
              <div className="Single-Box justify-content-center text-center">
                <button className="btn btn-warning button-box col-12">broszury</button>
              </div>
            </div>
          </div>

      </div>      
    );
  }
}

export default EmployeePanel;
