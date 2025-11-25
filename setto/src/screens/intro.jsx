import React from "react";
import "./intro.css";

export const Intro = () => {
  return (
    <div className="intro">
      <div className="text">
        <p className="hola-soy-maximiliano">
          <span className="text-hola">
            Hola, soy Maximiliano
            <br />
          </span>

          <span className="span">Desarrollador IA</span>
        </p>

        <p className="aqui-muestro">
          Aquí muestro mi imagen personal, mi trayectoria, y planes a futuro.
        </p>
      </div>
      <div className="navbar">
        <div className="text-navbar">Sobre mí</div>

        <div className="text-navbar">Habilidades</div>

        <div className="text-navbar">Educación</div>

        <div className="text-navbar">Proyectos</div>
      </div>
      <div className="foto">
        <img src="gradient-intro.png" alt="" className="group" />

        <img src="/foto_maxi.png" className="photos-instance" alt="intro" />
      </div>
      
    </div>
  );
};
