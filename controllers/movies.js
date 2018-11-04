const express = require('express');
const app = express();
const Review = require('../models/review.js');
const Comment = require('../models/comment.js');
const MovieDb = require('moviedb-promise');
const moviedb = new MovieDb('23f232628c0802c2d23d52e6054496cb');

app.get('/', (req, res) => {
  moviedb.miscNowPlayingMovies().then(response => {
    res.render('movies-index', { movies: response.results });
  }).catch(console.error)
})

module.exports = app