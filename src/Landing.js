import React from "react";
import "./Negocios.css";
import web from "./img/web.png";
import "./Landing.css";
import Seccion1 from "./sections/1";
import Seccion2 from "./sections/2";
import Seccion3 from "./sections/3";
import Seccion4 from "./sections/4";
import Seccion5 from "./sections/5";
import Seccion6 from "./sections/6";
export const Landing = () => {
  return (
    <div className="web">
      <Seccion1/>
      <Seccion2/>
      <Seccion3/>
      <Seccion4/>
      <Seccion5/>
      <Seccion6/>
      
      {/* https://codesandbox.io/s/desktop-momentum-scrollingparallax-react-t8wr5?file=/src/App.js */}
    {/* <img className="web" src={web}/> */}



    
    </div>










  );

};


export default Landing;