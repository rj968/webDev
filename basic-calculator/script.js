const containerEl = document.querySelector(".calculator");
const outputEl = document.querySelector("#output-box");
const equalsEl = document.querySelector("#equals");
const clearEl = document.querySelector("#clear");
const DECIMAL_PRECISION = 10000;


function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    if(b == 0)
        return NaN;
    return a/b;
}

function clear()
{
    outputEl.textContent = "";
}

function addToOutput(str)
{
    outputEl.textContent += str;
}


function getInput()
{
    containerEl.addEventListener("click", event => 
    {

        if(outputEl.textContent.charAt(0).match(/[a-zA-Z0]/))
            clear();

        if(event.target.id == "equals")
        {
            return outputEl.textContent += "\n" + calculate(outputEl.textContent.split(""));
        }

        if(event.target.id == "clear")
        {
            return clear();
        }

        if(event.target.classList.contains("symbol") || 
            event.target.classList.contains("number") ||
            event.target.classList.contains("point"))
        {
            return addToOutput(event.target.textContent);
        }
    })
}

function isSymbol(char)
{
    // MY CODE
    // if(str == undefined)
    //     return false;

    // if(str.length != 1)
    //     return false;
    
    // let symbols = ['+','-','*','/'];
    // if(symbols.includes(str))
    //     return true;
    // else 
    //     return false;

    // SUGGESTED IMPORVEMENT
    return ['+','-','*','/'].includes(char);
}

function matchSymbol(symbol)
{
    switch(symbol)
    {
        case "+": return add;
        case "-": return subtract;
        case "*": return multiply;
        case "/": return divide;
    }
}

function calculate(equation)
{   
    if(isSymbol(equation[0]) && equation[0].match(/[^-+]/))
        return  "SYNTAX ERROR 1";
    
    let numbers = [];
    let symbols = [];
    let startIndex = 0; // used for the starting index of numbers

    // Bisecting the equation into symbols and numbers
    for(let i = 0; i < equation.length; ++i)
    {
        if(isSymbol(equation[i]) && i != equation.length - 1)
        {
            numbers.push( Number(equation.slice( startIndex, i ).join("")));
            symbols.push( equation[i])
            startIndex = i+1;
        }

        if(isSymbol(equation[i]) && isSymbol(equation[i+1]))
            return "SYNTAX ERROR 2"
    }

    numbers.push( Number(equation.slice( startIndex, equation.length ).join("")))

    if(numbers.some(number => number.toString().length > 15 || isNaN(number)))
        return "SYNTAX ERROR 3"

    if(symbols.length == 0)
        return "SYNTAX ERROR 4"

    let result = numbers[0];
    for(let i = 1; i < numbers.length ; i++)
    {
        // MY CODE
        // let func = matchSymbol(symbols.shift())

        // SUGGESTED IMPROVEMENT: cuz shift takes O(n) time

        let func = matchSymbol(symbols[i-1])
        result = func(result, numbers[i]);
    }

    return Math.round(result * DECIMAL_PRECISION) / DECIMAL_PRECISION;
}




clear();
getInput();


