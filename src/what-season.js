const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date == null || date === undefined) return 'Unable to determine the time of year!';
    if (toString.call(date) != '[object Date]') throw Error('This is not a date');
    let month = date.getMonth();
    if (month < 2 || month >= 11) {
        return 'winter';
    } else if (month < 5) {
        return 'spring';
    } else if (month < 8) {
        return 'summer';
    } else if (month < 11) {
        return 'autumn';
    }

};