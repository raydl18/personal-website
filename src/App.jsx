import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import SelectedWork from './sections/SelectedWork';
import OtherProjectsExperience from './sections/OtherProjectsExperience';
import Skills from './sections/Skills';
import AcademicRecord from './sections/AcademicRecord';
import Contact from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <OtherProjectsExperience />
        <Skills />
        <AcademicRecord />
        <Contact />
      </main>
    </>
  );
}
