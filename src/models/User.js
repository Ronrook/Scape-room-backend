import { Schema, model } from "mongoose";


const productSchema = new Schema(
    {
        username: {
        type: String,
        unique: true,
        },
        email: {
        type: String,
        unique: true,
        },
        password: {
        type: String,
        required: true,
        },
        roles: [
        {
            type: Schema.Types.ObjectId,
            ref: "Role",
        },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


export default model("User", productSchema);