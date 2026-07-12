import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Process from "./components/Process/Process";
import Pricing from "./components/Pricing/Pricing";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";

function App() {
  return (
    <div className="App">

      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Process /> 
      <Pricing />
      <About />
      <Contact />
      <Footer />

      <WhatsappButton />

    </div>
  );
}

export default App;