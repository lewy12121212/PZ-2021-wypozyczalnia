import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import AddUser from './AddUser'
import DelUser from './DelUser'

const UsersPanel = (props) => {

    return (
        <div>
            <h4>Menadżer użytkowników</h4>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <AddUser refresh={props.triggerShowMainPanel}/>
                    </div>
                    <div className="col">
                        <DelUser refresh={props.triggerShowMainPanel}/>    
                    </div>
                </div>
            </div>
            <br></br>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default UsersPanel;


