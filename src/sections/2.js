import React from "react";
import "./2.css";
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";
import pulsar from "../img/pulsar.svg";


export const Seccion2 = () => {
return (
    <div className="frame2">
    <div className="sección">
    <div className="overlap-2">
    <p className="situacion">TU SITUACIÓN LABORAL ACTUAL SE <br></br>ALINEA CON TUS OBJETIVOS?</p>
    </div>
    
    <p className="opcion">
    <span className="text-wrapper">
    <br />
    </span>
    <span className="span">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span className="text-wrapper-3"><b>Te encuentras evolucionando </b>hacia tus metas.</span>
    
    <span className="text-wrapper-3">
    &nbsp;&nbsp;No hay emoción más grande que sentir que avanzamos. Pero cuando estás en un estado previo al
    cambio, muchas veces te encuentras en una situación de incertidumbre <br></br>donde no es tan claro <br></br>ver el
    camino.{" "}</span>
    
    <span className="text-wrapper-4">
    {" "}
    <br />
    </span>
    </p>
    <img className="pulsar" alt="pulsar" src={pulsar}/>






    <div className="beneficios">
    <p className="lo-que-no-es-obvio">
    <span className="text-wrapper-5">
    <br />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lo que no es obvio, es que muchas veces ya tenemos casi la{" "}
    </span>
    <span className="text-wrapper-6">totalidad de las habilidades</span>
    <span className="text-wrapper-7">.</span>
    <span className="text-wrapper-5"> El pequeño faltante puede transformar nuestra percepción.</span>
    </p>
    <p className="exploraremos-el">
    <span className="text-wrapper-5">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Exploraremos el camino para poder utilizar todas tus capacidades y{" "}
    </span>
    <span className="text-wrapper-6">potencial profesional</span>
    <span className="text-wrapper-8">.</span>
    </p>
    <p className="incluso-si-tenemos">
    <span className="text-wrapper-5">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incluso si tenemos todo lo necesario,{" "}
    </span>
    <span className="text-wrapper-6">necesitamos saber comunicarlo</span>
    <span className="text-wrapper-5">. Haremos brillar tu perfil para conectar con tus objetivos.</span>
    </p>
    </div>
    </div>
    </div>
);
};


export default Seccion2;