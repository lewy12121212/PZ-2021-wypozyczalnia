

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

//zwracanie listy użytkowników
app.get('/getAllUsersInfo', (req, res) => { 
    const sqlSelect = "SELECT * FROM vdb_users;"
    db.query(sqlSelect, (err, result) => {
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

//dodawanie użytkownika
app.post('/insertUser', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const name = req.body.name
    const surname = req.body.surname
    const login = req.body.login
    const password = req.body.password
    const type = req.body.type

    console.log(name, surname, login, password, type)

    if(name != "" && surname != "" && login != "" && password != "" && type != ""){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO vdb_users (Name, Surname, Login, Password, Type) VALUES (?,?,?,?,?);"
        db.query(sqlInsert, [name, surname, login, password, type], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }
});

//usuwanie użytkownika
app.delete('/deleteUser', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const userId = req.headers['id'];
    console.log("userId: " + userId)

    if(userId != ""){
        const sqlInsert = "DELETE FROM vdb_users WHERE Id like (?);"
        db.query(sqlInsert, [userId], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }

});

//dodawanie pojazdu
app.post('/insertVehicle', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const name = req.body.name
    const model = req.body.model
    const type = req.body.type
    const engine = req.body.engine
    const state = req.body.state
    const img = req.body.img

    console.log(name, model, type, engine, state, img)

    if(name != "" && model != "" && type != "" && engine != "" && state != "" && img != ""){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO vdb_vehicles (Name, Model, Type, Engine_capacity, State, Img) VALUES (?,?,?,?,?,?);"
        db.query(sqlInsert, [name, model, type, engine, state, img], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }
});

//usuwanie pojazdu
app.delete('/deleteVehicle', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const vehicleId = req.headers['id'];
    console.log("vehicleId: " + vehicleId)

    if(vehicleId != ""){
        const sqlInsert = "DELETE FROM vdb_vehicles WHERE Id like (?);"
        db.query(sqlInsert, [vehicleId], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }

});

//zwracanie listy klientów
app.get('/getAllClientInfo', (req, res) => { 
    const sqlSelect = "SELECT * FROM vdb_customer;"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//dodawanie klienta
app.post('/insertClient', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const name = req.body.name
    const surname = req.body.surname
    const phone = req.body.phone
    const mail = req.body.mail

    console.log(name, surname, phone, mail)

    if(name != "" && surname != "" && phone != "" && mail != ""){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO vdb_customer (Name, Surname, Phone_number, Mail) VALUES (?,?,?,?);"
        db.query(sqlInsert, [name, surname, phone, mail], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }
});

// usuwanie klienta
app.delete('/deleteClient', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const clientId = req.headers['id'];
    console.log("userId: " + clientId)

    if(clientId != ""){
        const sqlInsert = "DELETE FROM vdb_customer WHERE Id like (?);"
        db.query(sqlInsert, [clientId], (err, result) => {
            console.log(result)
        })
    } else {
        console.log("empty data to database :(")
    }

});

//zwracanie pełnej listy napraw
app.get('/getAllRepairsInfo', (req, res) => { 

    const sqlSelect = "SELECT * FROM vdb_repairs"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//zwracanie pełnej listy wpożyczeń
app.get('/getAllRentalsInfo', (req, res) => { 

    const sqlSelect = "SELECT * FROM vdb_vehicle_rentals"
    db.query(sqlSelect, (err, result) => {
        console.log(result)
        res.send(result)
    })
});

//zwracanie listy dostępnych pojazdów z tabeli vdb_vehicles
app.get('/getAvailableVehicleList', (req, res) => { 
    const sqlSelect = "SELECT * FROM vdb_vehicles WHERE State like 'dostępny'"
    db.query(sqlSelect, (err, result) => {
        res.send(result)
    })
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
app.post('/insertVehicletest', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
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

//dodawanie wypożyczenia
app.post('/insertVehicleRental', (req, res) => { //req -> do pobrania danych z frontend / res -> do wysłania danych na frontend
    
    const clientId = req.body.client
    const vehicleId = req.body.vehicle
    const startData = req.body.startDate
    const endDate = req.body.endDate
    const state = "aktywne"

    console.log(clientId, vehicleId, startData, endDate)

    if(clientId != "" && vehicleId != "" && startData != "" && endDate != ""){
        //console.log("ojć" + vehicleName +", "+ vehicleModel)
        const sqlInsert = "INSERT INTO vdb_vehicle_rentals (Customer_id, Vehicle_id, Rent_data, Return_data, State) VALUES (?,?,?,?,?);"
        db.query(sqlInsert, [clientId, vehicleId, startData, endDate, state], (err, result) => {
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

