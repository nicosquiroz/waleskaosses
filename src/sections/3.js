import React from "react";
import "./3.css";
import separador from "../img/separador1.png";  
import laberinto1 from "../img/laberinto1.png";
import estrellas1 from "../img/estrellas1.svg";
import laberinto2 from "../img/laberinto2.png";

export const Seccion3 = () => {
return (
<div className="frame">
<img className="separador1" src={separador}/>
<div className="programa">PROGRAMA DE</div>
<div className="busqueda">BÚSQUEDA LABORAL</div>


<img className="laberinto1" src={laberinto1}/>
<img className="estrellas1" src={estrellas1}/>
<img className="laberinto2" src={laberinto2}/>


</div>
);
};


export default Seccion3;