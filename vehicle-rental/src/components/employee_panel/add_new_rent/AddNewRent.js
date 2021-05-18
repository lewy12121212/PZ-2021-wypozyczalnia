import React from 'react';
import '../../../components_style/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'
import AvailableVehicleList from './AvailableVehicleList'

class AddNewRent extends React.Component {

    render() {
        return (
            <div className="container justify-content-center">
                <div className="row justify-content-center"><h4 className="PanelName">Dodaj wpożyczenie</h4></div>
                    <AvailableVehicleList />
                <bottom className="btn btn-warning" onClick={this.props.ShowEmployeePanel}>Powrót</bottom>
            </div>      
        );
    }
}

export default AddNewRent;
