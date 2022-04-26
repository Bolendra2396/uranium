let axios = require("axios")
const express = require('express');


let getStates = async function(req, res) {

        try {
            let options = {
                method: 'get',
                url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
            }
            let result = await axios(options);
            console.log(result)
            let data = result.data
            res.status(200).send({ msg: data, status: true })
        } catch (err) {
            console.log(err)
            res.status(500).send({ msg: err.message })
        }
    }
    // 1.  WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" 
    //     for any given district id and for any given dae. 
    //     This is a very basic assignment and totally along the lines of what we covered in the session

let getDistrictsession = async function(req, res) {
    try {
        let data1 = req.query.districtId
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${data1}
            &date=${date}`

        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function(req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function(req, res) {
    try {
        let blahhh = req.body

        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// Question 2

let getSortedCities = async function(req, res) {
    try {
        let city = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let arrayOfCities = []
        for (let i = 0; i < city.length; i++) {
            let obj = { city: city[i] }
            let options = {
                method: 'get',
                url: `http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=6751037ef50555014c243bdc8ef6d520`
            }
            let result = await axios(options)
            obj.temp = result.data.main.temp
            console.log(obj.temp)
            arrayOfCities.push(obj)
        }
        let sortedTemp = arrayOfCities.sort((a, b) => { return a.temp - b.temp })
        res.status(200).send({ status: true, msg: sortedTemp })
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}

// question3 --> Create Meme

const createMeme = async function(req, res) {
    try {
        let template_id = req.query.template_id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let userName = req.query.userName
        let password = req.query.password

        let options = {
            method: "post",
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}
            &text0=${text0}&text1=${text1}&username=${userName}&password=${password}`
        }
        let result = await axios(options)
        res.status(200).send({ status: true, msg: result.data })
    } catch (err) {
        console.log(err.message)
        res.status(500).send({ msg: err.message })
    }
}




module.exports.getStates = getStates
module.exports.getSortedCities = getSortedCities
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsession = getDistrictsession
module.exports.createMeme = createMeme