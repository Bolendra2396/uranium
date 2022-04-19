const batchModel = require("../models/batches")
const developerModel = require("../models/developers")

const createBatch = async function(req, res) {
    let batchdata = req.body
    let batch = await batchModel.create(batchdata)
    res.send({ msg: batch })
}

module.exports.createBatch = createBatch