const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  if (options.separator === undefined) {
    options.separator = '+';
  }
	if (options.additionSeparator === undefined) {
    options.additionSeparator = '|';
  }
	if (options.repeatTimes === undefined) {
    options.repeatTimes = 1;
  }
	if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1;
  }
  if (options.addition !== undefined) {
    options.addition = String(options.addition);
  }
	str = String(str);
  let r = [];
  let arr = [];
  
  for(let i = 0; i < options.additionRepeatTimes; i++) {
    arr.push(options.addition);
  }
  
  str += arr.join(options.additionSeparator);
  
  for(let i = 0;  i < options.repeatTimes; i++) {
    r.push(str);
  }
  return r.join(options.separator);
};
  
  
