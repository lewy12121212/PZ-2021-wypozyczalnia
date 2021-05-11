import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'

const ClientPanel = (props) => {

    return (
        <div>
            <h4>Menadżer klientów</h4>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default ClientPanel;


