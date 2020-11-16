var express = require('express');
var router = express.Router();
const homepageController = (req, res) => {
  res.render('index', { title: 'Express' });
  };
/* GET home page. */
router.get('/', homepageController);

module.exports = router;
