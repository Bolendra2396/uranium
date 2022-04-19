const mongoose = require('mongoose');
// const Objectid = mongoose.Schema.Types.ObjectID

const batchesSchema = new mongoose.Schema({
        name: String,
        size: Number,
        program: {
            type: String,
            enum: ["frontend", "backend"]
        }
    },

    { timeStamps: true });

module.exports = mongoose.model('Batches', batchesSchema)