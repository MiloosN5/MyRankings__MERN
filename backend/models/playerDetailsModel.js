import mongoose from "mongoose";

const playerDetailsSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        birthdate: {
            type: Number,
            required: false
        },
        flag: {
            type: String,
            required: false
        },
        myid: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        },
        country: {
            type: Array,
            required: true
        },
        photo: {
            type: Object,
            required: false
        },
        myRanking: {
            type: Number,
            required: true
        },
        rankings: {
            type: Object,
            required: true
        },
        birthplace: {
            type: String,
            required: false
        },
        coach: {
            type: String,
            required: false
        },
        grandSlam: {
            type: Object,
            required: true
        },
        height: {
            type: String,
            required: false
        },
        money: {
            type: String,
            required: false
        },
        pro: {
            type: Number,
            required: false
        },
        residence: {
            type: String,
            required: false
        },
        titlesItf: {
            type: Object,
            required: true
        },
        titlesWta: {
            type: Object,
            required: true
        },
    },
    {
        timestamps: true
    }
);

export const PlayerDetails_man = mongoose.model('PlayerDetails_man', playerDetailsSchema);
export const PlayerDetails_woman = mongoose.model('PlayerDetails_woman', playerDetailsSchema);

