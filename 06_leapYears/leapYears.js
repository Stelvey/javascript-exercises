const leapYears = function(year) {
    let divisibleByFour = year % 4 === 0;
    if (divisibleByFour && year % 100 !== 0) {
        return true;
    } else if (divisibleByFour && year % 400 === 0) {
        return true;
    }
    return false;
};

// A better solution, really:
// return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

// Do not edit below this line
module.exports = leapYears;
