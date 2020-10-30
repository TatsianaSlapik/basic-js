const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) return false;
    let team_name = members.reduce(function(team, member) {
        return typeof(member) == 'string' ? team + member.trim()[0] : team
    }, '');
    return team_name.toUpperCase().split('').sort().join('');
};