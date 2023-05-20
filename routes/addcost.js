const express = require('express');
const router = express.Router();

/* GET addcost page. */
router.get('/', function(req, res, next) {
  res.render('addcost', { title: 'addcost' });
});

module.exports = router;
