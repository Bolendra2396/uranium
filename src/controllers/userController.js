const { status } = require("express/lib/response");
const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function(req, res) {
    // try
    try {
        let data = req.body;
        if (!await userModel.exists(data)) {
            let savedData = await userModel.create(data);
            res.status(201).send({ msg: savedData });
        } else {
            res.status(400).send({ status: false, msg: "This User already exists" })
        }
        // catch
    } catch (err) {
        req.status(500).send({ msg: "internal error", error: err.message })
    }
};
const loginUser = async function(req, res) {
    // try
    try {
        let userName = req.body.emailId;
        let password = req.body.password;

        let user = await userModel.findOne({ emailId: userName, password: password });
        if (!user)
            return res.status(404).send({
                status: false,
                msg: "username or the password is not corerct",
            });

        let token = jwt.sign({
                userId: user._id.toString(),
                batch: "Uranium",
                organisation: "FUnctionUp",
            },
            "functionup-thorium"
        );
        res.setHeader("x-auth-token", token);
        res.status(201).send({ status: true, data: token });
        // catch
    } catch (err) {
        req.status(500).send({ msg: "internal error", error: err.message })
    }
};

const getUserData = async function(req, res) {
    try {
        let userId = req.params.userId;
        let userDetails = await userModel.findById(userId);
        if (!userDetails)
            return res.send({ status: false, msg: "No such user exists" });

        res.status(201).send({ status: true, data: userDetails });
    } catch (err) {
        req.status(500).send({ msg: "internal error", error: err.message })
    }
};

const updateUser = async function(req, res) {
    try {

        let userId = req.params.userId;
        let user = await userModel.findById(userId);
        if (!user) {
            return res.send("No such user exists");
        }
        let userData = req.body;
        let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
        res.status(201).send({ status: updatedUser, data: updatedUser });
    } catch (err) {
        req.status(500).send({ msg: "internal error", error: err.message })
    }
};


const deleteUser = async function(req, res, next) {
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
        return res.status(400).send("No such user exists");
    }
    let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, { isDeleted: true }, { new: true, upsert: true });
    res.status(201).send({ status: updatedUser, data: updatedUser });
}

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser