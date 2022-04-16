const trim = function() {
    let str = 'functionUp'
    console.log('str.trim()')
};
const lower = function changeToLowerCase() {
    let str = 'FUNCTIONUP'
    console.log(str.toLowerCase())
};
const upper = function changeToUpperCase() {
    let str = 'functionup'
    console.log(str.toUpperCase())
};
module.exports.trim1 = trim
module.exports.trim2 = lower
module.exports.trim3 = upper