import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import NavBar from "./sections/NavBar";
import Tools from "./sections/Tools";
import Projects from './sections/Projects';
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";


const App = () => {
  return (
    <main>
      <div>
        <NavBar />
        <Hero />
        <AboutSection/>
        <Tools />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
