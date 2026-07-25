
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Results from "./components/Results/Results";
import WhyChoose from "./components/WhyChoose/WhyChoose";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <Programs />
      <Results />
      <Contact />
      <Footer />
    </>
  );
}

export default App;