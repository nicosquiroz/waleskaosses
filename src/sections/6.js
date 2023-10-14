import React from "react";
import "./6.css";
import sobremí from "../img/sobremi.svg";  
import separador2 from "../img/separador2.svg";
import libros from "../img/libros.png";


export const Seccion6 = () => {
return (

    <div className="sec6">
        
<div className="frame">

<div className="fondonegro">

<img className="separador2" src={separador2}/>
<img className="sobremí" src={sobremí}/>


</div>








<div className="sobremicontent">
    <div className="sobre-mí">SOBRE MÍ</div>
    <div className="parrafos">
    Soy la persona detrás de la asesoría laboral. Lo que más me apasiona es aprender y crear 

<br></br>
<br></br>
Me interesa entender cómo funciona todo, desde los átomos a personas, de estrellas al universo. 
<br></br>
<br></br>
Creo que lo más lindo que me ha dado la ciencia es ver todo como un milagro ✨
<br></br>
<br></br>
<b>Pero la razón por la que llegué a esto, es por algo muy personal.</b>
</div>
<img className="libros" src={libros}/>


<div className="parrafos">
Viví en carne propia la desesperación de <b>estar en un trabajo que me hacía muy infeliz</b>; me sentía frustrada, poco valorada, sin poder usar mis conocimientos y ganaba muy mal.  
</div>
<div className="parrafos">

<p className="tomando">Tomando un montón de cursos y asesorías, llegué al trabajo de mis sueños y <b>quise ayudar a otros a hacerles más fácil el camino</b>, que consigan un trabajo que los haga sentirse que son tratados con respeto, se sienten en calma y pueden usar su potencial. Y que si quieren cambiar su rumbo (área) sepan que pueden hacerlo.</p>

</div>
</div>
</div>
</div>
);
};
export default Seccion6;