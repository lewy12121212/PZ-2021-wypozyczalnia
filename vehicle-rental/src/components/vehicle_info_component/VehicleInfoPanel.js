import React from 'react';
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// panel wyświetlania informacji o pojeździe 
// informacje zawarte w tabelach bazy danych
// vdb_vehicles, vdb_vehicles_rentals, vdb_repairs

class VehicleInfoPanel extends React.Component {


  render() {
    return (
        <div className="VehicleMainView">
            <h1>Widok informacji o pojeździe</h1>
        </div>

    )
  }
}

export default VehicleInfoPanel;
