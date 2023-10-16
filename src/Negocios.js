import React from "react";
import "./Negocios.css";
import footer from "./img/footer.png";

export const Negocios = () => {
  return (
    <div className="todo">
    <div className="macbook-air">
      <p className="vi-a-del-mar">
        Viña del Mar - Santiago CL
        <br />
        <a href="#contacto"><b><u>Early Acces </u></b></a>
      </p>
      <div className="overlap">
        <p className="enfocando">
          Enfocando herramientas de la ciencia, creatividad y tecnología a resolver problemas <br />
          en el mundo del emprendimiento.
        </p>


        <div className="frame">
          <div className="rectangle" />
        </div>
        <div className="rectangle-wrapper">
          <div className="div" />
        </div>
      </div>
      <img className="line" alt="Line" src="line-1.svg" />




    <div className="sections">

      <div className="quéhacemos_section">
      <div class="row">

        <div class="column">
        <div className="code">&lt;qué hacemos&gt;</div>
        {/* <div className="text-wrapper">are</div> */}
        </div>

        
        <div class="column">

        <div className="qué_hacemos">
        <p className="párrafo_grande">
        Trabajamos con emprendedores del área STEM ayudándolos a desarrollar su marca, modelo de negocio y su visión
        científica única.
      </p>
      <p className="text-wrapper-5">
        Ocupamos estrategias, y conocimientos especializados científicos que podemos entender y compartir para entregar
        soluciones de diseño de marca y de productos.
      </p>
      </div>

      </div>


      </div>

      </div>



      <div className="servicios_section" >

      
      <div class="row">

      <div class="column">  
      <div className="code">&lt;nuestros servicios&gt;</div>
      </div>

      <div class="column">
      <p className="párrafo_grande">
        Programa de sesiones para llevar a tu negocio a consolidar su idea temprana, hacer pruebas de validación,
        fundamentación de marca y la creación del MVP.
      </p>
      <div className="modelo-de-negocio">
        Modelo de negocio,
        <br />
        Branding,
        <br />
        Web
        
      
        <div className="nombre_servicios">      
        <div className="MODELO-DE-NEGOCIO">
          _MODELO DE NEGOCIO
          <br />
          _IDENTIDAD VISUAL
          <br />
          _ASESORÍA&nbsp;&nbsp;DE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PITCH
        </div>
        <div className="REBRANDING-ASESOR-a">
          _REBRANDING
          <br />
          _ASESORÍA DE LINKEDIN
          <br />
          _DISEÑO WEB
        </div>
      </div>
      
      </div>
        
      </div>
      </div>

      </div>



      {/* <div className="overlap-2">

        <div className="HERRAMIENTAS-ESPEC">
          HERRAMIENTAS
          <br />
          ESPECÍFICAS
        </div>
      </div> */}



     
   
      
      


     



      <div className="contacto_section">


      <div class="row">
      <div class="column">
      <div  id="contacto" className="code">&lt;contáctanos&gt;</div>
      </div>

      <div class="column">

      <div className="contacto_info">
      <p className="want-to-work">Want to work together? -&gt; Here (asesoría)</p>
      <p className="interested-in-the">Interested in the project? Contact us here.</p>
      </div>


      </div>

      </div>

      
    </div>

    </div>

    </div>



    <div className="footer">
      <div className="overlap-3">

        <div className="text-wrapper-2"><i>(That's here) That's us.</i></div>
        <div className="group">
          <div className="image-wrapper">
            <img className="image" alt="fotos" src={footer} />
          </div>
        </div>
        
      </div>

      </div>
    </div>




  );
};

export default Negocios;