import React from 'react'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../components_style/style.css'
import '../style.css'
import AddClient from '../../admin_panel/client_panel/AddClient'

class ChooseClient extends React.Component {

    //const [clientsList, setClientsList] = useState([])

    constructor(props) {
        super(props);
        this.state = {
            client: "",
            clientsList: [],
            startDate: this.setTodayDate(),
            endDate: null,
            todayDate: this.setTodayDate()
        };
    }

    setTodayDate(){
        var today = new Date(); 
        var date = today.getFullYear() + '-' + ('0' + (today.getMonth()+1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2)
        return date
    }

    componentDidMount(){
        Axios.get('http://localhost:3001/getAllClientInfo').then((response) => {
            this.setState({
                ...this.state,
                clientsList: response.data
            })
        })
    }

    handleChooseClient = (client) => {
        this.setState({
            ...this.state,
            client: client
        })

    }

    triggerShowMainPanel = () => {
        this.setState({
            ...this.state,
            clientsList: []
        })

        Axios.get('http://localhost:3001/getAllClientInfo').then((response) => {
            this.setState({
                ...this.state,
                clientsList: response.data
            })
        })
    }

    setStartDate = (date) => {
        this.setState({
            ...this.state,
            startDate: date
        })
    }

    setEndDate = (date) => {
        this.setState({
            ...this.state,
            endDate: date
        })
    }

    addVehicleRental = () => {
        this.props.addVehicleRental(this.state.client, this.state.startDate, this.state.endDate)
        this.props.ShowEmployeePanel()
    }

    render() {

        if(this.state.client === ""){
            return (
                <div>
                    <select class="form-select form-select-lg mb-3 col-6" onChange={(e) => {
                        this.handleChooseClient(e.target.value)
                    }}>
                        <option selected value={null}>Dodaj nowego klienta lub wybierz z listy:</option>
                        {this.state.clientsList.map((val) => {
                            return (
                                <option value={val.Id}>{val.Id}. {val.Name} {val.Surname} {val.Phone_number} {val.Mail}</option>
                            )
                        })}
                    </select>
                    <AddClient refresh={this.triggerShowMainPanel}/>
                </div>
            )
        } else {
            return(
                <div>

                    <select class="form-select form-select-lg mb-3 col-6" onChange={(e) => {
                        this.handleChooseClient(e.target.value)
                    }}>
                        <option selected value="">Dodaj nowego klienta lub wybierz z listy:</option>
                        {this.state.clientsList.map((val) => {
                            return (
                                <option value={val.Id}>{val.Id}. {val.Name} {val.Surname} {val.Phone_number} {val.Mail}</option>
                            )
                        })}
                    </select>
                    <hr className="col-10"></hr>
                    <h5>Wybierz datę</h5>
                    <div className="date-box">
                        Data rozpoczęcia: <input type="date" min={this.state.todayDate} onChange={(e) => {
                            this.setStartDate(e.target.value)
                        }}></input>
                        Data zakończenia: <input type="date" min={this.state.startDate} onChange={(e) => {
                            this.setEndDate(e.target.value)
                        }}></input>
                    </div>

                    <hr className="col-10"></hr>
                    <button type="button" className="btn btn-success" onClick={this.addVehicleRental}>Dodaj wypożyczenie</button>
                </div>
            )
        } 
        
    }
}

export default ChooseClient;



