/* Componente Tools */
import skillsData from "../services/skillsData.json";

function Tools() {
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
                      src={skill.icon}
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
                    src={skill.icon}
                    alt={skill.name}
                    className="tools__icon"
                  />
                  <span className="tools__name">{skill.name}</span>
                </div>
              </li>
            ))}
        </ul>

        {/* SECCIÓN HERRAMIENTAS */}
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
                    src={skill.icon}
                    alt={skill.name}
                    className="tools__icon"
                  />
                  <span className="tools__name">{skill.name}</span>
                </div>
              </li>
            ))}
        </ul>
      </div>

      {/* --- SUELO --- */}
      <div className="tools__wall"></div>
      <div className="tools__floor"></div>
    </section>
  );
}

export default Tools;
