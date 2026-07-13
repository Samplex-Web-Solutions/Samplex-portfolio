import { Toaster } from "react-hot-toast";
import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import NavBar from "./sections/NavBar";
import Tools from "./sections/Tools";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main>
      {/* Toast Container */}
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1f2937",
            color: "#fff",
            borderRadius: "10px",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#22c55e",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

      <div>
        <NavBar />
        <Hero />
        <AboutSection />
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