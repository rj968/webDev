// MAP TO NAMES

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(user => user.name);

// console.log( names ); // John, Pete, Mary

///////////////////////////////////////////////////////////////////

// MAP TO OBJECTS

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = users.map( user => {
//   return {fullName: user.name + ' ' + user.surname, id: user.id}
// })

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ) // 1
// console.log( usersMapped[0].fullName ) // John Smith


///////////////////////////////////////////////////////////////////////////

// SORT BY AGE

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// function sortByAge(users)
// {
//   return arr.sort((a,b) => a.age - b.age);
// }

// sortByAge(arr);

// // now: [john, mary, pete]
// console.log(arr[0].name); // John
// console.log(arr[1].name); // Mary
// console.log(arr[2].name); // Pete

///////////////////////////////////////////////////////////////////////////

// AVG AGE

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// function getAverageAge(users)
// {
//   return users.reduce((sum,user) => sum += user.age, 0) / users.length;
// }

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

//////////////////////////////////////////////////////////////////////////

// GROUPING OBJS

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(users)
{
  // Wrong approach
  // return users.reduce((acc,user) => (
  //   acc += new Object({`${user.id}`: user})
  // ), 0);

  return users.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
}

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

console.log(usersById.john)
console.log(usersById.ann)
console.log(usersById.pete)
