export default function Footer({ onNavigate }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div>
            <strong className="footer-strong">&copy; {year} Odi Matar</strong>
            <div className="footer-sub">Alle rechten voorbehouden.</div>
            <div className="footer-sub">Privacy: deze portfolio gebruikt geen cookies, tracking of contactformulieropslag.</div>
          </div>

          <div className="social" aria-label="Social media links">
            <a href="https://www.linkedin.com/in/odi-matar-540963392/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a href="https://www.instagram.com/3dai_ma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a href="mailto:Odaiboy87@gmail.com?subject=Contact%20via%20portfolio" aria-label="E-mail">E-mail</a>
            <a href="tel:+31628788625" aria-label="Telefoon">Telefoon</a>
            <a href="#privacy" onClick={() => onNavigate('privacy')} aria-label="Privacy pagina">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
