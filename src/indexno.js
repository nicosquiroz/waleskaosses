import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landing';
import Negocios from './Negocios';
import reportWebVitals from './reportWebVitals';
import './fonts/Fontspring-DEMO-theseasons-bd.otf';
import './fonts/Fontspring-DEMO-theseasons-reg.otf';
import { HashRouter } from 'react-router-dom';

import {

  Routes,
  Route,
  Link

} from 'react-router-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';


const router = createHashRouter(
     [
        {
            path: "/",
            children : [
                {
                    path: "/",
                    element: <Landing/>
                 },
                 {
                     path: "/negocios",
                     element: <Negocios/>
                 }
            ]
        }
    ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    {/* <RouterProvider router={router} />
    <App/> */}
    <RouterProvider router={router}/>
    {/* <HashRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/negocios" element={<Negocios />} />
      </Routes>
    </HashRouter> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 {/* <Router>
        <Routes>

            <Route path='/' element={<Landing />}></Route>
            
            <Route path='/negocios' element={<Negocios />}></Route>
            
        </Routes>
    </Router> */}