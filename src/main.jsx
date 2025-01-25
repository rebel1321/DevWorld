import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Pages/Login';  // Import Login component
import Signup from './components/Pages/Signup';
import Home from './components/Home/Home';
import About from './components/About/About';
import ForgetPassword from './components/Pages/ForgetPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup', 
        element: <Signup />,
      },
      {
        path: 'about', 
        element: <About />,
      },
      {
        path: 'forgetPassword', 
        element: <ForgetPassword />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
