const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const developerSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["female", "male", "other"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "Batches"
    }
}, { timeStamps: true });

module.exports = mongoose.model('Developer18thapril', developerSchema)