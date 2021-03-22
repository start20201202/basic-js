const CustomError = require("../extensions/custom-error");


module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw 'Error';

  let transformArr = [];
  for(let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': 
        i++;
        break;

      case '--discard-prev':
        if (arr[i-2] !== '--discard-next') {
          transformArr.pop();
        } 
        break;

      case '--double-next': 
        if (arr[i+1] !== undefined) transformArr.push(arr[i + 1]);
        break;

      case '--double-prev': 
      if (arr[i-1] !== undefined && arr[i-2] !== '--discard-next') transformArr.push(arr[i - 1]);
        break;

      default: 
        transformArr.push(arr[i]);

    }
  }
  return transformArr;
};
