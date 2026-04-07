import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import HomePages from "../Home Pages/HomePages";
import ErrorPage from "../Error pages/Error";
import ListedBooks from "../Listed Books/ListedBooks";
import PagesToReadBooks from "../Pages to Read Book/PagesToReadBooks";
import BookDetails from "../Book Details/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: HomePages
      },
      {
        path: '/listedBooks',
        Component: ListedBooks
      },
      {
        path: '/pagesToRead',
        Component: PagesToReadBooks
      },
      {
        path: '/bookDetails/:bookDetailsId',
        Component: BookDetails
      }
      // {
      //   path: '/bookDetails/:bookDetailsId',
      //   loader:({params})=> fetch(`/booksData.json/${params.bookDetailsId}`),
      //   Component: BookDetails
      // }

    ]
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);