const reverseString = function(text) {
    let charsArray = text.split('');
    charsArray.reverse();
    return charsArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
