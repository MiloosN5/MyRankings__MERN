import mongoose from "mongoose";

const playerSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        ranking: {
            type: Number,
            required: true
        },
        country: {
            type: Array,
            required: true
        },
        birthyear: {
            type: Number,
            required: true
        },
        flag: {
            type: String,
            required: false
        },
        slug: {
            type: String,
            required: true
        },
        myid: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export const Player_man = mongoose.model('Player_man', playerSchema);
export const Player_woman = mongoose.model('Player_woman', playerSchema);

playerSchema.pre('save', function preSave(next) {
    this.updatedAt(Date.now());
    next();
});



