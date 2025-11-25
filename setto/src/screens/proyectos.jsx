import React from 'react';
import './proyectos.css';

export const Proyectos = () => {
  return (
    <div className="proyectos-container">
      {/* Fondo Gradiente */}
      <img 
        className="gradient-background" 
        src="gradient-proyectos.png" 
        alt="Fondo Gradiente" 
      />

      {/* Título Principal */}
      <h1 className="main-title">Mis Proyectos.</h1>

      {/* --- Grupo: SignAI --- */}
      <div className="project-group signai-group">
        <div className="card-background"></div>
        
        {/* Descripción */}
        <p className="project-description">
          Traductor de Lengua de Señas Argentina impulsado por IA.<br/>
          En el mismo soy el encargado del desarrollo de la inteligencia artificial.
        </p>

        {/* Grupo: Foto Link */}
        <div className="foto-link-container">
			
          <div className="vertical-line line-orange"></div>
          
          <img 
            className="project-image" 
            src="signai.png" 
            alt="SignAI Preview" 
          />
          <div className="link-wrapper">
             <a href="https://signai.ar" target="_blank" rel="noreferrer" className="link-text">signai.ar</a>
             <div className="link-icon">
                <img className="link-icon-shape" src='link.svg'></img>
             </div>
          {/* Grupo: Link */}
          
          </div>
        </div>
      </div>

      {/* --- Grupo: Pastitic --- */}
      <div className="project-group pastitic-group">
        <div className="card-background"></div>

        {/* Descripción */}
        <p className="project-description">
          Pastillero inteligente para personas de tercera edad.<br/>
          Me encargué del desarrollo de la aplicación siendo fullstack developer
        </p>

        {/* Imagen y Línea */}
        <img 
          className="project-image-pastitic" 
          src="pastitic.png" 
          alt="PastiTic Logo" 
        />
        <div className="vertical-line line-blue"></div>
      </div>

      {/* --- Grupo: Contacto e Info --- */}
      <div className="contact-section">
        <h2 className="contact-title">Contacto</h2>
        
        {/* Frame 113: Iconos (Representación geométrica según tu código) */}
        <div className="social-icons-frame">
			<a
							href="https://www.instagram.com/maxisetton_"
							rel="noopener noreferrer"
							target="_blank"
							>
							<img className="icon-box icon-instagram" alt="Vector" src='ig.svg' />
							</a>
							<a
							href="mailto:maxisetton@gmail.com?subject=Consulta&amp;body=Hola,%20vi%20tu%20contacto%20y..."
							rel="noopener noreferrer"
							target="_blank"
							>
							<img className="icon-box icon-gmail" alt="Vector" src='mail.svg' />
							</a>
							<a
							href="https://www.linkedin.com/in/maximiliano-setton-8013b433b/"
							rel="noopener noreferrer"
							target="_blank"
							>
							<img className="icon-box icon-linkedin-rect" alt="Vector" src="lkdn.svg" />
							</a>
        </div>

        {/* Info Contacto & Footer */}
        <div className="footer-info">
            <div className="footer-line"></div>
            <p className="copyright">
                © 2025 Maximiliano Eithan Setton. Todos los derechos reservados.
            </p>
        </div>
      </div>
    </div>
  );
};