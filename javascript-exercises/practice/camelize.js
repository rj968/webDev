function camelize(str)
{
    if(!str) return "";
    return str
    .split("-")
    .reduce((result,current) => {
        return result + current.charAt(0).toUpperCase() + current.slice(1);
    });
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');