import React from 'react';
import '../../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import AvailableVehicleList from './AvailableVehicleList'
import VehicleItem from './VehicleItem'
import ChooseClient from './ChooseClient'

class AddNewRent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            vehicle: null
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

    render() {

        if(this.state.vehicle == null) {
            return (
                <div className="container justify-content-center">
                    <div className="row justify-content-center"><h4 className="PanelName">Dodaj wpożyczenie</h4></div>
                        <hr className="col-10"></hr>
                        <h5>Wybierz pojazd:</h5>
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
                    <ChooseClient />
                    <hr className="col-10"></hr>
                    <bottom className="btn btn-warning btn-back" onClick={this.props.ShowEmployeePanel}>Powrót</bottom>
                </div>      
            )
        }


    }
}

export default AddNewRent;
