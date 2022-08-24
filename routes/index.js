var express = require('express');
var router = express.Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date("Jan 01 2021").toLocaleDateString('en-us', { day:"numeric", month:"short", year:"numeric" })
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date("Jan 02 2022").toLocaleDateString('en-us', { day:"numeric", month:"short", year:"numeric" })
    }
 ];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next){
    res.render('form');
});

router.post('/new', function(req, res, next){
    console.log('Form submitted');
    messages.push(
        {
            text: req.body.message,
            user: req.body.name,
            added: new Date().toLocaleDateString('en-us', { day:"numeric", month:"short", year:"numeric" })
        })
    res.redirect('/');
});

module.exports = router;
