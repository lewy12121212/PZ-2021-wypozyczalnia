import React from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'


class AdminPanel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visable_main_panel: true,
      visable_user_panel: false,
      visable_vehice_panel: false,
      visable_client_panel: false,
      active_history: false
    };
  }

  render() {
    return (
      <div className="MainComponentDiv container">
        {this.state.visable_main_panel && 
          <div>
            <h2>Panel administratora</h2>
            <div className="sectionBox">
              <h5>zarządzenie użytkownikami</h5>
              <button className="btn btn-success col-4">Dodaj użytkownika</button>
              <button className="btn btn-danger col-4">Usuń użytkownika</button>
            </div>
            <div className="sectionBox">
              <h5>zarządzenie pojazdami</h5>
              <button className="btn btn-success col-4">Dodaj pojaz</button>
              <button className="btn btn-danger col-4">Usuń pojazd</button>
            </div>
            <div className="sectionBox">
              <h5>zarządzenie klietami</h5>
              <button className="btn btn-danger col-4">Usuń klienta</button>
              <button className="btn btn-primary col-4">Wyświetl listę klientów</button>
            </div>
            <div className="sectionBox">
              <h5>historie</h5>
              <button className="btn btn-primary col-4">Wyświetl historię wypożyczeń</button>
              <button className="btn btn-primary col-4">Wyświetl historię napraw</button>
            </div>
          </div>
        }

      </div>
    )
  }

}

export default AdminPanel;
