import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../components_style/style.css'
import './style.css'

const MainPanel = (props) => {


    return (
        <div>
            <div className="sectionBox">
                <button className="btn btn-success col-4" onClick={props.triggerShowUserPanel}>Zarządzaj użytkownikami</button>
            </div>
            <div className="sectionBox">
                <button className="btn btn-success col-4" onClick={props.triggerShowVehiclePanel}>Zarządzaj pojazdami</button>
            </div>
            <div className="sectionBox">
                <button className="btn btn-success col-4" onClick={props.triggerShowClientPanel}>Zarządzaj klietami</button>
            </div>
            <div className="sectionBox">
                <button className="btn btn-success col-4" onClick={props.triggerShowHistoryPanel}>Wyświetl historię wypożyczeń</button>
            </div>
        </div>
    );
}

export default MainPanel;


