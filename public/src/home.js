/*function getTotalBooksCount(books) {//this function works **REWRITE INTO SHORTER CODE, try to use reduce
  let total = 0;
  for(let i=0; i<books.length; i++){
    total++;
  }return total;
}*/

function getTotalBooksCount(books){//THIS ONE WORKS, USED REDUCE
  let accumulator = 0;
  return books.reduce((acc)=>acc + 1, accumulator);
  }

//----------------------------------------//

function getTotalAccountsCount(accounts) {//this function works **REWRITE INTO SHORTER CODE
  let total = 0;
  for(let i=0; i<accounts.length; i++){
    total++;
  }return total;
}

//-------------------------------------------//

function getBooksBorrowedCount(books) {//THIS FUNCTION WORKS
  //need to get a count of how many books are checked out
  let checkedOut = 0;//empty varible to hold count 
  books.forEach(book =>{//check each book
  if(book.borrows[0].returned ===false)//if borrowed returned status is false
  checkedOut ++});//add to counter
  return checkedOut;//return counter
}

//----------------------------------------------//
function sortAndSlice(genres){//helper function
  return genres.sort((genreA, genreB)=> genreA.count <genreB.count ? 1: -1).slice(0,5);
}


function getMostCommonGenres(books) {//THIS FUNCTION WORKS
  //need to add up the amount of books by genre
  const genres = [];//empty array to hold information
  books.forEach((book) => {//use a for each to loop through the books array
    const type = genres.find((genre) => genre.name === book.genre);//find the genre out of the array
    if (type){//if matches type
      type.count++;//then add to the type count
    } else{//or
      const name = book.genre;// name is equal to the book.genre from type declaration, make a new type basically
      genres.push({ name, count: 1 });//push the name and add a default count of 1
    }
  });

  let result = sortAndSlice(genres);
  return result;//show it
}

//-----------------------------------------------------------------//

function getMostPopularBooks(books) {//THIS FUNCTION WORKS
  return books.map((book)=> {//give books a key value with map
    return {name: book.title, count: book.borrows.length}//destructer so i can sort by name and borrowed amount
  }).sort((bookA, bookB)=>(bookA.count < bookB.count ? 1:-1)).slice(0,5);//sort it, then knock it to only the top 5
}//struggled, needed help, tried to do a for loop with each book and count how many times it was borrowed and return that amount with its title

//----------------------------------------------------------------//



function getMostPopularAuthors(books, authors) {//THIS FUNCTION WORKS
  //same as genres, but double find to get book count first, then find the author
  return books.map((book)=> {
    const author = authors.find((author)=> author.id ===book.authorId)
    return {name: `${author.name.first} ${author.name.last}`, count: book.borrows.length}//need to use ${} to put the author first and last name together
  }).sort((authorA, authorB)=>(authorA.count < authorB.count ? 1:-1)).slice(0,5);//sort it, then knock it to only the top 5
}










module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
