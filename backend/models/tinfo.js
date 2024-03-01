import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    review: {
        type: String,
        required: true,
    },
    upvote: {
        type: Number,
        required: false,
        default: 0,  // Default value for upvotes
    },
    downvote: {
        type: Number,
        required: false,
        default: 0,  // Default value for downvotes
    },
});

export const Review = mongoose.model('Review', reviewSchema);


