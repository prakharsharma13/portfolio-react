import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Qualifications from "./components/qualifications/Qualifications";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Skills from "./components/skills/Skills";
import Testimonials from "./components/testimonials/Testimonials";
import Works from "./components/works/Works";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About/>
        <Skills/>
        <Services/>
        <Works/>
        <Qualifications/>
        <Testimonials/>
        <Contact/>
      </main>

      <Footer/>
      <ScrollUp/>
    </>
  );
}

export default App;
