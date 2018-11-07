const express = require('express')
const app = express()
const Comment = require('../models/comment.js')

//These are the routes for comments
// CREATE Comment
app.post('/reviews/comments', (req, res) => {
    Comment.create(req.body).then(comment => {
      res.redirect(`/reviews/${comment.reviewId}`);
    }).catch((err) => {
      console.log(err.message);
    });
  });

  // DELETE
app.delete('/reviews/comments/:id', function (req, res) {
    console.log("DELETE comment")
    Comment.findByIdAndRemove(req.params.id).then((comment) => {
      res.redirect(`/reviews/${comment.reviewId}`);
    }).catch((err) => {
      console.log(err.message);
    })
  })

module.exports = app;