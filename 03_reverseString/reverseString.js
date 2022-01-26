const reverseString = function(str) {
    const reversedStringArray = str.split("");
    reversedStringArray.reverse();
    return reversedStringArray.join("");
};

reverseString("hello");
reverseString("hello there");
reverseString("123! abc!");
reverseString("");




// Do not edit below this line
module.exports = reverseString;