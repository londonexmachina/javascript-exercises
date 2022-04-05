const sumAll = function(num1, num2) {
    let j = 0;
    if (num2 > num1 && Math.sign(num1) == 1 && Number.isInteger(num2)) {
        for (let i = num1; i < (num2 + 1); i++) {
            j += i;
        }
        return j;
    } else if (num1 > num2) {
        for (let i = num1; i > (num2 - 1); i--) {
            j += i;
        }
        return j;
    } else {
        return "ERROR"
    }
};


const sumAll = function(num1, num2) {
    let j = 0;
    if (Math.sign(num1) == 1 && Number.isInteger(num2)) {
        if (num2 > num1) {
            for (let i = num1; i < (num2 + 1); i++) {
                j += i;
            }
            return j;
        } else {
            for (let i = num1; i > (num2 - 1); i--) {
                j += i;
            }
            return j;
        }
    } else {
        return "ERROR";
    }
};



