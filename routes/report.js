const express = require('express');
const router = express.Router();

/* GET report page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'report' });
});

module.exports = router;
