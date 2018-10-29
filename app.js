const express = require('express')
const app = express()
var exphbs = require('express-handlebars');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const reviews = require('./controllers/reviews.js');
var mongoose = require('mongoose');
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes');

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(reviews);


app.listen(3000, () => {
  console.log('App listening on port 3000!')
})

module.exports = app;