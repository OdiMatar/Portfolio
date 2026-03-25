import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="header" id="top">
      <div className="container">
        <div className="nav">
          <a className="brand" href="#top" aria-label="Ga naar boven">
            <img className="brand-logo" src="/img/OdaiLogo.png" alt="Logo Odi Matar" />
            <span>Odi Matar</span>
          </a>

          <nav className="nav-desktop" aria-label="Hoofdnavigatie">
            <ul>
              <li><a href="#werk">Werk</a></li>
              <li><a href="#over">Over mij</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <a className="btn" href="#contact">Samenwerken</a>
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
          <a href="#werk" onClick={closeMenu}>Werk</a>
          <a href="#over" onClick={closeMenu}>Over mij</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>
    </header>
  );
}
