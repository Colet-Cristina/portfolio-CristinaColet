/**
 * Componente principal de la aplicación (Root Component).
 * Gestiona la estructura global (Layout), los estilos base y el sistema de rutas.
 */
import "./styles/App.scss";

// Importación de componentes de estructura
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Importación de componentes
import Hero from "./pages/Hero";
import Roots from "./pages/Roots";
import GardenCode from "./pages/GardenCode";
import Tools from "./pages/Tools";

/**
 * Función App
 * Define el contenedor principal y la lógica de renderizado.
 */
function App() {
  return (
    <div className="layout">
      {/* Componente de cabecera: Contiene el logo y el menú de navegación */}
      <Header />

      {/* Área principal de contenido */}
      <main className="main">
        {/* Sección de Inicio / Presentación */}
        <section id="hero" className="section-hero">
          <Hero />
        </section>

        {/* Sección Raíces: Información biográfica  */}
        <section id="roots" className="section-roots">
          <Roots />
        </section>

        {/* Sección Jardín de Código: Listado de proyectos dinámicos*/}
        <section id="garden-code" className="section-garden">
          <GardenCode />
        </section>

        {/* Sección Herramientas: Stack tecnológico */}
        <section id="tools" className="section-tools">
          <Tools />
        </section>
      </main>

      {/* Pie de página: Información de contacto y redes sociales */}
      <Footer />
    </div>
  );
}

export default App;
