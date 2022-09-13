var express = require('express');
var router = express.Router();
const {getInfoMail} = require('../controllers/getInfoMail')

/* GET home page. */
router.get('/emailInfo', getInfoMail);

module.exports = router;
