// The stuff to start it
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;
const exphbs = require('express-handlebars');

//Models that are needed
const Review = require('./models/review.js');



//Mongoose Connections
const mongoose = require('mongoose');

//connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/rotten-potatoes', {useNewUrlParser: true});

//Handlebars stuff
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// middleware
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));

//Controllers that are needed
const Comment = require('./controllers/comments.js');
require('./controllers/movies.js')(app);
const reviews = require('./controllers/reviews.js');

//these access my controls
app.use(reviews);
app.use(Comment);
app.use(Review);

//Listen for the port
app.listen(port, function () {
  console.log('App listening on port 3000!')
});

module.exports = app;