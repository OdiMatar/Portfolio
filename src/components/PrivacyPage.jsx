export default function PrivacyPage({ onNavigate }) {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero privacy-hero">
          <span className="chip">Privacy</span>
          <h1>Privacyverklaring voor deze portfolio.</h1>
          <p>
            Deze website is bedoeld om mijn werk, ervaring en contactgegevens te tonen. Ik probeer
            zo min mogelijk gegevens te verwerken en gebruik geen contactformulier dat berichten
            opslaat op deze website.
          </p>
        </div>

        <div className="privacy-layout">
          <article className="page-panel">
            <h2>Welke gegevens staan op de site?</h2>
            <p>
              Op deze portfolio staan mijn naam, projecten, vaardigheden, CV-link en contactgegevens.
              Bezoekers hoeven geen account aan te maken en hoeven geen persoonlijke gegevens achter
              te laten op de website.
            </p>
          </article>

          <article className="page-panel">
            <h2>Contact via e-mail of telefoon</h2>
            <p>
              Wanneer je zelf contact opneemt via e-mail, telefoon, LinkedIn of Instagram, dan deel
              je gegevens rechtstreeks via die dienst. Deze portfolio slaat die berichten niet zelf op.
            </p>
          </article>

          <article className="page-panel">
            <h2>Cookies en tracking</h2>
            <p>
              Deze portfolio gebruikt geen eigen cookies, trackingpixels of analytische scripts.
              Externe links zoals LinkedIn, Instagram en GitHub hebben hun eigen privacybeleid.
            </p>
          </article>

          <article className="page-panel">
            <h2>Vragen</h2>
            <p>
              Voor vragen over deze privacyverklaring kun je contact opnemen via
              <a href="mailto:Odaiboy87@gmail.com?subject=Privacy%20vraag%20portfolio"> Odaiboy87@gmail.com</a>.
            </p>
          </article>
        </div>

        <div className="hero-cta page-bottom-actions">
          <button className="btn primary" type="button" onClick={() => onNavigate('home')}>Terug naar portfolio</button>
          <a className="btn" href="mailto:Odaiboy87@gmail.com?subject=Privacy%20vraag%20portfolio">Mail over privacy</a>
        </div>
      </div>
    </section>
  );
}
