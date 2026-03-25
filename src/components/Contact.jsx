export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Contact</h2>
            <p>Ik sta open voor kansen en samenwerkingen. Laten we in contact komen!</p>
          </div>
        </div>

        <div className="contact-card">
          <p>Wil je samenwerken of heb je een vraag? Stuur me gerust een bericht.</p>

          <div className="contact-actions">
            <a className="btn primary" href="mailto:Odaiboy87@gmail.com" target="_blank" rel="noopener noreferrer">E-mail</a>
            <a className="btn" href="https://www.linkedin.com/in/odi-matar-540963392/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a className="btn" href="https://www.instagram.com/3dai_ma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a className="btn" href="tel:+31628788625" target="_blank" rel="noopener noreferrer">Telefoon</a>
          </div>

          <p className="contact-tip">Contacteer mij ook voor freelance, stages of full-time posities.</p>
        </div>
      </div>
    </section>
  );
}
