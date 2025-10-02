import React from 'react';
import '../organism/experience.css';

interface ExperienceItem {
  company: string;
  role: string;
  date: string;
  details: string[];
  image: string;
}

const experienceData: ExperienceItem[] = [
  {
    company: 'Tech Solutions S.A.',
    role: 'Desarrollador Frontend',
    date: 'Marzo 2021 – Actualidad',
    details: [
      'Desarrollé interfaces modernas usando React y Tailwind CSS.',
      'Implementé funcionalidades SPA para mejorar la UX en un 40%.',
    ],
    image: 'src/img/1.0.png'
  },
  {
    company: 'Freelance',
    role: 'Fullstack Developer',
    date: '2020 – 2021',
    details: [
      'Desarrollé sitios web y sistemas administrativos para pequeños negocios.',
      'Stack usado: HTML, CSS, JavaScript, PHP, MySQL.',
    ],
    image: 'src/img/2.0.png'
  },
  {
    company: 'Innovatech Perú',
    role: 'Desarrollador Backend',
    date: '2019 – 2020',
    details: [
      'Diseñé y optimicé APIs REST con Node.js y Express.',
      'Gestioné bases de datos relacionales con PostgreSQL.',
    ],
    image: 'src/img/3.0.png'
  },
  {
    company: 'StartUp Creativa',
    role: 'Diseñador Web',
    date: '2018 – 2019',
    details: [
      'Creé maquetaciones responsive con HTML5, CSS3 y Bootstrap.',
      'Colaboré en la identidad visual de productos digitales.',
    ],
    image: 'src/img/4.0.png'
  },
  {
    company: 'GlobalSoft Corp.',
    role: 'Ingeniero de Software',
    date: '2016 – 2018',
    details: [
      'Participé en el desarrollo de un ERP corporativo usando Java y Spring Boot.',
      'Automatizé pruebas con JUnit, reduciendo errores en producción en un 25%.',
    ],
    image: 'src/img/5.0.png'
  },
  {
    company: 'IT Support Solutions',
    role: 'Soporte Técnico',
    date: '2015 – 2016',
    details: [
      'Brindé soporte a usuarios en entornos Windows y Linux.',
      'Configuré redes locales y servidores básicos.',
    ],
    image: 'src/img/6.0.png'
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <h2 className="experience__title">Experiencia Profesional</h2>
      <div className="experience__container">
        {experienceData.map((item, index) => (
          <div className="experience__item" key={index}>
            <img src={item.image} alt={item.company} />
            <div className="experience__overlay">
              <h3 className="experience__company">{item.company}</h3>
              <div className="experience__meta">
                <span className="experience__role">{item.role}</span>
                <span className="experience__date">{item.date}</span>
              </div>
              <ul className="experience__details">
                {item.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
