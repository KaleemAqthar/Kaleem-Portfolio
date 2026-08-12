import {
  Routes,
  Route,
} from "react-router-dom";

import AppleDock from "./components/AppleDock";
import PortfolioBackground from "./components/ui/background-snippets";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience"

import ContactForm from "./pages/ContactForm";
import BookCall from "./pages/BookCall";



function Portfolio() {
  return (
    <>
      <PortfolioBackground />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience/>
        <Projects />
        <Contact />
      </main>

      <AppleDock />
    </>
  );
}


function App() {
  return (
    <Routes>

      {/* HOME / PORTFOLIO */}

      <Route
        path="/"
        element={<Portfolio />}
      />


      {/* CONTACT FORM PAGE */}

      <Route
        path="/contact-me"
        element={
          <>
            <PortfolioBackground />
            <ContactForm />
          </>
        }
      />


      {/* BOOK CALL PAGE */}

      <Route
        path="/book-call"
        element={
          <>
            <PortfolioBackground />
            <BookCall />
          </>
        }
      />

    </Routes>
  );
}

export default App;