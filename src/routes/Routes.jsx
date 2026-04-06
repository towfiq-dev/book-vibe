import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePages from "../components/homepage/HomePages";
import Books from "../components/pages/books/Books";
import ErrorPage from "../components/pages/errorPage/ErrorPage";
import BookDetails from "../components/pages/book Details/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
    {
    index: true,
    element: <HomePages></HomePages>
    },
    {
      path: '/books',
      element: <Books></Books>
    },
    {
      path: 'bookDetails/:bookDetailsId',
      loader: async ({params})=>{
      const res = await fetch('/booksData.json')
      const allBooks = await res.json()
      const singleBook = allBooks.find(book => book.bookId === Number(params.bookDetailsId))
      return singleBook;
      },
      element: <BookDetails />
    },
  ]
  
  },
  {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
]);