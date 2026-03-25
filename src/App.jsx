import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Spring naar content</a>
      <Header />
      <main id="main">
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
