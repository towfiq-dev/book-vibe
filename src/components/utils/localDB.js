export const getAllReadlistFromLocalDB =()=>{
  const allReadList = localStorage.getItem('ReadLists')
  if (allReadList) 
    return JSON.parse(allReadList)
    return []
}

export const addReadListToLocalDB =(book)=>{
const allBooks = getAllReadlistFromLocalDB()
const isAllReadyExist = allBooks.find((bk)=> bk.bookId === book.bookId)
if (!isAllReadyExist) {
  allBooks.push(book);
  localStorage.setItem('ReadLists', JSON.stringify(allBooks))
}
}

export const removeFromLocalDB = (id) => {
  const allBooks = getAllReadlistFromLocalDB();
  const remainingBooks = allBooks.filter(book => book.bookId !== id);
  localStorage.setItem('ReadLists', JSON.stringify(remainingBooks));
}

export const getAllWishlistFromLocalDB = () => {
  const allWishList = localStorage.getItem('WishLists');
  if (allWishList)
  return JSON.parse(allWishList)
  return [];
};

export const addWishListToLocalDB = (book) => {
  const allBooks = getAllWishlistFromLocalDB();
  const isExist = allBooks.find((bk) => bk.bookId === book.bookId);
  if (!isExist) {
    allBooks.push(book);
    localStorage.setItem('WishLists', JSON.stringify(allBooks));
  }
};

export const removeWishFromLocalDB = (id) => {
  const allBooks = getAllWishlistFromLocalDB();
  const remaining = allBooks.filter(book => book.bookId !== id);
  localStorage.setItem('WishLists', JSON.stringify(remaining));
};