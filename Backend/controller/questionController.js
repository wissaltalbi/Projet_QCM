// In questionController.js
const Question = require('../models/Question');

const getAllQuestions = async (req, res) => {
  try {
    const questions = await Question.find().populate('quiz');  // Update to 'quiz'
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllQuestions,
};
