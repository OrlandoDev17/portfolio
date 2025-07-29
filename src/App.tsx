//Componentes
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
// Secciones
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Stack from "./components/sections/Stack";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="relative top-30 md:top-28 2xl:top-19 2xl:max-w-10/12 mx-auto">
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
        <hr className="my-4 text-gray-400 dark:text-gray-600" />
      </main>
      <Footer />
    </>
  );
}

export default App;
