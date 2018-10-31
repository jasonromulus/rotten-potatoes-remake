module.exports = (app) => {
    //New comment 
    app.post ('/reviews/comments', (req, res) => {
        res.send('reviews comment')
    })
}