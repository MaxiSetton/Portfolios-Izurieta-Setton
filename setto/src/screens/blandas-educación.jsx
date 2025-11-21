import React from "react";
import { Groups } from "./Groups";
import { Rss } from "./Rss";
import { Size48 } from "./Size48";
import { Star } from "./Star";
import { Sun } from "./Sun";
import { TrendingUp } from "./TrendingUp";
import { User } from "./User";
import { Users } from "./Users";
import group72 from "./group-72.png";
import image11 from "./image-1-1.png";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image from "./image.svg";
import line6 from "./line-6.svg";
import "./blandas-educación.css";
import vector from "./vector.svg";

export const Frame = () => {
  return (
    <div className="frame">
      <img className="group" alt="Group" src={group72} />

      <div className="div">
        <div className="text-wrapper">programador</div>

        <div className="text-wrapper-2">No sólo un</div>
      </div>

      <p className="p">
        Un líder no se define sólo por su conocimiento técnico
      </p>

      <p className="mis-habilidades">
        <span className="span">Mis habilidades blandas son las que </span>

        <span className="text-wrapper-3">aseguran</span>

        <span className="span"> un trabajo de </span>

        <span className="text-wrapper-3">calidad.</span>
      </p>

      <div className="div-2">
        <Groups className="groups-instance" />
        <div className="text-wrapper-4">Líder positivo</div>
      </div>

      <div className="div-3">
        <Users className="size-48" color="#2F0042" />
        <div className="text-wrapper-5">Trabajo en equipo</div>
      </div>

      <div className="div-4">
        <Size48 className="heart" color="#2F0042" />
        <div className="text-wrapper-6">Empatía</div>
      </div>

      <div className="div-5">
        <div className="comunicaci-n">
          Comunicación <br />
          efectiva
        </div>

        <Rss className="rss-instance" />
        <User className="size-48-instance" color="#2F0042" />
      </div>

      <div className="div-6">
        <Star className="star-instance" color="#2F0042" />
        <div className="text-wrapper-7">Perfeccionista</div>
      </div>

      <div className="div-7">
        <Sun className="sun-instance" />
        <div className="text-wrapper-8">Apasionado</div>
      </div>

      <div className="div-8">
        <TrendingUp className="trending-up" color="#2F0042" />
        <div className="text-wrapper-9">Superador</div>
      </div>

      <img className="line" alt="Line" src={line6} />

      <div className="text-wrapper-10">Mi educación</div>

      <div className="div-9">
        <div className="div-10">
          <img className="image" alt="Image" src={image3} />

          <div className="text-wrapper-11">Egresado</div>

          <div className="text-wrapper-12">Curso de líderes Maccabi</div>
        </div>

        <div className="div-11">
          <img className="img" alt="Image" src={image11} />

          <div className="text-wrapper-13">Egresado con honores</div>

          <div className="text-wrapper-14">Escuela ORT Argentina</div>
        </div>

        <div className="div-12">
          <div className="image-wrapper">
            <img className="image-2" alt="Image" src={image2} />
          </div>

          <div className="text-wrapper-15">Futuro alumno</div>

          <p className="universidad-del-CEMA">
            Universidad del CEMA
            <br />
            Ingeniería en IA
          </p>
        </div>
      </div>

      <img className="vector" alt="Vector" src={vector} />

      <img className="vector-2" alt="Vector" src={image} />
    </div>
  );
};
