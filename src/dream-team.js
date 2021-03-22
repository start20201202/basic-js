const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(team) {
if (!Array.isArray(team)) 
return false
let name = []
team.forEach (t => {
if (typeof t === 'string') name.push(t.trim().charAt(0).toUpperCase())
})
return name.sort().join('')
};

console.log(createDreamTeam(['Peter', 'Adam', 'Gary', 'Bobby', 'Philip', 'Andrea', 'Evelyn', 'Evelyn', 'Kimberly', 'Denise']));
