/* --- GARDEN-CODE: Lista de proyectos dinámicos y un modal con detalles. */

import { useState, useEffect } from "react";
import GardenFlower from "../components/GardenFlower";
import projectsData from "../services/projectsData.json";

function GardenCode() {
  // Estados
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Configuracón dinámica
  const isDesktop = window.innerWidth >= 768;
  const movementUnit = isDesktop ? 16 : 11;
  const maxIndex = projectsData.length - 1;

  // -----  EFECTOS -----

  // Bloquea el scroll de la página principal cuando hay un modal activo
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

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
      <div className="sakura_branch sakura_branch-left"></div>
      <div className="sakura_branch sakura_branch-right"></div>
      <div className="falling_petals">
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
      </div>

      <h2 className="garden__title">El Jardín</h2>
      <p className="garden__subtitle">Proyectos cultivados con código</p>

      {/* Contenedor que recorta lo que sobra */}
      <div className="garden__slider-container">
        <ul
          className="garden__list"
          style={{
            /* Esta fórmula centra la flor seleccionada */
            transform: `translateX(-${currentIndex * movementUnit}rem)`,
            transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
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
                  className="project-card"
                  onClick={() => openModal(project)}
                >
                  <GardenFlower isCenter={isCenter} />

                  <div className="project-card__content">
                    <h3 className="project-card__name">{project.title}</h3>
                    <span className="project-card__plus">info</span>
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
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="modal-content is-active"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close"
              onClick={closeModal}
              aria-label="Cerrar modal"
            >
              &times;
            </button>

            <div className="modal-body">
              <img
                src={selectedProject.image}
                alt={`Captura de ${selectedProject.title}`}
                className="modal-img"
              />
              <div className="modal-info">
                <h3 className="modal-title">{selectedProject.title}</h3>
                <p className="modal-description">
                  {selectedProject.description}
                </p>

                <div className="modal-tech">
                  {selectedProject.tech.map((skill, index) => (
                    <span key={index} className="tech-tag">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="modal-actions">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="modal-demo"
                    >
                      Ver Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="modal-repo"
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
