import React, { useState } from 'react';
import './App.css';
import Services from './components/organism/section';
import Experience from './components/organism/experience';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle dark mode
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // Toggle mobile navigation visibility
  const toggleNav = () => setIsNavVisible(!isNavVisible);

  // Handle navigation link click
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 80, // más offset para que no lo tape el header
        behavior: 'smooth',
      });
    }
    if (isNavVisible) {
      setIsNavVisible(false);
    }
  };

  return (
    <div className={`body ${isDarkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="header__left">
          <button
            id="menuToggle"
            className="header__hamburger"
            onClick={toggleNav}
          >
            <img src="img/burger-menu.png" alt="Menú" />
          </button>
        </div>

        <div className="header__logo">
          <img
            src="img/Captura_de_pantalla_2025-09-26_131834-removebg-preview.png"
            alt="Logo"
          />
        </div>

        <div className="header__right">
          <img
            src="src/img/dark.png"
            alt="Ajustes"
            className="header__settings-icon"
            onClick={toggleDarkMode}
          />
        </div>
      </header>

      {isNavVisible && (
        <div className="nav-overlay active" onClick={toggleNav}></div>
      )}

      <nav
        className={`nav ${isNavVisible ? 'nav--visible' : ''}`}
        id="mainNav"
      >
        <a className="nav__link" href="#about" onClick={(e) => handleNavLinkClick(e, 'about')}>
          <h2 className="city-nights">Sobre mí</h2>
        </a>

        <a className="nav__link" href="#projects" onClick={(e) => handleNavLinkClick(e, 'projects')}>
          <h2 className="city-nights">Proyectos</h2>
        </a>

        <a className="nav__link" href="#skills" onClick={(e) => handleNavLinkClick(e, 'skills')}>
          <h2 className="city-nights">Habilidades</h2>
        </a>

        <a className="nav__link" href="#experience" onClick={(e) => handleNavLinkClick(e, 'experience')}>
          <h2 className="city-nights">Experiencia Profesional</h2>
        </a>

        <a className="nav__link" href="#services" onClick={(e) => handleNavLinkClick(e, 'services')}>
          <h2 className="city-nights">Servicios</h2>
        </a>

        <a className="nav__link" href="#contact" onClick={(e) => handleNavLinkClick(e, 'contact')}>
          <h2 className="city-nights">Contacto</h2>
        </a>

        <a className="nav__link" href="#cv" onClick={(e) => handleNavLinkClick(e, 'cv')}>
          <h2 className="city-nights">Currículum</h2>
        </a>
      </nav>
      
    <section id="about" className="section">
  <div className="about__container">
    <div className="about__profile">
      <img
        src="src/img/Snapchat-704985067.jpg"  // Verifica que esta ruta sea la correcta
        alt="Foto de perfil"
        className="about__photo"  // Asegúrate de que la clase esté aplicada correctamente
      />
    </div>

    <div className="about__content">
      <h2>Sobre mí</h2>
      <p>
        Soy un desarrollador web apasionado por crear experiencias digitales intuitivas y efectivas.
        Mi historia comenzó como entusiasta de la tecnología desde joven, lo que me llevó a especializarme
        en desarrollo frontend y diseño de interfaces. Me apasiona aprender constantemente, trabajar en equipo y transformar
        ideas en productos reales, resolviendo problemas complejos con soluciones limpias y eficientes.
        Busco proyectos que impliquen impacto positivo y trabajo colaborativo, especialmente en diseño UI/UX y desarrollo
        con enfoque en accesibilidad. Fuera del código, disfruto de la fotografía, tocar la guitarra, explorar cafés locales
        y aprender idiomas.
      </p>
    </div>
  </div>
</section>


      <section id="projects" className="section">
        <h2 className="projects__title">Mis Proyectos</h2>
        <div className="projects__grid">
          <div className="project__card">
            <img src="src/img/primera.00.jpg" alt="Proyecto 1" className="project__image" />
            <h3 className="project__title">Registro</h3>
            <p className="project__description">Es una interfaz de inicio de sesión minimalista con ilustración a la izquierda y formulario de acceso a la derecha, en un diseño limpio y moderno.</p>
            <p className="project__tech">Tecnologías: HTML, CSS</p>
            <p className="project__testimonial">“Este proyecto fue excelente para nuestro equipo.”</p>
            <a href="https://examen-parcial-eta.vercel.app/" target="_blank" className="project__button">Ver Proyecto</a>
          </div>

          <div className="project__card">
            <img src="src/img/segunda.00.jpg" alt="Proyecto 2" className="project__image" />
            <h3 className="project__title">Login</h3>
            <p className="project__description">Es un formulario minimalista con ícono de usuario, campos de acceso y botones de Iniciar sesión y Registrarse.</p>
            <p className="project__tech">Tecnologías: HTML, CSS</p>
             <p className="project__testimonial">“Este proyecto fue excelente para nuestro equipo.”</p>
            <a href="https://tarea-xpk9.vercel.app/" target="_blank" className="project__button">Ver Proyecto</a>
          </div>

          <div className="project__card">
            <img src="src/img/tercera.00.jpg" alt="Proyecto 3" className="project__image" />
            <h3 className="project__title">CopaFácil</h3>
            <p className="project__description">CopaFácil es una plataforma online para organizar torneos deportivos con facilidad, creando fixtures, estadísticas y clasificaciones de forma automática.</p>
            <p className="project__tech">Tecnologías: React, js</p>
             <p className="project__testimonial">“Este proyecto fue excelente para nuestro equipo.”</p>
            <a href="https://www.copafacil.com/en" target="_blank" className="project__button">Ver Proyecto</a>
          </div>

          <div className="project__card">
            <img src="src/img/cuarta.00.jpg" alt="Proyecto 4" className="project__image" />
            <h3 className="project__title">Angelfire</h3>
            <p className="project__description">Angelfire es un servicio clásico de alojamiento web gratuito que permite crear páginas personales simples con herramientas básicas de diseño y edición.</p>
            <p className="project__tech">Tecnologías: Node.js, Express</p>
             <p className="project__testimonial">“Este proyecto fue excelente para nuestro equipo.”</p>
            <a href="https://www.angelfire.lycos.com/" target="_blank" className="project__button">Ver Proyecto</a>
          </div>

        </div>
      </section>

      
<section id="skills" className="section">
  <h2 className="skills__title">Habilidades</h2>
  <div className="skills__container">

    <div className="skill skill--html">
      <div className="skill__info">
        <img src="src/img/html.png" alt="HTML Logo" className="skill__logo" />
        <span className="skill__name">HTML</span>
        <span className="skill__percent">95%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '95%' }}></div>
      </div>
    </div>

    <div className="skill skill--css">
      <div className="skill__info">
        <img src="src/img/css.png" alt="CSS Logo" className="skill__logo" />
        <span className="skill__name">CSS</span>
        <span className="skill__percent">90%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '90%' }}></div>
      </div>
    </div>

    <div className="skill skill--js">
      <div className="skill__info">
        <img src="src/img/js.png" alt="JavaScript Logo" className="skill__logo" />
        <span className="skill__name">JavaScript</span>
        <span className="skill__percent">85%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '85%' }}></div>
      </div>
    </div>

    <div className="skill skill--react">
      <div className="skill__info">
        <img src="src/img/react.png" alt="React Logo" className="skill__logo" />
        <span className="skill__name">React</span>
        <span className="skill__percent">80%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '80%' }}></div>
      </div>
    </div>

    <div className="skill skill--python">
      <div className="skill__info">
        <img src="src/img/python.png" alt="Python Logo" className="skill__logo" />
        <span className="skill__name">Python</span>
        <span className="skill__percent">88%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '88%' }}></div>
      </div>
    </div>

    <div className="skill skill--ts">
      <div className="skill__info">
        <img src="src/img/typescript.png" alt="TypeScript Logo" className="skill__logo" />
        <span className="skill__name">TypeScript</span>
        <span className="skill__percent">82%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '82%' }}></div>
      </div>
    </div>

    <div className="skill skill--node">
      <div className="skill__info">
        <img src="src/img/nodejs.png" alt="Node.js Logo" className="skill__logo" />
        <span className="skill__name">Node.js</span>
        <span className="skill__percent">78%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '78%' }}></div>
      </div>
    </div>

    <div className="skill skill--java">
      <div className="skill__info">
        <img src="src/img/java.png" alt="Java Logo" className="skill__logo" />
        <span className="skill__name">Java</span>
        <span className="skill__percent">70%</span>
      </div>
      <div className="skill__bar">
        <div className="skill__progress" style={{ width: '70%' }}></div>
      </div>
    </div>

  </div>

  
</section>

     <section id="experience" className="section">
 <Experience/>
     </section>


      <section id="services" className="section">
<Services />
      </section>

<section id="contact">
  <div className="contact">
    <h2 className="contact__title">Contacto</h2>

    <div className="contact__box">
     
      <div className="contact__form-side">
        <form className="contact__form">
          <input type="text" placeholder="Tu nombre" required />
          <input type="email" placeholder="Tu correo" required />
          <textarea placeholder="Tu mensaje" required></textarea>
          <button type="submit" className="neon-pulse">Enviar Mensaje</button>
        </form>
      </div>

  
      <div className="contact__info-side">
        <div className="contact__info">
          <h3>Redes Sociales</h3>
          <div className="contact__socials">
            <a href="https://www.facebook.com/share/1B7y9ERbYg/" target="_blank">
              <img src="src/img/facebook 3.00.png" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://www.instagram.com/cristophersilvacruz?igsh=eGo3anlzdnAzM3Iz" target="_blank">
              <img src="src/img/instagram.png" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://www.tiktok.com/@cristophersilvacr66?_t=ZS-90CA27LWm1a&_r=1" target="_blank">
              <img src="src/img/tik-tok.png" alt="TikTok" className="social-icon" />
            </a>
            <a href="https://wa.me/51914068562" target="_blank">
              <img src="src/img/whatsapp3.00.png" alt="WhatsApp" className="social-icon" />
            </a>
          </div>

          <p><strong>Ubicación:</strong> Lima, Perú</p>
          <p><strong>Disponibilidad:</strong> Lunes a Viernes, 9am - 6pm</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="cv" className="cv-section">
  <h2 className="cv__title">Currículum</h2>

  <div className="cv__content">
    {/* 🎓 EDUCACIÓN */}
    <div className="cv__block education">
      <div className="cv__header">
        <div className="cv__header-left">
          <img
            src="src/img/online-education-unscreen.gif"
            alt="Educación"
            className="cv__icon"
          />
          <h3>Educación</h3>
        </div>

     
        <svg viewBox="0 0 36 36" className="circular-chart green" role="img" aria-label="90%">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="90, 100"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">90%</text>
        </svg>
      </div>

      <ul>
        <li>
          <strong>Computación e Informatica</strong> – Instituto Privado Celendín (2024 - 2027)
        </li>
        <li>
          <strong>Certificación en Desarrollo Web FullStack</strong> – Platzi, Udemy, etc.
          {/* Texto alternativo (también visible si quieres) */}
          <span className="cv__percentage-text">90%</span>
        </li>
      </ul>
    </div>

  
    <div className="cv__block experience">
      <div className="cv__header">
        <div className="cv__header-left">
          <img
            src="src/img/hands-wrench-unscreen.gif"
            alt="Experiencia"
            className="cv__icon"
          />
          <h3>Experiencia Profesional</h3>
        </div>

   
        <svg viewBox="0 0 36 36" className="circular-chart blue" role="img" aria-label="85%">
          <path
            className="circle-bg"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="circle"
            strokeDasharray="85, 100"
            d="M18 2.0845
               a 15.9155 15.9155 0 0 1 0 31.831
               a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="18" y="20.35" className="percentage">85%</text>
        </svg>
      </div>

      <ul>
        <li>
          <strong>Desarrollador Web Freelance</strong> – Proyectos para clientes locales (2022 - presente)
        </li>
        <li>
          <strong>Practicante TI</strong> – Empresa ABC, Lima (2021 - 2022)
          <span className="cv__percentage-text">85%</span>
        </li>
      </ul>
    </div>
  </div>

 
  <div className="cv__download">
    <a href="CV-Cristopher-Silva.pdf" download className="super-button">
      📄 Descargar CV (PDF)
      <svg
        className="arrow"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </a>
  </div>
</section>

    
    </div>
  );
}

export default App;


