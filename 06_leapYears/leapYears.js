const leapYears = function(num) {
    if (num % 4 == false && num % 100 == false && num % 400 == false) {
        return true;
    } else if (num % 4 == false && num % 100 == true) {
        return true;
    } else if (num % 4 == false && num % 100 == false) {
        return false; 
    } else if (num % 4 == false) {
        return true;
    } else { 
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
