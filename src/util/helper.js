const printDate = function() {
    console.log('6th April 2022')
};
const printMonth = function() {
    console.log('This month is April , 4th Month of the Year 2022')
};
const getBatchInfo = function() {
    console.log('Uranium, W02,D03,the topic for today is Nodejs Module system')
};
module.exports.date = printDate
module.exports.month = printMonth
module.exports.batch = getBatchInfo