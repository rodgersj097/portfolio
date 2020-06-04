var express = require('express');
var router = express.Router();
var mailer = require('../config/mailer')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/work', function(req, res, next) {
    res.render('work')
})

router.get('/contact', function(req, res, next) {
    res.render('contact')
})

router.get('/about', function(req,res,next){
    res.render('about')
})
router.post('/email', function(req, res, next) {
    const data = {}
    data.fullName = req.body.fullName
    data.email = req.body.email
    data.content = req.body.content
    mailer.sendMailRequestACall(data)
    res.end()
})
module.exports = router;