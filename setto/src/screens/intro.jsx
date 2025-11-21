import React from "react";
import { Photos } from "./Photos";
import "./intro.css";

export const Frame = () => {
  return (
    <div className="frame">
      <p className="hola-soy-maximiliano">
        <span className="text-wrapper">
          Hola, soy Maximiliano
          <br />
        </span>

        <span className="span">Desarrollador IA</span>
      </p>

      <p className="div">
        Aquí muestro mi imagen personal, mi trayectoria, y planes a futuro.
      </p>

      <div className="navbar">
        <div className="text-wrapper-2">Sobre mí</div>

        <div className="text-wrapper-2">Habilidades</div>

        <div className="text-wrapper-2">Educación</div>

        <div className="text-wrapper-2">Proyectos</div>
      </div>

      <div className="group">
        <div className="eclipse" />

        <div className="rectangle" />

        <div className="rectangle-2" />
      </div>

      <Photos className="photos-instance" property1="masi" />
    </div>
  );
};
