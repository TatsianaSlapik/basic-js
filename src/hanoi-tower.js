const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let secondsHour = 3600;
    let minSteps = 2;
    let turns = Math.pow(minSteps, disksNumber) - 1;
    let seconds = Math.floor(turns / turnsSpeed * secondsHour);
    return { turns: turns, seconds: seconds }
};