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

//zwracanie informacji o pojedździe z tabeli vdb_vehicles
app.get('/getVehicleInfo', (req, res) => { 
    const vehicleId = req.headers['id'];

    const sqlSelect = "SELECT * FROM vdb_vehicles WHERE Id like (?);"
    db.query(sqlSelect, [vehicleId], (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//Zwracanie informacji o naprawach danego pojazdu
app.get('/getVehicleRepairInfo', (req, res) => { 
    const vehicleId = req.headers['id'];

    const sqlSelect = "SELECT * FROM vdb_repairs WHERE Vehicle_id like (?);"
    db.query(sqlSelect, [vehicleId], (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//Zwracanie informacji o wypożyczeniach pojazdu
app.get('/getVehicleRentalsInfo', (req, res) => { 
    const vehicleId = req.headers['id'];

    const sqlSelect = "SELECT * FROM vdb_vehicle_rentals WHERE Vehicle_id like (?);"
    db.query(sqlSelect, [vehicleId], (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//zwracanie listy pojazdów z tabeli vdb_vehicles
app.get('/getVehicleList', (req, res) => { 
    const sqlSelect = "SELECT * FROM vdb_vehicles"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
});

// zwrócenie struktury tabeli na podstawie nazwy
app.get('/getTableStructure', (req, res) => { 
    const vehicleName = req.headers['table'];
    console.log(vehicleName)
    const sqlSelect = "DESCRIBE " + vehicleName
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//zwracanie listy użytkowników danego typu
app.get('/getUsersInfo', (req, res) => { 
    const usersType = req.headers['userstype'];
    console.log(usersType)

    const sqlSelect = "SELECT * FROM vdb_users WHERE Type like (?);"
    db.query(sqlSelect, [usersType], (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//dodawanie naprawy
app.post('/insertRepair', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const reparerId = req.body.reparerId
    const vehicleId = req.body.vehicleId
    const replacedParts = req.body.replacedParts
    const activitiesPerformed = req.body.activitiesPerformed
    console.log(reparerId + vehicleId + replacedParts + activitiesPerformed)

    if(reparerId != "" && vehicleId != "" && replacedParts != "" && activitiesPerformed != "" ){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO vdb_repairs (Reparer_id, Vehicle_id, Replaced_parts, Activities_performed) VALUES (?,?,?,?);"
        db.query(sqlInsert, [reparerId, vehicleId, replacedParts, activitiesPerformed], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }

});

////////////////////////////////////////////////////////////////////
//test EndPoint
app.get('/getVehicle', (req, res) => { 
    const sqlSelect = "SELECT * FROM testTable"
    db.query(sqlSelect, (err, result) => {
        print(result)
        res.send(result)

    })
});

//test EndPoint
app.post('/insertVehicle', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const vehicleName = req.body.vehicleName
    const vehicleModel = req.body.vehicleModel

    if(vehicleName != "" && vehicleModel != ""){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO testTable (Name, Model) VALUES (?,?);"
        db.query(sqlInsert, [vehicleName, vehicleModel], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }

});

//app.get('/addVehicleTest', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
//    const sqlInsert = "INSERT INTO testTable (Name, Model) VALUES ('TestData','TestData');"
//    db.query(sqlInsert, (err, result) => {
//        res.send("add TestData complite!")
//    })
//});

app.post('/login', (req, res) => { // use daje możliwość jednoczesnej obsługi get i post
    console.log("Use Login REQ")
    res.send({token: 'token123'})
    //const login = req.body.login
    //const password = req.body.password
    //
    //console.log(login + password)
    //const sqlSelect = "SELECT * FROM vdb_users WHERE Login LIKE ? AND Password LIKE ?;"
    //db.query(sqlSelect, [login, password], (err, result) => {
    //    //res.send({loginStatus: 1})
    //    console.log(result)
    //    res.send({token: 'token123'})
    //    //if(!err){
    //    //   res.send(result)
    //    //} else {
    //    //    res.send({loginStatus: 0})
    //    //}
    //})
    //res.send('hello login in express server!')
});

app.listen(3001, () => {
    console.log("Server express is running on port 3001")
});

