/* --- HEADER: Título principal, accesos  a redes sociales/contacto. */

import { useState } from "react";

import selloHanko from "../../images/design/sello.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú hamburguesa

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="header ">
      <div className="header__container">
        {/* Identidad visual: Sello personal estilo hanko japonés */}
        <img
          src={selloHanko}
          alt="Sello personal estilo Hanko japonés en color rojo con el nombre de Cristina en caracteres Katakana"
          className="header__seal"
        />

        {/* Título dinámico: Implementa el efecto visual de un pergamino (scroll) */}
        <div className="header__title">
          <div className="header__title-link scroll">
            {/* Elementos decorativos del pergamino */}
            <span className="scroll__roller scroll__roller--left"></span>

            <span className="scroll__content">
              <span className="scroll__text">Semillas de Código</span>
            </span>

            <span className="scroll__roller scroll__roller--right"></span>
          </div>
        </div>

        {/* Botón Hamburguesa */}
        <button
          className={`header__menu-btn ${isOpen ? "is-open" : ""}`}
          onClick={toggleMenu}
          aria-label="Abrir menú de navegación"
          aria-expanded={isOpen}
        >
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
          <span className="header__menu-bar"></span>
        </button>

        {/* Navegación por secciones*/}
        <nav className={`header__nav ${isOpen ? "is-active" : ""}`}>
          <ul className="header__list">
            <li className="header__item">
              <a href="#roots" className="header__nav-item" onClick={closeMenu}>
                Raíces
              </a>
            </li>

            <li className="header__item">
              <a
                href="#garden-code"
                className="header__nav-item"
                onClick={closeMenu}
              >
                Jardín
              </a>
            </li>

            <li className="header__item">
              <a href="#tools" className="header__nav-item" onClick={closeMenu}>
                Herramientas
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
