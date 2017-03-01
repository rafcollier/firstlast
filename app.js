//us.router is external module, so add as a dependency in the app
// HV22pAXxjBkK
// express --ejs flapper-news (ejs to use standard HTML and not Jade)
//run npm run dev
//http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/  --- to set up mongodb
//mongod --dbpath c:\node\nodetest1\data\
//mongod --shutdown
//use admin
//db.shutdownServer()
//testuser, testpassword
//npm start
//db.getCollection.Names()
//GitHub -- $0rJ<$6nFa>*

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
	console.log('Connected to database ' + config.database);
})

mongoose.connection.on('error', () => {
	console.log('Database error' + err);
})

const app = express();

const users = require('./routes/users');

const port = 3000;

//CORS middleware
app.use(cors());

//
app.use(express.static(path.join(__dirname, 'public')));

//Body Parser Middleware
app.use(bodyParser.json());

app.use('/users', users)

//Index Route
app.get('/', (req, res) => {
	res.send('Invalid Endpoint');
});

//Start Server
app.listen(port, () => {
	console.log('Server started on port ' + port);
});