import { Schema, model } from "mongoose";

const answerSchema = new Schema({
  question_id: String,
  answer: String,
  use_tip: Boolean,
  use_answer: Boolean,
  user_id: String,
}, {
  timestamps: true,
  versionKey: false
});

export default model("Answer", answerSchema)