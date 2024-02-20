import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './login.css'

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardSlider from './components/DashboardSlider';
import { Home } from './components/Home';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: "/register",
        element: <Registration />
      }
    ]
  }, {
    path: "/dashboard",
    element: <DashboardSlider />,
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={Router} />
);

