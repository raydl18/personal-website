import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import SelectedWork from './sections/SelectedWork';
import AcademicRecord from './sections/AcademicRecord';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <AcademicRecord />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
