const express = require('express');
const router = express.Router();
const answerController = require('../controller/answerController');

router.get('/', answerController.getAllAnswers);

module.exports = router;
