// Given solution

// const reverseString = function (string) {
//   return string.split("").reverse().join("");
// };

const reverseString = function(str) {
    if(!str) return "";
    let result = "";
    for(let i = str.length; i > 0; --i)
        result += str[i-1];
    return result
};


console.log(reverseString("Hello"))

// Do not edit below this line
module.exports = reverseString;
