const express = require("express")
const bodyParser = require("body-parser")
const massive = require("massive")
const session = require("express-session")
require("dotenv").config()

const loginCntrl = require("./controllers/login_controller");
const userCntrl = require("./controllers/user_controller");

const app = express()
app.use(bodyParser.json())

// app.use(express.static(`${__dirname}/../dist`))

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

massive(CONNECTION_STRING).then(function(db) {
  app.set("db", db);
  console.log("db is connected");
}).catch(err => {
  console.log(err);
})

app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave: false,
}));

// Login, sign up, logout
app.post('/api/newuser', loginCntrl.signUp)
app.get('/api/user/:email', loginCntrl.login)
app.put('/api/logout', loginCntrl.logout)

// Users
app.get('/api/users', userCntrl.getUsers)
app.get('/api/user', userCntrl.getUser)

const port = SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})