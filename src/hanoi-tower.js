const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let r = {};
let turns = Math.pow(2, diskNumber) - 1;
r.turns = turns;
r.seconds = math.floor(turns / turnsSpeed * 3600);
return r;
};
