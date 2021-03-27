import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VehicleList from './components/VehicleList'
import AddDataFrom from './components/AddDataForm'


function App() {
  return (
    <div>
      <VehicleList />
      <AddDataFrom />
    </div>

    );
}

export default App;
