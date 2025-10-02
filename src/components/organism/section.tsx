import { useState } from 'react';
import '../organism/services.css';

interface ServiceCard {
  title: string;
  img: string; // URL o path de la imagen
  points: string[];
  price: string;
}

const servicesData: Record<string, ServiceCard[]> = {
  Esencial: [
    {
      title: 'Plan Básico',
      img: '/img/favorite-unscreen.gif',
      points: ['Sitio responsivo', 'Optimización básica', 'Soporte limitado'],
      price: 'S/. 100',
    },
    {
      title: 'Plan Intermedio',
      img: '/img/price-tag-unscreen.gif',
      points: ['Sitio responsivo', 'SEO básico', 'Soporte 24h'],
      price: 'S/. 300',
    },
    {
      title: 'Plan Avanzado',
      img: '/img/hot-sale-unscreen.gif',
      points: ['Sitio premium', 'SEO avanzado', 'Soporte completo'],
      price: 'S/. 500',
    },
  ],
  Profesional: [
    {
      title: 'Pro Básico',
      img: '/img/favorite-1--unscreen.gif',
      points: ['App sencilla', 'Backend básico', 'Soporte limitado'],
      price: 'S/. 800',
    },
    {
      title: 'Pro Intermedio',
      img: '/img/price-tag-1--unscreen.gif',
      points: ['App completa', 'Integración APIs', 'Soporte 24h'],
      price: 'S/. 1000',
    },
    {
      title: 'Pro Avanzado',
      img: '/img/hot-sale-1--unscreen.gif',
      points: ['App premium', 'Integración completa', 'Soporte completo'],
      price: 'S/. 1300',
    },
  ],
  Empresarial: [
    {
      title: 'Empresa Básico',
      img: '/img/gadget-unscreen.gif',
      points: ['Sistema administrativo', 'Seguridad básica', 'Soporte limitado'],
      price: 'S/. 1000',
    },
    {
      title: 'Empresa Intermedio',
      img: '/img/price-tag-2--unscreen.gif',
      points: ['Sistema completo', 'Automatización', 'Soporte 24h'],
      price: 'S/. 1500',
    },
    {
      title: 'Empresa Avanzado',
      img: '/img/shopping-unscreen.gif',
      points: ['Solución full-stack', 'Integración APIs', 'Soporte VIP'],
      price: 'S/. 2000',
    },
  ],
};

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('Esencial');

  return (
    <section id="services" className="section">
      <h2 className="services__title">Servicios</h2>
      <div className="services__buttons">
        {Object.keys(servicesData).map((category) => (
          <button
            key={category}
            data-category={category}
            className={`services__btn ${activeCategory === category ? 'active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="services__cards">
        {servicesData[activeCategory].map((card, index) => (
          <div
            key={index}
            className={`service__card ${index === 1 ? 'center-card' : ''}`}
          >
            <h3 className="service__name">{card.title}</h3>
            <img src={card.img} alt={card.title} className="service__logo" />
            <ul className="service__points">
              {card.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <p className="service__price">{card.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
