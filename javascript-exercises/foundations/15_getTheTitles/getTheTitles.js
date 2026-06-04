// better solution
// const getTheTitles = function (array) {
//   return array.map((book) => book.title);
// };

const getTheTitles = function(books) {
    return books.reduce((titles, book) => {
    titles.push(book.title)
    return titles;}, [])
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
