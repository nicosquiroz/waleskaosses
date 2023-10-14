import React from "react";
import "./5.css";
import "./slider.css";













export const Seccion5 = () => {
    let mouseDown = false;
let startX, scrollLeft;
const slider = document.querySelector('.parent');

const startDragging = (e) => {
  mouseDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
}

const stopDragging = (e) => {
  mouseDown = false;
}

const move = (e) => {
  e.preventDefault();
  if(!mouseDown) { return; }
  const x = e.pageX - slider.offsetLeft;
  const scroll = x - startX;
  slider.scrollLeft = scrollLeft - scroll;
}
// Add the event listeners

slider.addEventListener('mousemove', move, false);
slider.addEventListener('mousedown', startDragging, false);
slider.addEventListener('mouseup', stopDragging, false);
slider.addEventListener('mouseleave', stopDragging, false);
return (
    <div className="sec5">
        
    <div className="frame">
    {/* <div className="títuloizq"> */}
        {/* <span className="espacio"></span> */}
    <div className="qué-obtendrás">QUÉ OBTENDRÁS</div>
    {/* </div> */}
    <div className="parrafos">
        <p className="te-entrego">Te entrego un plan de acción, para que te enfoques y decidas qué camino tomar, vuelvas a sentirte una persona confiada en tí misma y aprendas a adaptar tu CV a los cargos que quieres. Después aprenderás cómo obtener ofertar laborales haciendo Networking y cómo responder estratégicamente las respuestas en las entrevistas laborales.</p>
        <p>O T R O S S E R V I C I O S : A S E S O R Í A S 1 : 1 D E C U A L Q U I E R T E M A

D E L P R O G R A M A</p>
</div>




<div class="parent">

   <div class="child">
<div className="sesiones-scroll">
<div className="sesiones">

            <p>S E S I Ó N 1 : A U T O C O N O C I M I E N T O ,<br></br>
A U T O E S T I M A Y O B J E T I V O S L A B O R A L E S</p>

<p>
Elegir sabiamente a dónde direccionar tu carrera.</p>
<p>Potenciar su personalidad para destacar en el ámbito
laboral.</p>
<p>Elevar la autoestima laboral para aumentar la confianza
en sí mismos.</p>
<p>Encontrar y reconocer sus fortalezas personales</p>
        </div>


        <div className="sesiones">

            <p>S E S I Ó N 2 : O P T I M I Z A N D O T U C V</p>

<p>
Definir a qué trabajos y posiciones deseas aplicar.</p>
<p>Crear un currículum exitoso que destaque tus
habilidades y experiencias relevantes.</p>
        </div>

        <div className="sesiones">

<p>S E S I Ó N 3 : C R E A N D O O P O R T U N I D A D E S <br></br>

L A B O R A L E S C O N L I N K E D I N</p>

<p>
Aprender a utilizar LinkedIn para buscar tu trabajo
soñado.</p>
<p>Construir un networking efectivo y mantenerte activo
en la plataforma.</p>
</div>




<div className="sesiones">

<p>S E S I Ó N 4 : P R E P A R Á N D O T E P A R A E L P R I M E R <br></br>

C O N T A C T O C O N L A S E M P R E S A S</p>

<p>
Seguimiento de aplicación de lo aprendido en LinkedIn
y su perfil.</p>
<p>Prepararte para recibir el primer contacto de una
empresa.</p>
<p>Redactar correos de presentación efectivos.</p>
<p>Filtro de la llamada telefónica.</p>
</div>

<div className="sesiones">

<p>S E S I Ó N 5 : P R E P A R A N D O L A E N T R E V I S T A</p>

<p>
Crear un ambiente cómodo y conectar con
entrevistador.</p>
<p>Prepararte para recibir el primer contacto de una
empresa.</p>
<p>Aprender a responder de forma correcta y adaptada a
tus fortalezas la entrevista de recursos humanos</p>
</div>

<div className="sesiones">

<p>S E S I Ó N 6 : S E G U I M I E N T O Y P R E P A R A C I Ó N <br></br>
P A R A E L B A L A N C E D E L A V I D A L A B O R A L</p>

<p>
Seguimiento para otorgar mejoras en el proceso.</p>
<p>Prepararte para recibir el primer contacto de una
empresa.</p>
<p>Tips para mantener tu trabajo una vez que lo consigas.</p>
<p>Balance entre vida personal y trabajo: Cómo encontrar
armonía en tu nueva vida laboral.</p>
</div>

        </div>
 


          
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum        
    </div>
</div>


      </div>
    </div>


);
};


export default Seccion5;