import React from "react";
import "./hago.css";

// Datos de las tarjetas (Fácil de editar)
const cardData = [
  {
    id: 1,
    title: "Computer Vision",
    text: "Experto en sistemas avanzados de IA para la detección de características en fotos y videos.",
  },
  {
    id: 2,
    title: "Programación full stack",
    text: "Experiencia trabajando con proyectos en Python, React, Vue js, Node js, C#, HTML y CSS.",
  },
  {
    id: 3,
    title: "Data Analytics",
    text: "Procesamiento de grandes conjuntos de datos para extraer los datos importantes para Machine Learning.",
  },
  {
    id: 4,
    title: "Esto no termina acá",
    text: "Estudiante de Ingeniería en Inteligencia Artificial en la Universidad del CEMA.",
  },
  {
    id: 5,
    title: "Natural Language Processing",
    text: "Experiencia en modelos de IA combinando LLMs con extractores de características para llegar a traducciones precisas.",
  },
  {
    id: 6,
    title: "Impacto social positivo",
    text: "Liderazgo en proyectos de aspecto social, trabajando en conjunto con instituciones gubernamentales y comunidades.",
  },
];

// Componente reutilizable para la tarjeta
const Card = ({ title, text }) => {
  return (
    <div className="hago-card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
      </div>
      <div className="card-line" />
    </div>
  );
};

export const Hago = () => {
  return (
    <div className="hago-container">
      <div className="container">
        <h2 className="main-title">Lo que hago</h2>
      
      <div className="knowledge-grid">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} text={card.text} />
        ))}
      </div>
    </div> 

      
    </div>
  );
};