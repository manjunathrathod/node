const express = require('express');
const router = express.Router();

const greetingController = require('../controllers/greetingController');

router.get('/', greetingController.sayHello);

module.exports = router;