import React from "react";
import "./1.css";
import mail from "../img/mail.png";
import instagram from "../img/instagram.svg";
import scrolldown from "../img/scroll.png";
import { PopupButton } from "react-calendly";



export const Seccion1 = () => {
return (
<div className="frame">
<div className="text-wrapper-3">Waleska Osses</div>
<div className="text-wrapper-2">Desbloquea tu potencial.</div>
<p className="p">Te ayudo a encontrar el trabajo y la vida que tanto sueñas.</p>


<PopupButton className="agenda"
        url="https://calendly.com/walecampusano/20min"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Agenda una llamada exploratoria Gratuíta"
      />
{/* <p className="agenda">Agenda una llamada exploratoria Gratuíta</p> */}
{/* <InlineWidget url="https://calendly.com/walecampusano/30min" /> */}
{/* <p className="conoce"><a href="#sección2">Conoce acerca de las asesorías</a></p> */}
<p className="conoce">Conoce acerca de las asesorías</p>



<div className="overlap-group">
<div className="datos">
Santiago, Chile
<br />
Data Scientist&nbsp;&nbsp;•&nbsp;&nbsp;Astrónoma
</div>
{/* <img className="mail" alt="mail" src={mail}/> */}


<div id="sección2" className="captura-de-pantalla-wrapper">
<a href="http://www.instagram.com/waleska_osses"><img className="instagram" alt="Instagram" src={instagram} /></a>
</div>

</div>
{/* <div>
<p className="conoce2">Conoce acerca de las asesorías</p>
<img className="scroll" alt="ScrollDown" src={scrolldown}/>
</div> */}
{/* <img className="line" alt="Line" src="line-4.svg" />
<img className="img" alt="Line" src="line-5.svg" /> */}

</div>
);
};


export default Seccion1;