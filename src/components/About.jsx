export default function About() {
  return (
    <section className="section about" id="over">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Over mij</h2>
            <p>Gemotiveerde software developer in opleiding, op zoek naar een stage vanaf september 2026.</p>
          </div>
        </div>

        <div className="about-grid">
          <div className="photo">
            <img src="/img/Odai.png" alt="Portretfoto van Odi Matar" loading="lazy" />
          </div>

          <div>
            <p>
              Ik ben Odi Matar, een gemotiveerde en leergierige software developer in opleiding
              (tweede leerjaar). Ik heb een sterke interesse in webontwikkeling en werk graag aan
              moderne, gebruiksvriendelijke websites en applicaties. Tijdens mijn studie heb ik
              ervaring opgedaan met verschillende programmeertalen, frameworks en technologieen.
            </p>
            <p>
              Naast mijn studie werk ik als hulpkracht bij Lidl, waar ik veel klantcontact heb en
              mijn communicatieve vaardigheden dagelijks ontwikkel. Ik ben flexibel, sociaal en werk
              graag samen met anderen. Op dit moment leer ik ook Flutter voor mobile app development.
              Voor september 2026 zoek ik een stage in software development om mijn kennis verder uit
              te bouwen en praktijkervaring op te doen.
            </p>

            <ul className="about-list">
              <li><span className="dot" aria-hidden="true"></span><span>Tweedejaars software developer in opleiding</span></li>
              <li><span className="dot" aria-hidden="true"></span><span>Ervaring met React, Laravel en API-integraties</span></li>
              <li><span className="dot" aria-hidden="true"></span><span>Sterk in samenwerken en duidelijke communicatie</span></li>
              <li><span className="dot" aria-hidden="true"></span><span>Momenteel bezig met Flutter (mobile apps)</span></li>
              <li><span className="dot" aria-hidden="true"></span><span>Beschikbaar voor stage vanaf september 2026</span></li>
            </ul>

            <div className="hero-cta hero-cta-about">
              <a
                className="btn primary"
                href="/Odi_Matar_Cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bekijk CV van Odi Matar"
              >
                Bekijk CV
              </a>
              <a
                className="btn"
                href="/Odi_Matar_Cv.pdf"
                download="Odi_Matar_Cv.pdf"
                aria-label="Download CV van Odi Matar"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
