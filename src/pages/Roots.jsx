/* --- ROOTS: Sección biográfica, evolución profesional*/

function Roots() {
  return (
    <section id="roots" className="roots">
      {/* Contenedor principal con imagen en CSS */}
      <div className="roots__container">
        <h2 className="roots__main-title">Raíces</h2>
        <p className="roots__title">Mi transición hacia el desarrollo web.</p>
      </div>

      <div className="roots__story">
        <p className="roots__text">
          Mi trayectoria profesional ha pasado por entornos muy distintos, pero
          todos me han dejado una lección importante. Aprendí a moverme en
          ritmos altos y a ser resolutiva, adaptándome a las necesidades del
          momento.
        </p>

        <p className="roots__text">
          También que las cosas bien hechas llevan su tiempo; que para que algo
          crezca hace falta paciencia, una base sólida y mucha atención al
          detalle.
        </p>

        <p className="roots__text roots__text--highlight">
          Inspirada en la calma de un jardín Zen, me esfuerzo por escribir
          código limpio y ordenado, basándome en la disciplina y el aprendizaje,
          un camino que inicié en Adalab y que sigo recorriendo cada día.
        </p>
      </div>
    </section>
  );
}

export default Roots;
