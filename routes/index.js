var express = require('express');
var router = express.Router();
let products=require("../public/javascripts/products")


router.get('/',function(req, res) {
  if (req.session.loggedIn) {
    res.render('home',{products})
  } else {
    res.render('index');
  }
});


router.get('/home',function(req, res) {
  if (req.session.loggedIn) {
    res.render('home',{products})
  } else {
    res.redirect('/');
  }
});

  const email = "hamraskk@gmail.com";
  const password = "12345";

router.post("/", (req, res) => {
  const data = {
    email: req.body.email,
    pass: req.body.password}
  if (data.email === email && data.pass === password) {
    req.session.loggedIn=true;
    res.redirect('/home')
  } else {
    res.redirect('/');
  }
})

router.post("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
})


module.exports = router;
