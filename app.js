const express = require('express')
const app = express()
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
// let reviews = [
//   { title: "High Horse", movieTitle: "Kasey Musgraves" },
//   { title: "Issa Photoshoot", movieTitle: "Star" },
//   {title: "How Does a Moment Last Forever", movieTitle: "Beatuy and the Beast"}
// ]

// INDEX
app.get('/', (req, res) => {
  res.render('reviews-index', { reviews: reviews });
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
})