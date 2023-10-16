---
title: This will be used as the title-tag of the page head
---

# This is a H1

[the clickable text](http://xlson.com/)

* Bullet lists are also easy to create
* One more


import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider
} from 'react-router-dom';
import App from './App';
import './styles/index.css';
import Landing from './Landing';
const router = createHashRouter([
  {
    path: "/*",
    element: <Landing />,
  },
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);