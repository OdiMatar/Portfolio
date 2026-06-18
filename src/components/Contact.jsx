export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Contact</h2>
            <p>Ik sta open voor stagekansen, samenwerkingen en leerzame projecten.</p>
          </div>
        </div>

        <div className="contact-card">
          <p>Wil je samenwerken of heb je een vraag? Stuur me gerust een bericht.</p>

          <div className="contact-actions">
            <a className="btn primary" href="mailto:Odaiboy87@gmail.com?subject=Contact%20via%20portfolio">E-mail</a>
            <a className="btn" href="https://www.linkedin.com/in/odi-matar-540963392/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a className="btn" href="https://www.instagram.com/3dai_ma/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
            <a className="btn" href="tel:+31628788625">Telefoon</a>
          </div>

          <p className="contact-tip">E-mail: Odaiboy87@gmail.com | Telefoon: +31 6 28788625</p>
        </div>
      </div>
    </section>
  );
}
