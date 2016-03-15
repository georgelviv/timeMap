var express = require('express')
    , router = express.Router();

router.use('/test', function(req,res){
            res.send('hello world!');
})
module.exports = router
