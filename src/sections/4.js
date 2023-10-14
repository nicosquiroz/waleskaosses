import React from "react";
import "./4.css";
import éxitofondo from "../img/sección éxito.svg";
import { PopupButton } from "react-calendly";







export const Seccion4 = () => {
return (
    <div className="sec4">
    <img className="éxito" src={éxitofondo}/>    
        
    <div className="frame">
        holaaa
        
        
        
        <PopupButton className="agendar-texto"
        url="https://calendly.com/walecampusano/20min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="AGENDAR"
      />
      
      
      </div>
    </div>
);
};


export default Seccion4;