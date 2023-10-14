import React from "react";
import "./4.css";
import éxitofondo from "../img/sección éxito.svg";
import tarjeta1 from "../img/tarjeta1.svg";







export const Seccion4 = () => {
return (
    <div className="sec4">
    <img className="éxitoimg" src={éxitofondo}/>    
        
    <div className="frame">
    <div className="exito">TESTIMONIOS</div>
    
    <div className="testimonios">
    <p>No solo fue solo de trabajo, sino también de autoestima, fue muy
hermoso.</p>

<p>Lo que más rescato de Waleska es que te motiva a más no poder, y te
hace confiar más en uno mismo, cosas que son totalmente necesarias a la
hr de comenzar a postular a trabajos</p>

<p>Bueno, mi experiencia con Waleska literal me cambió la vida jajaj ya
que en el último tiempo estuve tan triste y frustrada con mi trabajo</p>

<p>En las entrevistas me preguntaron exactamente lo que Waleska me dijo
que iban a preguntar.</p>

<p>Desde que me hablaron por primera vez hasta la carta de oferta habrá
pasado una semana?</p>

<p>En menos de 2 semanas me llamaron que había sido seleccionado en la
entrevista final</p>

<p>Después de mi cambio de trabajo tripliqué mi sueldo</p>
</div>
<img className="tarjeta1" src={tarjeta1}/>
      </div>
    </div>
);
};


export default Seccion4;