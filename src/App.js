import React from "react";
import Negocios from "./Negocios.js";
import Landing from "./Landing.js";
import ScrollContainer from './ScrollContainer.js';
import './fonts/Fontspring-DEMO-theseasons-bd.otf';
import './fonts/Fontspring-DEMO-theseasons-reg.otf';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link

} from 'react-router-dom';

export const App = () => {
  return (
    // <ScrollContainer>
    <Router>
        <Routes>

            <Route path='/' element={<Landing />}></Route>
            
            <Route path='/negocios' element={<Negocios />}></Route>
            
        </Routes>
    </Router>
    // </ScrollContainer>
  );


};

export default App;