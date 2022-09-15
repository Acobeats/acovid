const express = require('express');
const router = express.Router();
const {getInfoMail} = require('../controllers/getInfoMail')

/* GET home page. */
router.post('/emailinfo', getInfoMail);

module.exports = router;
