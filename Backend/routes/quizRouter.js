const express = require('express');
const router = express.Router();
const quizController = require('../controller/quizControllers');

router.get('/', quizController.getAllQuizzes);

module.exports = router;
