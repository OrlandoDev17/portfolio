//Componentes
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// Secciones
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <>
      <Header />
      <main className="relative top-19 max-w-10/12 mx-auto">
        <Hero />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
