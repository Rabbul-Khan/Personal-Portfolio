import './App.scss';

import { useRef } from 'react';

import Contact from './Components/Contact/Contact';
import Cursor from './Components/Cursor/Cursor';
import Hero from './Components/Hero/Hero';
import Introduction from './Components/Introduction/Introduction';
import Navbar from './Components/Navbar/Navbar';
import Parallax from './Components/Parallax/Parallax';
import Projects from './Components/Projects/Projects';

function App() {
  const projectsRef = useRef(null);
  const handleClickProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const contactRef = useRef(null);
  const handleClickContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const welcomeRef = useRef(null);
  const handleClickScrollDown = () => {
    welcomeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Cursor />

      <section id="Homepage">
        <header>
          <Navbar />
        </header>
        <Hero
          handleClickProjects={handleClickProjects}
          handleClickContact={handleClickContact}
          handleClickScrollDown={handleClickScrollDown}
        />
      </section>

      <main>
        <section id="Welcome" ref={welcomeRef}>
          <Parallax type="welcome" />
        </section>

        <section id="Introduction">
          <Introduction />
        </section>

        <section id="Projects" ref={projectsRef}>
          <Parallax type="projects" />
        </section>

        <Projects />

        <section id="Contact" ref={contactRef}>
          <Contact />
        </section>
      </main>
    </>
  );
}
export default App;
