import React from "react";
import "./6.css";
import sobremí from "../img/sobremi2.svg";  
import separador2 from "../img/separador2.svg";
import libros from "../img/libros.png";
import fotoperfil from "../img/fotoperfilcrop2.png";
import fotoperfil2 from "../img/fotosinfondo.png";
import estrellasfinal from "../img/estrellas.png";
import estrellasarriba from "../img/estrellasarriba.svg";
import tarjetawale from "../img/tarjetawale.svg";
import { PopupButton } from "react-calendly";
import instagram from "../img/instagram.svg"
import mail from "../img/mail.svg";



export const Seccion6 = () => {
return (

    <div className="sec6">
        
<div className="frame">
<div className="fondonegro">
<img className="estrellasfinalarriba" src={estrellasarriba}/>

<img className="separador2" src={separador2}/>
<img className="sobremí" src={sobremí}/>


</div>








<div className="sobremicontent">
    <div className="sobre-mí">SOBRE MÍ</div>
    <div className="contenido">
    <div className="parrafos">
    Soy la persona detrás de la asesoría laboral. Lo que más me apasiona es aprender y crear.

<br></br>
<br></br>
Me interesa entender cómo funciona todo, desde los átomos a personas, de estrellas al universo 📚. 
<br></br>
<br></br>
Creo que lo más lindo que me ha dado la ciencia es ver todo como un milagro ✨.
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

<p> Si resuenas con este proceso, y piensas que soy la persona correcta para ayudarte:</p>
</div>
</div>
</div>



<img className="fotoperfil" src={fotoperfil}/>
{/* <img className="fotoperfil2" src={fotoperfil2}/> */}
</div>
<div className="divestrellasfinal">
<img className="estrellasfinal" src={estrellasfinal}/>
</div>

<div className="sobre-mí"> <p className="trabajemos">TRABAJEMOS JUNTAS</p></div>
<div className="cta">





<div className="tarjeta">
<img className="tarjetawale" src={tarjetawale}/>

<div className="contactos">
<a href="mailto:walecampusano@gmail.com"><img className="mail" alt="Mail" src={mail} /></a>
<a href="http://www.instagram.com/waleska_osses"><img className="instagram" alt="Instagram" src={instagram} /></a>
</div>

</div>

<div className="aa">
<PopupButton className="agendar-texto2"
        url="https://calendly.com/walecampusano/20min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="AGENDA TU LLAMADA"
      />
</div>
</div>

</div>
);
};
export default Seccion6;