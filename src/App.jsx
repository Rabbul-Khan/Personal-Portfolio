import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

import './App.scss';

function App() {
  return (
    <>
      <section id="Homepage">
        <header>
          <Navbar />
        </header>
        <Hero />
      </section>

      <section id="Introduction">Introduction</section>
      <section id="Portfolio">Portfolio</section>
      <section id="Contact">Contact</section>
    </>
  );
}
export default App;
