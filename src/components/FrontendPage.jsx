const frontendSkills = [
  'HTML5 gebruiken voor duidelijke en toegankelijke pagina-opbouw',
  'CSS schrijven voor responsive layouts, animaties en nette visuele details',
  'JavaScript toepassen voor interactie, filtering en dynamische onderdelen',
  'React componenten bouwen met state, props en herbruikbare structuur',
  'Data ophalen uit API\'s en omzetten naar overzichtelijke interfaces',
  'Basiservaring met Vue en Tailwind CSS'
];

const frontendTraits = [
  'Ik let op hoe een pagina voelt voor de gebruiker, niet alleen of hij technisch werkt.',
  'Ik probeer mijn code overzichtelijk te houden zodat ik later sneller kan verbeteren.',
  'Ik leer graag nieuwe frontend-technieken en pas feedback direct toe in mijn werk.'
];

export default function FrontendPage({ onNavigate }) {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero">
          <span className="chip">Frontend ontwikkeling</span>
          <h1>Ik maak interfaces die duidelijk, responsive en levendig aanvoelen.</h1>
          <p>
            Frontend spreekt mij aan omdat je meteen ziet wat je bouwt. Ik vind het mooi om van
            een idee een werkende pagina te maken met structuur, interactie en een stijl die past
            bij de gebruiker.
          </p>
          <div className="hero-cta">
            <button className="btn primary" type="button" onClick={() => onNavigate('home')}>Bekijk projecten</button>
            <button className="btn" type="button" onClick={() => onNavigate('backend')}>Bekijk backend</button>
          </div>
        </div>

        <div className="page-grid">
          <article className="page-panel">
            <h2>Wat ik kan</h2>
            <ul className="feature-list">
              {frontendSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="page-panel accent-panel">
            <h2>Hoe ik werk</h2>
            <p>
              Ik begin graag met een heldere indeling: welke informatie is belangrijk, hoe navigeert
              iemand door de pagina en wat moet op mobiel goed blijven werken. Daarna bouw ik stap
              voor stap de componenten en verbeter ik de details.
            </p>
            <p>
              Mijn doel is om frontend niet alleen mooi te maken, maar ook logisch en onderhoudbaar.
            </p>
          </article>
        </div>

        <div className="story-strip">
          {frontendTraits.map((trait) => (
            <div className="story-item" key={trait}>{trait}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
