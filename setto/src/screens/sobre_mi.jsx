import React from "react";
import a650111 from "./42a6501-1-1.png";
import "./sobre_mi.css";

export const Frame = () => {
  return (
    <div className="frame">
      <img className="element" alt="Element" src={a650111} />

      <div className="text-wrapper">Sobre mí</div>

      <p className="me-llamo-maximiliano">
        <span className="span">
          Me llamo Maximiliano Eithan Setton, tengo 18 años. Estudio en la
          Escuela ORT, y soy{" "}
        </span>

        <span className="text-wrapper-2">desarrollador IA</span>

        <span className="span">
          . Me entusiasman los proyectos complejos, el aprendizaje constante y
          las
        </span>

        <span className="text-wrapper-2"> tecnologías emergentes</span>

        <span className="span">
          . Disfruto los retos que requieren encontrar soluciones que generen un
          impacto positivo.
          <br />
          <br />
          Soy alguien que aborda con entusiasmo los desafíos, lo que le gusta.
          Me motiva ver cómo una{" "}
        </span>

        <span className="text-wrapper-2">idea</span>

        <span className="span"> se transforma en </span>

        <span className="text-wrapper-2">algo real</span>

        <span className="span"> que puede </span>

        <span className="text-wrapper-2">ayudar</span>

        <span className="span"> a los demás.</span>
      </p>
    </div>
  );
};
