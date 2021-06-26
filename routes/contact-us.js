const express = require('express');
const path = require('path');
const router = express.Router();
const rootDir =require('../util/path')


// 
router.get('/contact-us', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'));
  });
  
//  /admin/add-product =>POST
  router.post('/', (req, res, next) => {
    console.log(req.body);
    // res.send('form added successfully');
    res.redirect('/');

  });
  
  module.exports = router;