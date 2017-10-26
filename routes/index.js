
// Dependencies 
const express = require('express');
const router = express.Router();
// ----------------------------------------------------------------------------

// Routes
router.get('/', function (req, res) {
  res.render('index');
});

module.exports = router;
