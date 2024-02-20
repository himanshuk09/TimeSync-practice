import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './login.css'

import App from './App';
import Login from './components/Login';
import Registration from './components/Registration';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Events from './components/Events';
import SideMenu from './components/SideMenu';
import { Dashboard } from './components/Dashboard';
import Profile from './components/Profile';

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
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
    path: "/timesync/",
    element: <SideMenu />,
    children:[
      {
        path:'dashboard',
        element:<Dashboard/>
      },
      {
        path:"events",
        element:<Events/>
      },
      {
        path:"profile",
        element:<Profile/>
      }
    ]
  }
])
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={Router} />
);

