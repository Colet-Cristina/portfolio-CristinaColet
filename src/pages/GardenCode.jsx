/* --- GARDEN-CODE: Lista de proyectos dinámicos y un modal con detalles. */

import { useState } from "react";
import GardenFlower from "../components/GardenFlower";
import projectsData from "../services/projectsData.json";

// Resuelve rutas dinámicas en 'src/' para que no se rompan tras el empaquetado (Build) en GitHub Pages.
const getProjectImg = (name) => {
  return new URL(`../images/projects/${name}`, import.meta.url).href;
};

function GardenCode() {
  // Estados
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Posición donde se empieza a tocar la pantalla
  const [touchPosition, setTouchPosition] = useState(null);

  // Configuracón dinámica
  const isDesktop = window.innerWidth >= 768;
  const movementUnit = isDesktop ? 16 : 11;
  const maxIndex = projectsData.length - 1;

  // -----  EFECTOS -----

  // Funciones para el arrastre táctil
  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    if (touchPosition === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchPosition - currentTouch;

    // Movimiento a la izquierda, avanza
    if (diff > 50) {
      nextSlide();
      setTouchPosition(null); // Reseteo
    }

    // Movimiento a la derecha, retrocede
    if (diff < -50) {
      prevSlide();
      setTouchPosition(null);
    }
  };

  // Manejador de eventos
  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  // Navegación del Slider
  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section id="garden-code" className="garden">
      {/* Elementos decorativos petálos sakura */}
      <div
        className="sakura_branch sakura_branch--left"
        aria-hidden="true"
      ></div>
      <div
        className="sakura_branch sakura_branch--right"
        aria-hidden="true"
      ></div>
      <div className="falling_petals" aria-hidden="true">
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
      </div>

      <h2 className="garden__title">El Jardín</h2>
      <p className="garden__subtitle">Proyectos cultivados con código</p>

      {/* Contenedor que recorta lo que sobra */}
      <div
        className="garden__slider-container"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <ul
          className="garden__list"
          style={{
            /* Esta fórmula centra la flor seleccionada */
            "--translate-value": `-${currentIndex * movementUnit}rem`,
          }}
        >
          {projectsData.map((project, index) => {
            const isCenter = index === currentIndex;

            return (
              <li
                key={project.id}
                className={`garden__item ${isCenter ? "is-center" : ""}`}
              >
                <article
                  className="project__card"
                  onClick={() => openModal(project)}
                >
                  <GardenFlower isCenter={isCenter} />

                  <div className="project__card-content">
                    <h3 className="project__card-name">{project.title}</h3>
                    <span className="project__card-plus">+ info</span>
                  </div>
                </article>
                {/* Tallo que conecta las flores */}
                <div className="garden__thread"></div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Controles de navegación */}
      <div className="garden__nav-actions">
        <button
          onClick={prevSlide}
          className="garden__nav-btn"
          disabled={currentIndex === 0}
        >
          Prev
        </button>

        <button
          onClick={nextSlide}
          className="garden__nav-btn"
          disabled={currentIndex === maxIndex}
        >
          Next
        </button>
      </div>

      {/* -- MODAL -- */}
      {selectedProject && (
        <div className="modal__overlay" onClick={closeModal}>
          <div
            className="modal__content is-active"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal__close"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <div className="modal__body">
              <img
                src={getProjectImg(selectedProject.image)}
                alt={`Captura de ${selectedProject.title}`}
                className="modal__img"
              />
              <div className="modal__info">
                <h3 className="modal__title">{selectedProject.title}</h3>
                <p className="modal__description">
                  {selectedProject.description}
                </p>

                <div className="modal__tech">
                  {selectedProject.tech.map((skill, index) => (
                    <span key={index} className="tech__tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="modal__actions">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal__demo"
                    >
                      Ver Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal__repo"
                  >
                    Explorar código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default GardenCode;
