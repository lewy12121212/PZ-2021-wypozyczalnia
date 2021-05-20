import React from 'react';
import Axios from 'axios'
import '../../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import AvailableVehicleList from './AvailableVehicleList'
import VehicleItem from './AvailableVehicleList'
import ChooseClient from './VehicleItem'

class AddBooklet extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicle: null,
        };
    }

    triggerChooseVehicle = (vehicle) => {
        if(this.state.vehicle == null){
            this.setState({
                ...this.state,
                vehicle: vehicle
            })
        }else{
            this.setState({
                ...this.state,
                vehicle: null
            })
        }
    }

    addVehicleRental = (client, startDate, endDate) => {
        if(client !== "" && startDate !== null && endDate !== null){
            Axios.post('http://localhost:3001/insertVehicleRental', {
                client: client,
                vehicle: this.state.vehicle.Id,
                startDate: startDate,
                endDate: endDate
            });
            alert("Poprawnie dodano wypożyczenie :)")
        }
    }

    render() {

        if(this.state.vehicle == null) {
            return (
                <div className="container justify-content-center">
                    <div className="row justify-content-center"><h4 className="PanelName">Dodaj pojazdy do broszury</h4></div>
                        <hr className="col-10"></hr>
                        <AvailableVehicleList ChooseVehicle={this.triggerChooseVehicle}/>
                    <bottom className="btn btn-warning btn-back" onClick={this.props.ShowEmployeePanel}>Powrót</bottom>
                </div>      
            )
        }else{
            return (
                <div className="container justify-content-center">
                    <div className="row justify-content-center"><h4 className="PanelName">Dodaj wpożyczenie</h4></div>
                    <hr className="col-10"></hr>
                    <h5>Pojazd wybrano!</h5>
                    <VehicleItem vehicle={this.state.vehicle} ChooseVehicle={this.triggerChooseVehicle}/>
                    <hr className="col-10"></hr>
                    <h5>Wybierz klienta:</h5>
                    <ChooseClient ShowEmployeePanel={this.props.ShowEmployeePanel} addVehicleRental={this.addVehicleRental}/>
                    <hr className="col-10"></hr>
                    <bottom className="btn btn-warning btn-back" onClick={this.props.ShowEmployeePanel}>Powrót</bottom>
                </div>      
            )
        }


    }
}

export default AddBooklet;
