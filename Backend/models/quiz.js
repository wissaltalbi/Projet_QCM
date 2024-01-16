const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  nom: {
    type: String,
    required: true,
  },
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;
