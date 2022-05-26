import { Schema, model } from "mongoose";

const answerSchema = new Schema({
    question_id: {
        type: Schema.Types.ObjectId,
        ref: 'Question'
    },
    correct_answer: Boolean,
    answer: String,
    use_tip: Boolean,
    use_answer: Boolean,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true,
    versionKey: false
});

export default model("Answer", answerSchema)