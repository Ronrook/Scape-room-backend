const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question: String,
  correct_answer: String,
  incorrect_answers: Array,
  tips: Array,
});

const Question = mongoose.model("Questions", questionSchema);

module.exports = {Question};