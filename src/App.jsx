import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackendPage from './components/BackendPage';
import FrontendPage from './components/FrontendPage';
import PrivacyPage from './components/PrivacyPage';
import './style.css';

export default function App() {
  const getPageFromHash = () => {
    const hash = window.location.hash.replace('#', '');
    return ['frontend', 'backend', 'privacy'].includes(hash) ? hash : 'home';
  };

  const [page, setPage] = useState(getPageFromHash);

  useEffect(() => {
    const handleHashChange = () => {
      const nextPage = getPageFromHash();
      setPage(nextPage);

      if (nextPage !== 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

      const sectionId = window.location.hash.replace('#', '');
      window.setTimeout(() => {
        if (sectionId && document.getElementById(sectionId)) {
          document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const goToPage = (nextPage) => {
    window.location.hash = nextPage === 'home' ? '' : nextPage;
    setPage(nextPage);
  };

  const renderPage = () => {
    if (page === 'frontend') {
      return <FrontendPage onNavigate={goToPage} />;
    }

    if (page === 'backend') {
      return <BackendPage onNavigate={goToPage} />;
    }

    if (page === 'privacy') {
      return <PrivacyPage onNavigate={goToPage} />;
    }

    return (
      <>
        <Hero />
        <Portfolio />
        <About />
        <Skills />
        <Contact />
      </>
    );
  };

  return (
    <>
      <a className="skip-link" href="#main">Spring naar content</a>
      <Header activePage={page} onNavigate={goToPage} />
      <main id="main">
        {renderPage()}
      </main>
      <Footer onNavigate={goToPage} />
    </>
  );
}
