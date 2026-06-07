/**
 * Componente principal de la aplicación (Root Component).
 * Gestiona la estructura global (Layout), los estilos base y el sistema de rutas.
 */
import "./styles/App.scss";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Hero from "./pages/Hero";
import Roots from "./pages/Roots";
import GardenCode from "./pages/GardenCode";
import Tools from "./pages/Tools";
import TopBtn from "./pages/TopBtn";

/**
 * Función App
 * Define el contenedor principal y la lógica de renderizado.
 */
function App() {
  return (
    <div className="layout">
      <Header />

      <main className="main">
        <section id="hero" className="section-hero">
          <Hero />
        </section>

        {/* Sección Jardín de Código: Listado de proyectos dinámicos*/}
        <section id="garden-code" className="section-garden">
          <GardenCode />
        </section>

        {/* Sección Raíces: Información biográfica  */}
        <section id="roots" className="section-roots">
          <Roots />
        </section>

        {/* Sección Herramientas: Stack tecnológico */}
        <section id="tools" className="section-tools">
          <Tools />
        </section>
      </main>
      <Footer />
      <TopBtn />
    </div>
  );
}

export default App;
