const reverseString = function(str) {
    let strSplit = str.split("")
    let strReverse = strSplit.reverse();
    let strJoin = strReverse.join("");
    return strJoin;
};

// Do not edit below this line
module.exports = reverseString;
