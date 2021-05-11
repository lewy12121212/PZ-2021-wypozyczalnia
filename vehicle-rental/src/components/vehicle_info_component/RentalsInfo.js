import React from 'react'
import '../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


//wyświetlanie informacji o wypożyczeniach pojazdu
//tabela vdb_rentals
const RentalsInfo = (props) => {

    return(
        <div className="Info">
          <h4>Informacje o wypożyczeniach pojazdu</h4>
          <div className="VehicleInfoDiv">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Id klienta</th>
                    <th scope="col">Id pojazdu</th>
                    <th scope="col">Data wypożyczenia</th>
                    <th scope="col">Przewidywana data zwrotu</th>
                    <th scope="col">Status wypożyczenia</th>
                  </tr>
                </thead>
                <tbody>
                  {props.vehicleRentalsData.map((val) => {
                    return (
                      <tr>
                        <th scope="row">{val.Id}</th>
                        <td>{val.Customer_id}</td>
                        <td>{val.Vehicle_id}</td>
                        <td>{val.Rent_data}</td>
                        <td>{val.Return_data}</td>
                        <td>{val.State}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
        </div>
    )
}

export default RentalsInfo;