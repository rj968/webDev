let arr = [1,2,3,4,5,6]

function shuffle(array)
{
    for(let i = 0; i < array.length; ++i)
    {
        let index = Math.floor(Math.random()*array.length)
        let temp = array[i];
        array[i] = array[index];
        array[index] = temp;
    }
    return array;
}

console.log(shuffle(arr))