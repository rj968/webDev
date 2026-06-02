function filterRange(array, lowerLimit, upperLimit)
{
    return array.filter(num => (num<=upperLimit && num >= lowerLimit))
}

let arr = [5,8,3,6];

console.log(filterRange(arr,2,6));