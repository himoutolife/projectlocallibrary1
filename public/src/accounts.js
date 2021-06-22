function findAccountById(accounts, id) {//THIS FUNCTION WORKS
  let found =accounts.find((account)=> account.id === id);//use find to pull the account ID
  return found;
}
//-----------------------------------//

function sortAccountsByLastName(accounts) {//THIS FUNCTION WORKS
  //use .sort() to sort the array list by last name and return it
let sorted= accounts.sort((lastNameA, lastNameB)=>//use empty variable and then sort
(lastNameA.name.last > lastNameB.name.last ? 1:-1));
return sorted;
}

//----------------------------------------------//

function getTotalNumberOfBorrows(account, books) {//THIS FUNCTION WORKS
  //this is going to pull the account information, and return how many books total that account has borrowed
let borrowed= 0;  //empty variable to hold the count
books.forEach((book) =>{//for each book 
  book.borrows.forEach((borrow)=>{//for each book borrowed
    if(account.id === borrow.id)//check if the account id matches the borrowed id
{
borrowed ++;//add to counter
}
  }
)});
  return borrowed;//return counter
}

//----------------------------------------------//

function getBooksPossessedByAccount(account, books, authors) {//THIS FUNCTION WORKS
  //this is going to check the account id against the book borrows list to see if it is checked out to that account or not, should return the book name and author
let checkedOut= [];//empty array to hold book list
books.forEach(book=>{//loop through books borrow list
if (book.borrows.find(name=>name.id === account.id && name.returned ===false)){//match account id to id on borrow list if its not returned
checkedOut.push(book);//put that info into the checkedout array
}
})
//get author information
checkedOut.forEach(book=>{//loop through the checkout array
  let authorName = (authors.find(author=> author.id ===book.authorId))//match author id to the book author id, store it in a variable
    book['author']= authorName; //embed the author name into the books array
});
return checkedOut;//return it

}

//-------------------------------------------------//



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
