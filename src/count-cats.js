const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array){
  let count = 0;
  array.forEach(function(item){
    for(let i = 0; i < item.lenght; i++) {
      item[i] === "^^" && count ++;
    }})
  return count;
}
