/* --- FOOTER: Incluye lógica para mantener el año actualizado automáticamente. --- */

function Footer() {
  // Lógica para obtener el año actual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__tatami">
        <div className="footer__container">
          <div className="footer__social">
            <a href="mailto:coletcristina@gmail.com" className="footer__link">
              Email
            </a>

            <a
              href="https://github.com/colet-cristina"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Ir al perfil de GitHub (se abre en una nueva pestaña)"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/cristina-colet-corredera/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Ir al perfil de LinkedIn (se abre en una nueva pestaña)"
            >
              LinkedIn
            </a>
          </div>

          <p className="footer__copy">
            &copy; {currentYear} - Desarrollado por Cristina Colet
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
