const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const UserController = require('./controllers/UserController');

// app.use(bodyParser.json())
const PORT = 8085;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.post("/user/add", (req, res) => UserController.addUser(req, res));
app.get("/user/get", (req, res) => UserController.getAllUsers(req, res));


app.listen(PORT, () => console.log(`i am Execuitntg on port ${PORT}`));













