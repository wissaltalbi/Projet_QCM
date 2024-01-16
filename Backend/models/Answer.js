const mongoose = require('mongoose');

const answerSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  estcorrect: {
    type: Boolean,
    required: true,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question',  
  },
});
const Answer = mongoose.model('Answer', answerSchema);

module.exports = Answer;
