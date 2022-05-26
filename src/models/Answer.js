import { Schema, model } from "mongoose";

const answerSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        ref: "Question"},
    answer: String,
    use_answer: Boolean,
    use_tip: Boolean,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User"},
}, {
    timestamps: true,
    versionKey: false
});

export default model("Answer", answerSchema)