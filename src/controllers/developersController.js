const developerModel = require("../models/developers")
const batchModel = require("../models/batches")

const createDeveloper = async function(req, res) {
    let developerdata = req.body
    let developer = await developerModel.create(developerdata)
    res.send({ msg: developer })
}

const getScholarship = async function(req, res) {
    let developerdata = await developerModel.find({ $and: [{ gender: "female" }, { percentage: { $gte: 70 } }] })
    res.send({ msg: developerdata })
}

const developers = async function(req, res) {

    const pro = await batchModel.find({ program: req.query.program }).select({ _id: 1 });

    const arrayOfProId = [];
    for (let i = 0; i < pro.length; i++) {
        const proId = pro[i]._id;
        arrayOfProId.push(proId);
    }

    const developer = await (await developerModel.find({ $and: [{ batch: arrayOfProId }, { percentage: { $gte: req.query.percentage } }, ], })).populate("batches");
    res.send({ data: developer });
};

module.exports.createDeveloper = createDeveloper
module.exports.getScholarship = getScholarship
module.exports.getScholarship = getScholarship