const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('23f232628c0802c2d23d52e6054496cb');

//Index
module.exports = (app) => { 
  app.get('/', (req, res) => {
    moviedb.miscNowPlayingMovies().then(response => {
      // console.log(response)
      if(req.header('Content-Type') == 'application/json'){return res.send({movies:response})}
      res.render('movies-index', { movies: response.results });
    }).catch(console.error)
  });

app.get('/movies/:id', (req, res) => {
  moviedb.movieInfo({ id: req.params.id }).then(movie => {
    res.render('movies-show', { movie: movie });
  }).catch(console.error)
});

// router.get('/movies/:id', (req, res) => {
//   moviedb.movieInfo({ id: req.params.id }).then(movie => {
//     moviedb.movieTrailers({ id: req.params.id }).then(videos => {
//       movie.trailer_youtube_id = videos.youtube[0].source
//       console.log('VIDEOS.TRAILER_YOUTUBE_ID', videos.trailer_youtube_id)

//       res.render('movies-show', { movie: movie });
//     }).catch(console.error);
//   }).catch(console.error);
// });
}
