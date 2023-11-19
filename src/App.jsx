import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

import './App.scss';
import Parallax from './Components/Parallax/Parallax';

function App() {
  return (
    <>
      <section id="Homepage">
        <header>
          <Navbar />
        </header>
        <Hero />
      </section>

      <section id="Welcome">
        <Parallax type="welcome" />
      </section>

      <section id="Introduction">Introduction</section>

      <section id="Projects">
        <Parallax type="projects" />
      </section>

      <section id="Contact">Contact</section>
    </>
  );
}
export default App;
