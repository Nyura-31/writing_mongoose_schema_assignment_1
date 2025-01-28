const mongoose = require("mongoose")

const newSchema = new mongoose.Schema({
    userFields: {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email :{
            type: String,
            required: true,
            unique: true,
        },password: {
            type: String,
            required: true,
        },
        roles: {
            type: [String]
        },
    },
    profileFields: {
        firstName:{
            type: String,
        },
        lastName: {
            type: String,
        },
        age: {
            type: Number,
        },
    },
    Activity: {
        lastLogin:{
            type:Date,
            default : ()=> Date.now(),
        },
    },



})

module.exports = mongoose.model("userFields", newSchema);