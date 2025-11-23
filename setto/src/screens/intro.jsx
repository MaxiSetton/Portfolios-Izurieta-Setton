import React from "react";
import "./intro.css";

export const Intro = () => {
  return (
    <div className="intro">
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

      <img src="/foto_maxi.png" className="photos-instance" alt="intro" />
    </div>
  );
};
