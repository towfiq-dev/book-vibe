import {StrictMode} from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { router } from './routes/Routes.jsx';
import { RouterProvider } from 'react-router-dom';
import BookProvider from './components/context/BookProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookProvider>
    <RouterProvider router={router} />
    </BookProvider>
    <ToastContainer />
  </StrictMode>,
)
