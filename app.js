const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const reviews = require('./controllers/reviews.js');
const Review = require('./models/review.js');
const Comment = require('./controllers/comments.js');
const movies = require('./controllers/movies.js')
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(reviews);
app.use(Comment);
app.use(Review);
app.use(movies);

app.listen(port, function () {
  console.log('App listening on port 3000!')
});

module.exports = app;