const CustomError = require("../extensions/custom-error");

/*module.exports =*/ function getSeason(date) {
if (!date){
    return 'Unable to determine the time of year!'; //Если аргумент `date` не был передан
}
if (isNaN(date.getTime())) {
    return 'Error' //Если аргумент `date` некорректный
}
let month = date.getMonth() +1; //С даты получаем номер месяца
if (month = 12 || month < 3){
    return 'winter';
} else if (month < 6) {
    return 'spring';
}else if (month < 9) {
    return 'summer';
} else if (month < 12) {
    return 'autumn';
}};
console.log (getSeason(2020-12-02))
