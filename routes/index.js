var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const siteViews = require('../models/visits');
const SiteViewsUp = require('../src/visitsUp');

/* GET home page. */
router.get('/', function(req, res, next) {
  SiteViewsUp.siteViewsUp();
  siteViews.findById('61081f9428a6e0e79f643c73').then((data)=>{res.render('index', {counter: data.counter});
}, (err)=>(next(err))).catch((err)=>{next(err)})
});

module.exports = router;