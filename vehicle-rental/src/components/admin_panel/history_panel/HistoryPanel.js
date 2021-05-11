import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const HistoryPanel = (props) => {

    return (
        <div>
            <h4>Historia</h4>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default HistoryPanel;


