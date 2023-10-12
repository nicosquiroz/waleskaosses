import React from "react";
import "./App.css";

export const App = () => {
  return (
    <div className="macbook-air">
      <p className="vi-a-del-mar">
        Viña del Mar - Santiago CL
        <br />
        Física y Economía
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
      <div className="overlap-group">
        <div className="qu-hacemos">&lt;qué hacemos&gt;</div>
        <div className="text-wrapper">are</div>
      </div>
      <div className="overlap-2">
        <div className="nuestros-servicios">&lt;nuestros servicios&gt;</div>
        <div className="HERRAMIENTAS-ESPEC">
          HERRAMIENTAS
          <br />
          ESPECÍFICAS
        </div>
      </div>
      <div className="cont-ctanos">&lt;contáctanos&gt;</div>
      <div className="overlap-3">
        <div className="text-wrapper-2">(Thats here) That’s us.</div>
        <div className="group">
          <div className="image-wrapper">
            <img className="image" alt="fotos" src=".img/Group 9.png" />
          </div>
        </div>
        <div className="text-wrapper-3">That’s here. That’s us.</div>
        <p className="interested-in-the">Interested in the project? Contact us here.</p>
      </div>
      <div className="modelo-de-negocio">
        Modelo de negocio,
        <br />
        Branding,
        <br />
        Web
      </div>
      <p className="p">
        _Programa de sesiones para llevar a tu negocio a consolidar su idea temprana, hacer pruebas de validación,
        fundamentación de marca y la creación del MVP.
      </p>
      <p className="text-wrapper-4">
        _Trabajamos con emprendedores del área STEM ayudándolos a desarrollar su marca, modelo de negocio y su visión
        científica única.
      </p>
      <p className="text-wrapper-5">
        _Ocupamos estrategias, y conocimientos especializados científicos que podemos entender y compartir para entregar
        soluciones de diseño de marca y de productos.
      </p>
      <div className="overlap-4">
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
      <p className="want-to-work">Want to work together? -&gt; Here (asesoría)</p>
    </div>
  );
};

export default App;