import React from "react";
import { SignaiLogos } from "../../components/SignaiLogos";
import "./style.css";
import borjaImg from "../../assets/borja.png";
import line3 from "../../assets/Line-3.png"
import line4 from "../../assets/Line-4.png"
import reflex_master from "../../assets/reflex_master.png"
import Ted from "../../assets/TED.png"
import signai from "../../assets/SignAI.png"
import vector from "../../assets/vector.png"
import line1 from "../../assets/Line-1.png"
import substract from "../../assets/Substract.png"
import group from "../../assets/Group.png"
import igIcon from "../../assets/ig.svg";
import mailIcon from "../../assets/mail.svg";
import lkdnIcon from "../../assets/lkdn.svg";

import maskgroup from "../../assets/Mask-group.png"

export const Slide = () => {
  return (
    <div className="slide" data-model-id="2822:318">
      <div className="rectangle" />

      <div className="div" />

      <div className="text-wrapper">Introducción</div>

      <p className="me-llamo-borja">
        Me llamo Borja Izurieta, y tengo 17 años. Soy estudiante de la Escuela
        ORT, y me desarrollo como diseñador UX/UI, tarea que vengo realizando
        desde hace 3 años.
        <br />
        <br />
        La mayoría de mi tiempo libre lo paso haciendo deporte, estando con
        amigos, o familia.
      </p>

      <p className="clubes-teded">
        <span className="span">Clubes</span>

        <span className="text-wrapper-2">&nbsp;</span>

        <span className="text-wrapper-3">TED</span>

        <span className="text-wrapper-4">Ed</span>
      </p>

      <p className="a-lo-largo-del-a-o">
        A lo largo del año 2024 formé parte del programa de TED Ed en mi
        escuela, y a fin de año di una charla frente a mas de 100 personas.
        <br />
        <br />
        Esta experiencia me brindo herramientas para expresarme, confianza al
        hablar en púbico, y habilidades de sociabilización.
      </p>

      <div className="group">
        <div className="eclipse" />

        <div className="rectangle-2" />
      </div>

      <img
        className="photos"
        src={borjaImg}
      />

      <div className="rectangle-3" />

      <p className="juego-interactivo-de">
        Juego interactivo de reflejos mediante luces y botones.
        <br />
        Me encargué de: <br />
        El diseño físico de la caja, incluidos los botones y los espacios para
        el hardware.
        <br />
        El diseño de la aplicación mediante la cual se utiliza el juego.
      </p>

      <img
        className="logos"
        alt="Logos"
        src={reflex_master}
      />

      <div className="rectangle-4" />

      <img
        className="line"
        alt="Line"
        src={line3}
      />

      <img
        className="img"
        alt="Line"
        src={line4}
      />

      <p className="hola-soy-borja-dise">
        <span className="text-wrapper-5">
          Hola, soy Borja
          <br />
        </span>

        <span className="text-wrapper-6">Diseñador UX/UI</span>
      </p>

      <p className="p">Aquí muestro mi imagen personal y mi trayectoria.</p>

      <SignaiLogos
        className="signai-logos-instance"
        property1="signai-white"
        signAi={signai}
        subtract={substract}
      />
      <img
        className="IMG"
        alt="Img"
        src={Ted}
      />

      <div className="rectangle-5" />

      <div className="frame">
        <p className="discurso-en-p-blico">
          <span className="text-wrapper-7">Discurso en público: </span>

          <span className="text-wrapper-8">
            poseo una facilidad para hablar frente a audiencias.
          </span>
        </p>

        <p className="div-2">
          <span className="text-wrapper-7">Habilidades en UX/UI: </span>

          <span className="text-wrapper-8">
            llevo 3 años desarrollando diseños web para proyectos académicos.
          </span>
        </p>

        <p className="div-2">
          <span className="text-wrapper-7">Trabajo en equipo: </span>

          <span className="text-wrapper-8">
            me desarrollo bien trabajando con pares, no tengo problema en
            relacionarme con gente nueva.
          </span>
        </p>
      </div>

      <img
        className="mask-group"
        alt="Mask group"
        src={maskgroup}
      />

      <div className="text-wrapper-9">Habilidades Técnicas.</div>

      <img
        className="group-2"
        alt="Group"
        src={group}
      />

      <div className="text-wrapper-10">Mis Proyectos.</div>

      <img
        className="vector"
        alt="Vector"
        src={vector}
      />

      <img
        className="vector-2"
        alt="Vector"
        src={vector}
      />

      <img
        className="vector-3"
        alt="Vector"
        src={vector}
      />

      <p className="traductor-de-lengua">
        Traductor de Lengua de Señas Argentina
        <br />
        En 2024 me encargué de: <br />
        El diseño de la página web del proyecto, mediante la cual el usuario
        opera la solución.
        <br />
        En 2025 me encargué de:
        <br />
        El diseño de la aplicación móvil, mediante la cual se utiliza la
        solución.
      </p>

      <div className="signai-logos-wrapper">
        <div className="signai-logos-2" />
      </div>

      <img
        className="line-2"
        alt="Line"
        src={line1}
      />

      <p className="text-wrapper-11">
        © 2025 Borja Izurieta. Todos los derechos reservados.
      </p>

      <div className="social-links-container">
        <a 
          href="https://instagram.com/borja.izu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={igIcon} alt="Instagram" />
        </a>
        
        <a 
          href="mailto:borja.izurieta" 
          className="social-link"
        >
          <img src={mailIcon} alt="Email" />
        </a>
        
        <a 
          href="https://www.linkedin.com/in/borja-izurieta-a7b46b341/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="social-link"
        >
          <img src={lkdnIcon} alt="LinkedIn" />
        </a>
      </div>

      <div className="text-wrapper-12">Contacto</div>
    </div>
  );
};
