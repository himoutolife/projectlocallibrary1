function findAuthorById(authors, id) {//THIS FUNCTION WORKS
  //this is looking for the author by id, same as looking for account by ID 
  let found = authors.find((author) => author.id === id);
  return found;
}

//------------------------------------//

/*function findBookById(books, id) {//THIS FUNCTION WORKS
  //this is looking for the book by id, same as author and account
  let found =books.find((book)=> book.id === id);
  return found;
}*/

function findBookById(books, id){//THIS FUNCTION WORKS, USES FILTER
  let result = books.filter((book) => book.id === id);
  return result[0];
}

//--------------------------------------//

function partitionBooksByBorrowedStatus(books) {//THIS FUNCTION WORKS
  //filter list by borrowed status
let checkedOut= [];
let returned = [];

for (let book of books){
  if(book.borrows[0].returned ===false)
  checkedOut.push(book);
{
  if (book.borrows[0].returned !=false)
  returned.push(book)
}
}  return [checkedOut, returned];
}






//----------------------------------//
function getBorrowersForBook(book, accounts) {
  //should return an array of who has borrowed this book
  return book.borrows.map(borrow => {//use map to give borrows a key value
    let account = accounts.find(acc => acc.id === borrow.id)// use a variable to find the accounts that match the id's in the borrow list
    return { ...borrow, ...account}// return and limit to 10
  }).slice(0, 10)
  
  
}












module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
