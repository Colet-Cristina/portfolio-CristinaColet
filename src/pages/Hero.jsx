/* --- HERO: Incluye el menú de navegación principal hacia las diferentes secciones del "jardín" --- */

import emailIcon from "../images/icons/email.png";
import gitIcon from "../images/icons/git.png";
import inIcon from "../images/icons/in.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__wrapper">
        <div className="hero__content">
          {/* Información personal y título */}
          <h1 className="hero__name">Cristina Colet</h1>

          {/* Navegación social: Enlaces externos y contacto directo */}
          <nav className="hero__social">
            {/* Contacto, Email */}
            <a
              href="mailto:coletcristina@gmail.com"
              className="hero__social-item"
            >
              <img src={emailIcon} alt="Email" className="hero__social-icon" />
            </a>

            {/* Acceso a GitHub */}
            <a
              href="https://github.com/colet-cristina"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-item"
            >
              <img src={gitIcon} alt="GitHub" className="hero__social-icon" />
            </a>

            {/* Acceso a LinkedIn */}
            <a
              href="https://linkedin.com/in/cristina-colet-corredera/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-item"
            >
              <img src={inIcon} alt="LinkedIn" className="hero__social-icon" />
            </a>
          </nav>

          <h3 className="hero__greeting">
            Fullstack Developer | Mi dojo de código
          </h3>

          {/* Filosofía de desarrollo */}
          <p className="hero__description">
            Cambié de rumbo para convertir mi curiosidad tecnológica en mi
            profesión. Tras mi formación en Adalab, busco aportar mi dedicación
            en proyectos reales, y seguir aprendiendo y evolucionando como
            Fullstack Developer.
          </p>
        </div>

        {/* Navegación principal: Enlaces internos */}
        <nav className="hero__nav">
          <ul className="hero__list">
            {/* --- PIEDRA 1: RAÍCES --- */}
            <li className="hero__item">
              <a
                href="#roots"
                className="hero__link hero__link--roots"
                aria-label="Sobre mí: mis raíces"
              >
                Raíces
              </a>
            </li>

            <li className="hero__item">
              <a
                href="#garden-code"
                className="hero__link hero__link--garden"
                aria-label="Mis proyectos: jardín de código"
              >
                Jardín de Código
              </a>
            </li>

            <li className="hero__item">
              <a
                href="#tools"
                className="hero__link hero__link--tools"
                aria-label="Mis tecnologías y herramientas de desarrollo"
              >
                Herramientas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Hero;
