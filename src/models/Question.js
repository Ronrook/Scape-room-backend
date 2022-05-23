const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question_number: Number,
  group: String,
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
  tips: Array,
}, {
  timestamps: true,
  versionKey: false
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = {Question};