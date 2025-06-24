import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./sections/About";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Stack from "./sections/Stack";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
      </main>
      <Footer />
    </>
  );
}

export default App;
