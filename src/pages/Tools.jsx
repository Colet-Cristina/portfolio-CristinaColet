/* Componente Tools */
import { useState, useRef } from "react";
import skillsData from "../services/skillsData.json";
import certificatesData from "../services/certificatesData.json";

// Resuelve rutas dinámicas en 'src/' para que no se rompan tras el empaquetado (Build) en GitHub Pages.
const getSkillImg = (name) => {
  return new URL(`../images/skills/${name}`, import.meta.url).href;
};

const getCertImg = (name) => {
  return new URL(`../images/certificates/${name}`, import.meta.url).href;
};

function Tools() {
  // Estado para mostrar/ocultar los certificados
  const [showCertificates, setShowCertificates] = useState(false);

  const toggleCertificates = () => {
    setShowCertificates(!showCertificates);
  };

  const carouselRef = useRef(null);

  // Estado botones
  const scrollCarousel = (direction) => {
    const container = carouselRef.current;
    if (container) {
      // ¡Esto evita el error! Solo se mueve si el contenedor existe
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <section id="tools" className="tools">
      {/* --- ELEMENTOS DE FONDO --- */}
      <div className="tools__ceiling"></div>
      <div className="dojo__side-structure"></div>
      {/* --- CONTENIDO PRINCIPAL --- */}
      <div className="tools__content tools__content--katanas">
        <h2 className="tools__title">Herramientas</h2>

        {/* SECCIÓN FRONTEND */}
        <section className="tools__group">
          <div className="tools__kakemono">
            <h3 className="tools__subtitle">Frontend</h3>
          </div>
          <ul className="tools__list">
            {skillsData
              .filter((s) => s.category === "frontend")
              .map((skill, index) => (
                <li
                  key={skill.id}
                  className="tools__item"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="tools__frame">
                    <img
                      src={getSkillImg(skill.icon)}
                      alt={skill.name}
                      className="tools__icon"
                    />
                    <span className="tools__name">{skill.name}</span>
                  </div>
                </li>
              ))}
          </ul>
        </section>

        {/* SECCIÓN BACKEND */}
        <div className="tools__kakemono">
          <h3 className="tools__subtitle">Backend</h3>
        </div>
        <ul className="tools__list">
          {skillsData
            .filter((s) => s.category === "backend")
            .map((skill, index) => (
              <li
                key={skill.id}
                className="tools__item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="tools__frame">
                  <img
                    src={getSkillImg(skill.icon)}
                    alt={skill.name}
                    className="tools__icon"
                  />
                  <span className="tools__name">{skill.name}</span>
                </div>
              </li>
            ))}
        </ul>

        {/* SECCIÓN WORKFLOW */}
        <div className="tools__kakemono">
          <h3 className="tools__subtitle">Workflow</h3>
        </div>
        <ul className="tools__list">
          {skillsData
            .filter((s) => s.category === "tools")
            .map((skill, index) => (
              <li
                key={skill.id}
                className="tools__item"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="tools__frame">
                  <img
                    src={getSkillImg(skill.icon)}
                    alt={skill.name}
                    className="tools__icon"
                  />
                  <span className="tools__name">{skill.name}</span>
                </div>
              </li>
            ))}
        </ul>

        {/* SECCIÓN CERTIFICADOS */}
        <button
          className="tools__kakemono tools__kakemono--btn"
          onClick={toggleCertificates}
        >
          <h3 className="tools__subtitle">
            {showCertificates ? "Ocultar 🞪" : "Ver Certificados ❯"}
          </h3>
        </button>

        {/* MODAL */}
        {showCertificates &&
          certificatesData &&
          certificatesData.length > 0 && (
            // <div className="tools__modal-overlay">
            <div className="tools__modal-container">
              <ul className="tools__scroll-carousel" ref={carouselRef}>
                {certificatesData.map((cert) => {
                  const fullImgPath = getCertImg(cert.image);

                  return (
                    <li key={cert.id} className="tools__scroll-card">
                      <a
                        href={fullImgPath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="tools__scroll-img-wrapper"
                      >
                        <img
                          src={fullImgPath}
                          alt={`Certificado ${cert.title}`}
                          className="tools__scroll-img"
                        />
                      </a>
                      <div className="tools__scroll-info">
                        <h4 className="tools__scroll-title">{cert.title}</h4>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <button
                className="tools__scroll-btn tools__scroll-btn--left"
                onClick={() => scrollCarousel("left")}
              >
                ❮
              </button>
              <button
                className="tools__scroll-btn tools__scroll-btn--right"
                onClick={() => scrollCarousel("right")}
              >
                ❯
              </button>
            </div>
          )}
      </div>

      {/* --- PARED --- */}
      <div className="tools__wall"></div>
    </section>
  );
}

export default Tools;
