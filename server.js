// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();
const emoji = require('node-emoji');
const { log } = console;
// const pizza = emoji.get('pizza');
// log(pizza);




/////////////////////////////////////////////////////
// Middleware  req => middleware => res
/////////////////////////////////////////////////////
app.use(morgan("tiny")); 
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.send('default route')
})

const artsController = require('./controllers/arts');
app.use('/arts', artsController);

// Listener
app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);