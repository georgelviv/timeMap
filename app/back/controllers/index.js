var express = require('express'),
    router = express.Router();
    eventCtrl = require('./event');





router.use('/event', eventCtrl);



router.use('/users', function(req,res){
    res.send('users')
});
//router.get('*', function(req, res){
//    res.redirect('/#' + req.url);
//})
module.exports = router;
//router.get('/', function(req, res) {
//    Comments.all(function(err, comments) {
//        res.render('index', {comments: comments})
//    })
//})
