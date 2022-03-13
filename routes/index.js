var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fate Series', fragmento: 'fragments/fate_zero'});
});

router.get('/fsn', function(req, res){
  res.render('index', {
    title: 'Fate Stay Night',
    fragmento: 'fragments/fate_stay_night'
  })
});

router.get('/fsnubw', function(req, res){
  res.render('index', {
    title: 'Fate Stay Night Unlimited Blade Works',
    fragmento: 'fragments/fate_stay_night_ubw'
  })
});

router.get('/fsnhf', function(req, res){
  res.render('index', {
    title: 'Fate Stay Night Heavens Feel',
    fragmento: 'fragments/fate_stay_night_hf'
  })
});

router.get('/fa', function(req, res){
  res.render('index', {
    title: 'Fate Apocrypha',
    fragmento: 'fragments/fate_apocrypha'
  })
});

router.get('/fgo', function(req, res){
  console.log("Settings");
  res.render('index', {
    title:'Fate Grand Order',
    fragmento: 'fragments/fate_grand_order'
  })
});

module.exports = router;
