import { useEffect, useState } from 'react';

export default function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <strong className="footer-strong">© {year} Odi Matar</strong>
            <div className="footer-sub">Alle rechten voorbehouden.</div>
          </div>

          <div className="social" aria-label="Social media links">
            <a href="https://www.linkedin.com/in/odi-matar-540963392/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/3dai_ma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="mailto:Odaiboy87@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="E-mail">E-mail</a>
            <a href="tel:+31628788625" target="_blank" rel="noopener noreferrer" aria-label="Telefoon">Telefoon</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
