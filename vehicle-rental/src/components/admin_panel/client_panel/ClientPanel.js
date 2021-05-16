import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import AddClient from './AddClient'
import DelClient from './DelClient'

const ClientPanel = (props) => {

    return (
        <div>
            <h4>Menadżer klientów</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AddClient refresh={props.triggerShowMainPanel}/>
                    </div>
                    <div className="col">
                        <DelClient refresh={props.triggerShowMainPanel}/>    
                    </div>
                </div>
            </div>
            <br></br>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default ClientPanel;


