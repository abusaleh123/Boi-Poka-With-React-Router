import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Base from './Components/Root/Base.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Home from './Components/Home/Home.jsx';
import DashBoard from './Components/DashBoard/DashBoard.jsx';
import BookDetail from './Components/BookDetail/BookDetail.jsx';
import ListedBooks from './Components/ListedBooks/ListedBooks.jsx';
import BooksListed from './Components/ListedBooks/BooksListed.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Base></Base>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch('/bookdata.json')
      },
      {
        path: 'listedBooks',
        element: <BooksListed></BooksListed>,
        loader: () => fetch('/bookdata.json')
      },
      {
        path: '/dashboard',
        element: <DashBoard></DashBoard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router} />
 <ToastContainer></ToastContainer>
  </StrictMode>,
)
