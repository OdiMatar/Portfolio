import { useState } from 'react';

export default function Header({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  const goTo = (page) => {
    onNavigate(page);
    closeMenu();
  };

  const goToHomeSection = (event, sectionId) => {
    event.preventDefault();
    onNavigate('home');
    closeMenu();

    window.setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <header className="header" id="top">
      <div className="container">
        <div className="nav">
          <a className="brand" href="#" onClick={(event) => { event.preventDefault(); goTo('home'); }} aria-label="Ga naar home">
            <span className="brand-logo" aria-hidden="true">OM</span>
            <span>Odi Matar</span>
          </a>

          <nav className="nav-desktop" aria-label="Hoofdnavigatie">
            <ul>
              <li><a href="#" className={activePage === 'home' ? 'active' : ''} onClick={(event) => { event.preventDefault(); goTo('home'); }}>Home</a></li>
              <li><a href="#frontend" className={activePage === 'frontend' ? 'active' : ''} onClick={(event) => { event.preventDefault(); goTo('frontend'); }}>Frontend</a></li>
              <li><a href="#backend" className={activePage === 'backend' ? 'active' : ''} onClick={(event) => { event.preventDefault(); goTo('backend'); }}>Backend</a></li>
              <li><a href="#privacy" className={activePage === 'privacy' ? 'active' : ''} onClick={(event) => { event.preventDefault(); goTo('privacy'); }}>Privacy</a></li>
              <li><a href="#contact" onClick={(event) => goToHomeSection(event, 'contact')}>Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a className="btn" href="#contact" onClick={(event) => goToHomeSection(event, 'contact')}>Samenwerken</a>
            <button
              className="btn menu-toggle"
              id="menuToggle"
              type="button"
              aria-controls="mobileNav"
              aria-expanded={mobileMenuOpen}
              onClick={toggleMenu}
            >
              Menu
            </button>
          </div>
        </div>

        <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`} id="mobileNav" aria-label="Mobiele navigatie">
          <a href="#" onClick={(event) => { event.preventDefault(); goTo('home'); }}>Home</a>
          <a href="#frontend" onClick={(event) => { event.preventDefault(); goTo('frontend'); }}>Frontend</a>
          <a href="#backend" onClick={(event) => { event.preventDefault(); goTo('backend'); }}>Backend</a>
          <a href="#privacy" onClick={(event) => { event.preventDefault(); goTo('privacy'); }}>Privacy</a>
          <a href="#contact" onClick={(event) => goToHomeSection(event, 'contact')}>Contact</a>
        </div>
      </div>
    </header>
  );
}
