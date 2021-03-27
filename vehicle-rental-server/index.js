const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'react_vehicleDB'
});

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))


app.get('/', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    res.send('hello express server!')
});

app.post('/insertVehicle', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const vehicleName = req.body.vehicleName
    const vehicleModel = req.body.vehicleModel

    const sqlInsert = "INSERT INTO vehicles (Name, Model) VALUES (?,?);"
    db.query(sqlInsert, [vehicleName, vehicleModel], (err, result) => {
        console.log(result)
    })

});

app.get('/addVehicleTest', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    const sqlInsert = "INSERT INTO testTable (Name, Model) VALUES ('TestData','TestData');"
    db.query(sqlInsert, (err, result) => {
        res.send("add TestData complite!")
    })
});

app.get('/login', (req, res) => {
    res.send('hello login in express server!')
});

app.listen(3001, () => {
    console.log("Server express is running on port 3001")
});

