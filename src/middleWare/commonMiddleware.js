const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const userModel = require("../models/userModel");

const authToken = function(req, res, next) {
    try {
        let id = req.params.userId;
        if (!mongoose.isValidObjectId(id)) {
            return res.status(400).send({
                msg: "Invalid userId",
            });
        }

        let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
        if (!token) {
            return res.send({
                msg: "Token is required",
            });
        }

        let tokenverify = jwt.verify(token, "functionup-uranium");

        if (tokenverify.userId !== id) {
            return res.status(401).send({
                msg: "You aren't allowed",
            });
        }

        next();

    } catch (error) {
        res.status(500).send({
            msg: error.message
        })
        console.log(error.message);
    }
};
const userExist = async function(req, res, next) {

    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
        return res.send({ status: false, msg: "No such user exists" });
    else {
        next()
    }
}
module.exports.userExist = userExist
module.exports.authToken = authToken
    // module.exports.userExist = userExist

//  const jwt = require("jsonwebtoken")
// const userModel = require("../models/userModel")
// const authToken = function(req, res, next) {
//     try {
//         let id = req.para.userId;
//         if (!mongoose.isValidObject(id)) {
//             return res.status(400).send({ msg: "Invalid UserId" })
//         }
//     }
// };

// let token = req.headers["x-Auth-token"];
// if (!token) token = req.headers["x-auth-token"];

// //If no token is present in the request header return error
// if (!token) return res.send({ status: false, msg: "token must be present" });

// console.log(token);

// let decodedToken = jwt.verify(token, "functionup-uranium");
// if (!decodedToken == id)
//     return res.status(401).send({ status: false, msg: "token is invalid" });
// else {
//     next()
// } catch (err) {
//     req.status(500).send({ msg: "internal error", error: err.message })
// }
// };

// const userExist = async function(req, res, next) {

//     let userId = req.params.userId;
//     let userDetails = await userModel.findById(userId);
//     if (!userDetails)
//         return res.send({ status: false, msg: "No such user exists" });
//     else {
//         next()
//     }
// }
// module.exports.userExist = userExist
// module.exports.authToken = authToken

// let decodedToken = jwt.verify(token, "functionup-uranium");
// if (!decodedToken == id)
//     return res.status(401).send({ status: false, msg: "token is invalid" });
// else {
//     next()
// } catch (err) {
//     req.status(500).send({ msg: "internal error", error: err.message })
// }
// };

// const userExist = async function(req, res, next) {

//     let userId = req.params.userId;
//     let userDetails = await userModel.findById(userId);
//     if (!userDetails)
//         return res.send({ status: false, msg: "No such user exists" });
//     else {
//         next()
//     }
// }
// module.exports.userExist = userExist
// module.exports.authToken = authToken