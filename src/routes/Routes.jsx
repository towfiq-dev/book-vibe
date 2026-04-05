import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";
import HomePages from "../components/homepage/HomePages";
import Books from "../components/pages/books/Books";
import ErrorPage from "../components/errorPage/ErrorPage";

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
    }
  ]
  
  },
  {
      path: '*',
      element: <ErrorPage></ErrorPage>
    }
]);