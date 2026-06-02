// GIVEN SOLUTION. I saw it before solving so yeah
-
// function filterRangeInPlace(arr, a, b) {

//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];

//     // remove if outside of the interval
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

function filterRangeInPlace(array, lowerLimit, upperLimit)
{
    array = array.filter(num => (num >= lowerLimit && num <= upperLimit))
}

let arr = [1,2,5,3,4,7,9,5,];
filterRangeInPlace(arr,3,7);
console.log(arr)