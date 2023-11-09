import React from "react";
import "./3.css";
import separador from "../img/separador1.png";  
import laberinto1 from "../img/laberinto1.png";
import estrellas1 from "../img/estrellas1.svg";
import laberinto2 from "../img/laberinto2.png";
import estrellasgrandes from "../img/estrellasgrandes.svg";
import { PopupButton } from "react-calendly";



export const Seccion3 = () => {
return (

    <div className="sec3">
<div className="frame">
<img className="separador1" src={separador}/>
<div className="programa">PROGRAMA DE</div>
<div className="busqueda">BÚSQUEDA LABORAL</div>

<div className="parrafos">
<p className="si-eres-una-persona">
<span>
Si eres una persona con mentalidad científica y una gran cantidad de habilidades e intereses entrelazados,
probablemente seas atraída al mundo de la tecnología. <br></br><br></br>Lamentablemente, pese a que las habilidades
técnicas adquiridas en las carreras te otorgan un inmenso potencial, hay un set de{" "}
<b>habilidades que no nos han enseñado</b> en la mayoría de nuestra educación para que sea visto y valorado.</span>
</p>

<p className="de-eso-se-trata">
<span>

<b>De eso se trata esta asesoría:</b> abordar ese espacio faltante de habilidades que te permitirá hacer que las oportunidades lleguen a tí gracias
a las cosas que has hecho, lo te hace una persona única y por cómo lo comunicamos en un lenguaje acertado.

</span>
<br></br><br></br>
<span>
<b>Nos enfocaremos en tu visión, habilidades e identidad,</b> y aprenderás estrategias específicas para comunicarla a través de tu CV, entrevistas y networking en Linkedin y presencial.   Así podrás finalmente sumarte profesionalmente a un mundo que te es conocido: ciencia y tecnología como la herramienta del siglo 21.
</span>

</p>
<img className="laberinto1" src={laberinto1}/>
<br></br>
<p className="estas-herramientas">
Estas herramientas y estrategias te volverán una persona competitiva en el mercado laboral, y tendrás un enfoque
claro sobre cómo tus habilidades se alinean con la industria.
</p>



<img className="estrellas1" src={estrellas1}/>
<img className="laberinto2" src={laberinto2}/>

<p className="primera-inserción">
    Primera inserción
    <br></br>
    Cambio de carrera
    <br></br>
    Crecimiento profesional
</p>



</div>



<img className="estrellas2" src={estrellas1}/>

<div className="aa">
<PopupButton className="agendar-texto"
        url="https://calendly.com/walecampusano/20min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="AGENDAR"
      />




{/* <a href="https://calendly.com/walecampusano/20min"><div className="botón"> */}

{/* ESTO NO<img className="botónverde" src={botónverde}/> */}
{/* <span className="agendar-texto">AGENDAR</span> */}
{/* </div> */}
{/* </a> */}


<p className="llamada">
La llamada exploratoria GRATUÍTA consiste en una primera conversación para poder<br></br> conocernos y plantear un plan de acción para brindarte personalizadamente estos beneficios.
</p>
</div>
<img className="estrellasgrandes" src={estrellasgrandes}/>






</div>
</div>
);
};


export default Seccion3;