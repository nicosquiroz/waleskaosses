import React from "react";
import Negocios from "./Negocios.js";
import Landing from "./Landing.js";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from 'react-router-dom';

export const App = () => {
  return (
    <Router>
        <Routes>

            <Route path='/' element={<Landing />}></Route>
            
            <Route path='/negocios' element={<Negocios />}></Route>
            
        </Routes>
    </Router>
  );


};

export default App;