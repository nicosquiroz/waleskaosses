import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './Landing';
import Negocios from './Negocios';
import reportWebVitals from './reportWebVitals';
import './fonts/Fontspring-DEMO-theseasons-bd.otf';
import './fonts/Fontspring-DEMO-theseasons-reg.otf';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Router>
        <Routes>

            <Route path='/' element={<Landing />}></Route>
            
            <Route path='/negocios' element={<Negocios />}></Route>
            
        </Routes>
    </Router> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
