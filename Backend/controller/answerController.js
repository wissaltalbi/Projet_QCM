const Answer = require('../models/Answer');

const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find().populate('question');
    console.log('Answers:', answers); // Add this line for debugging
    res.json(answers);
  } catch (error) {
    console.error('Error fetching answers:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllAnswers,
};
