const express = require('express');
const mongoose = require('mongoose');
const siteViews = require('../models/visits');

siteViewsUp = function(){
    siteViews.findByIdAndUpdate('61081f9428a6e0e79f643c73', {$inc: {counter: 1}}, {new: true}).then((data)=>{console.log(data.counter)}).catch((err)=>{console.log(err)});
}

module.exports = {siteViewsUp};