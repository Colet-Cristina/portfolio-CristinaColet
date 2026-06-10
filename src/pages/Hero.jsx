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
          <h3 className="hero__greeting">
            Fullstack Developer | Mi dojo digital
          </h3>

          {/* Filosofía de desarrollo */}
          <p className="hero__description">
            Cambié de rumbo para convertir mi curiosidad tecnológica en mi
            profesión. Tras mi formación en Adalab, busco aportar mi dedicación
            en proyectos reales, y seguir aprendiendo y evolucionando como
            Fullstack Developer.
          </p>
        </div>

        {/* Navegación social: Enlaces externos y contacto directo */}
        <nav className="hero__social" aria-label="Redes sociales y contacto">
          {/* Contacto, Email */}
          <a
            href="mailto:coletcristina@gmail.com"
            className="hero__social-item"
            aria-label="Enviar un correo electrónico"
          >
            <img
              src={emailIcon}
              alt="Email"
              className="hero__social-icon"
              aria-hidden="true"
            />
          </a>

          {/* Acceso a GitHub */}
          <a
            href="https://github.com/colet-cristina"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-item"
            aria-label="Visitar el perfil de GitHub (se abre en una nueva pestaña)"
          >
            <img
              src={gitIcon}
              alt="GitHub"
              className="hero__social-icon"
              aria-hidden="true"
            />
          </a>

          {/* Acceso a Linkedin */}
          <a
            href="https://linkedin.com/in/cristina-colet-corredera/"
            target="_blank"
            rel="noopener noreferrer"
            className="hero__social-item"
            aria-label="Visitar el perfil de Linkedin (se abre en una nueva pestaña)"
          >
            <img
              src={inIcon}
              alt="LinkedIn"
              className="hero__social-icon"
              aria-hidden="true"
            />
          </a>
        </nav>

        {/* Navegación principal: Enlaces internos */}
        <nav className="hero__nav">
          <ul className="hero__list">
            {/* --- PIEDRA 1: JARDÍN --- */}
            <li className="hero__item">
              <a
                href="#garden-code"
                className="hero__link hero__link--garden"
                aria-label="Mis proyectos: jardín de código"
              >
                Jardín de Código
              </a>
            </li>

            {/* --- PIEDRA 2: RAÍCES --- */}
            <li className="hero__item">
              <a
                href="#roots"
                className="hero__link hero__link--roots"
                aria-label="Sobre mí: mis raíces"
              >
                Raíces
              </a>
            </li>

            {/* --- PIEDRA 3: HERRAMIENTAS --- */}
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
