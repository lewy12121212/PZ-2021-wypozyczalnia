import React from 'react';
import Axios from 'axios'
import '../../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

class EndRent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rentList: [],
            rent: null,
            fixVehicle: false
        };
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/getOpenRents').then((response) => {
            this.setState({
                ...this.state,
                rentList: response.data
            })
        })
    }

    handleChooseRent = (rentId) => {
        this.setState({
            ...this.state,
            rent: rentId
        })
    }

    setFixVehicle = () => {
        if(this.state.fixVehicle === false){
            this.setState({
                ...this.state,
                fixVehicle: true
            })
        } else {
            this.setState({
                ...this.state,
                fixVehicle: false
            })
        }
    }

    endRent = () => {
        if(this.state.rent != null){
            const rent = this.state.rent.toString().split(",")
            Axios.post('http://localhost:3001/endRental', {
                rent: rent[0]
            });
            if(this.state.fixVehicle === true){
                Axios.post('http://localhost:3001/setVehicleRepair', {
                    fixVehicle: rent[1]
                });
            }
            this.props.ShowEmployeePanel()
        }else{
            alert("Wybierz wypozyczenie!")
        }
    }

    render() {

        return(
            <div className="container column justify-content-center">
                <div className="col">
                    <select class="form-select form-select-lg mb-3 col-10" onChange={(e) => {
                        this.handleChooseRent(e.target.value)
                    }}>
                        <option selected value={null}>Wybierz wypożyczenie z listy:</option>
                        {this.state.rentList.map((val) => {
                            return (
                                <option value={[val.Id,val.Vehicle_id]}>
                                    Id wypożyczenia: {val.Id} | {val.Customer_id} {val.Vehicle_id} {val.Rent_data.toString().slice(0,10)} {val.Return_data.toString().slice(0,10)}
                                </option>
                            )
                        })}
                    </select>
                    <label><input type="checkbox" onChange={() => this.setFixVehicle()}></input> Czy samochód wymaga naprawy?</label>
                    <bottom className="btn btn-danger btn-back col-9" onClick={this.endRent}>Zakończ wypożyczenie</bottom>
                    <bottom className="btn btn-warning btn-back col-9" onClick={this.props.ShowEmployeePanel}>Powrót</bottom>
                </div>

            </div>
        )

    }
}

export default EndRent;
