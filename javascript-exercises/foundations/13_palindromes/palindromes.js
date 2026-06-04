const palindromes = function (str) {
    str = str.toLowerCase().split("");
    let clearStr = str.filter(a => a.match(/[a-z0-9]/))
    return clearStr.join("") == clearStr.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
