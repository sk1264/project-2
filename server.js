// Dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan'); 
const methodOverride = require('method-override');
const app = express();

/////////////////////////////////////////////////////
// Middleware  req => middleware => res
/////////////////////////////////////////////////////
app.use(morgan("tiny")); 
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('default route')
})

const artsController = require('./controllers/arts');
app.use('/arts', artsController);

app.post("/monkey", (req, res, next) => {
    const options = {
      apiKey: "2ebc72bcc7f50020878a9ea327a0b05a", // MANDATORY apikey for imgBB
      base64string: req.body.base64string,
      // OPTIONAL: pass base64-encoded image (max 32Mb)
    };
    imgbbUploader(options)
      .then((response) => {
        res.json(response);
      })
      .catch((error) => console.error(error));
  });

// Listener
app.listen(process.env.PORT, () =>
	console.log(`express is listening on port: ${process.env.PORT}`)
);