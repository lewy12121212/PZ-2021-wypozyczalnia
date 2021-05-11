import React from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// wyświetla tabelę z informacjami o naprawach pojazdu (props = RowDataPacket from Express)
const RepairsInfo = (props) => {

    return(
        <div className="Info">
          <h4>Informacje o naprawach pojazdu</h4>
          <div className="VehicleInfoDiv">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Id mechanika</th>
                    <th scope="col">Id pojazdu</th>
                    <th scope="col">Wymienione części</th>
                    <th scope="col">Wykonane czynności naprawcze</th>
                  </tr>
                </thead>
                <tbody>
                  {props.vehicleRepairData.map((val) => {
                    return (
                      <tr>
                        <th scope="row">{val.Id}</th>
                        <td>{val.Reparer_id}</td>
                        <td>{val.Vehicle_id}</td>
                        <td>{val.Replaced_parts}</td>
                        <td>{val.Activities_performed}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default RepairsInfo;