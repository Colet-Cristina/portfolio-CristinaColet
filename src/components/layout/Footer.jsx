/* --- FOOTER: Incluye lógica para mantener el año actualizado automáticamente. --- */

function Footer() {
  // Lógica para obtener el año actual
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Navegación secundaria: Enlaces directos a perfiles profesionales */}
        <div className="footer__social">
          <a href="mailto:coletcristina@gmail.com" className="footer__link">
            Email
          </a>

          <a
            href="https://github.com/colet-cristina"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/cristina-colet-corredera/"
            target="_blank"
            rel="noreferrer"
            className="footer__link"
          >
            LinkedIn
          </a>
        </div>

        {/* Información legal y de autoría: Copyright dinámico */}
        <p className="footer__copy">
          &copy; {currentYear} - Desarrollado por Cristina Colet
        </p>
      </div>
    </footer>
  );
}

export default Footer;
