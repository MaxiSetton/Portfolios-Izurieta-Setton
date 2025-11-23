import './blandas-educacion.css';
import React, { useState } from 'react';
const SkillCard = ({ title, iconSrc, customColor }) => {
  return (
    <div className="flex flex-col items-center justify-center p-2">
      <div 
        className="skill-card hover:scale-105" 
        style={{ backgroundColor: customColor }}
      >
        <div className="skill-icon-container">
          <img 
            src={iconSrc} 
            alt={title} 
            className="skill-icon" 
            onError={(e) => {
              e.target.onerror = null; 
              e.target.src = "https://placehold.co/90x90/e0e0e0/2f0042?text=Icono";
            }}
          />
        </div>
        <h3 className="skill-title">
          {title}
        </h3>
      </div>
    </div>
  );
};

// --- DATOS (Puedes mover esto a un archivo separado o pasarlo como props) ---
const educationData = [
  {
    id: 1,
    type: 'standard', // Diseño estándar (Maccabi)
    title: 'Egresado',
    subtitle: 'Curso de líderes Maccabi',
    image: 'maca.png', // Placeholder
  },
  {
    id: 2,
    type: 'honor', // Diseño destacado (ORT)
    title: 'Egresado con honores',
    institution: 'Escuela ORT Argentina',
    image: 'ORT.png', // Placeholder
  },
  {
    id: 3,
    type: 'future', // Diseño con elipse (CEMA)
    title: 'Futuro alumno',
    subtitle: 'Universidad del CEMA',
    description: 'Ingeniería en IA',
    image: 'UCEMA.png', // Placeholder
  },
  // Puedes agregar más elementos aquí para probar el scroll
];

const EducationCard = ({ item }) => {
  // Renderizado condicional basado en el "tipo" de tarjeta para mantener tus estilos originales
  
  if (item.type === 'honor') {
    return (
      <div className="card-container honor-card">
        <div className="image-wrapper-large">
          <img src={item.image} alt={item.institution} className="image-large" />
        </div>
        <b className="card-title">{item.title}</b>
        <div className="card-subtitle-large">{item.institution}</div>
      </div>
    );
  }

  if (item.type === 'future') {
    return (
      <div className="card-container">
        <div className="ellipse-parent">
          <img src={item.image} alt={item.subtitle} className="image-inset" />
        </div>
        <b className="card-title">{item.title}</b>
        <div className="card-text-block">
          {item.subtitle}
          <br />
          {item.description}
        </div>
      </div>
    );
  }

  // Standard card
  return (
    <div className="card-container">
      <div className="image-wrapper-standard">
        <img src={item.image} alt={item.subtitle} className="image-standard" />
      </div>
      <b className="card-title">{item.title}</b>
      <div className="card-subtitle">{item.subtitle}</div>
    </div>
  );
};

const skills = [
  { title: "Líder positivo", iconSrc: 'groups.svg', color: "#d7d7d7" },
  { title: "Trabajo en equipo", iconSrc: 'Users.svg', color: "#d9d9d9" },
  { title: "Empatía", iconSrc: 'Heart.svg', color: "#d9d9d9" },
  { title: "Comunicación efectiva", iconSrc: 'Rss.svg', color: "#d9d9d9" }, 
  { title: "Perfeccionista", iconSrc: 'Star.svg', color: "#d9d9d9" },
  { title: "Apasionado", iconSrc: 'Sun.svg', color: "#d9d9d9" },
  { title: "Superador", iconSrc: 'Trending up.svg', color: "#d9d9d9" },
];

export const Blandas_educacion = () => {
  const [centerIndex, setCenterIndex] = useState(1);

  const len = educationData.length;
  const prevIndex = (centerIndex - 1 + len) % len;
  const nextIndex = (centerIndex + 1) % len;

  // arreglo en orden: [izquierda, centro, derecha]
  const arranged = [prevIndex, centerIndex, nextIndex];

  const handlePrev = () => setCenterIndex((ci) => (ci - 1 + len) % len);
  const handleNext = () => setCenterIndex((ci) => (ci + 1) % len);

  return (
    <div className="group-72-1-parent">
      <img className="group-72-1" alt="" src="gradient-blandas.png" />

      {/* HEADER */}
      <section className="header-container">
        <div className="header-left">
          <b className="no-slo-un">No sólo un</b>
          <b className="programador">programador</b>
        </div>

        <div className="header-divider" aria-hidden="true" />

        <div className="header-right">
          <b className="un-lder-no">
            Un líder no se define sólo por su conocimiento técnico
          </b>

          <div className="mis-habilidades-blandas-container">
            <span>Mis habilidades blandas son las que </span>
            <b>aseguran</b>
            <span> un trabajo de </span>
            <b>calidad.</b>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE TARJETAS */}
      <section className="cards-section-container">
        <div className="cards-grid">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              title={
                skill.title === "Comunicación efectiva"
                  ? <>Comunicación <br /> efectiva</>
                  : skill.title
              }
              iconSrc={skill.iconSrc}
              customColor={skill.color}
            />
          ))}
        </div>
      </section>

	<div className="education-section">

	<div className="mi-educacion">Mi educación</div>

	<div className="carousel-wrapper">
	{/* Botón Izquierda */}
	<button className="nav-button" onClick={handlePrev} aria-label="Anterior">
		<img src='Izquierda.svg'/>
	</button>

	{/* Área visible */}
	<div className="carousel-track-container">
		<div 
		className="carousel-track"
		>
		{educationData.map((item) => (
			<EducationCard key={item.id} item={item} />
		))}
		</div>
	</div>

	{/* Botón Derecha */}
	<button className="nav-button" onClick={handleNext} aria-label="Siguiente">
		<img src='Derecha.svg'/>
	</button>
	</div>
</div>
    </div>
  );
};

