import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../style.css'
import RentalsInfo from '../../vehicle_info_component/RentalsInfo'
import RepairsInfo from '../../vehicle_info_component/RepairsInfo'

const HistoryPanel = (props) => {

    var tableName = ""
    const [repairDataTable, setRepairDataTable] = useState(false)
    const [rentalsDataTable, setRentalsDataTable] = useState(false)


    const [RepairData, setRepairData] = useState([])
    const [RentalsData, setRentalsData] = useState([])


    function setTableName(name){
        tableName = name
    }

    function setTableVisable(){

        if(tableName === "vdb_repairs"){
            setRepairDataTable(true)
            setRentalsDataTable(false)
        } else if(tableName === "vdb_vehicle_rentals"){
            setRepairDataTable(false)
            setRentalsDataTable(true)  
        }
    }
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/getAllRepairsInfo').then((response) => {
            setRepairData(response.data)
        })
    }, []);
    
    useEffect(()=> {
        Axios.get('http://localhost:3001/getAllRentalsInfo').then((response) => {
            setRentalsData(response.data)
        })
    }, []);

    return (
        <div>
            <h4>Historia</h4>
            <select  class="form-select form-select-lg mb-3 col-6"  onChange={(e) => {
                setTableName(e.target.value)
                setTableVisable()
                console.log("ustawiono:"+ tableName)
            }}>
                <option value="none" selected hidden>...Wtbierz historię do wyświetlenia</option>
                <option value="vdb_repairs">Historia napraw</option>
                <option value="vdb_vehicle_rentals">Historia wypożyczeń</option>
            </select><br></br>

            <div className="history_table_box">
                {repairDataTable && <div className=""><RepairsInfo vehicleRepairData={RepairData} /></div>}
                {rentalsDataTable && <div className=""><RentalsInfo vehicleRentalsData={RentalsData} /></div>}
            </div>
            <button className="btn btn-warning" onClick={props.triggerShowMainPanel}>Powrót</button>
        </div>
    );
}

export default HistoryPanel;


