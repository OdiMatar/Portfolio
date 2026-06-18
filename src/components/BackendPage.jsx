const backendSkills = [
  'Laravel projecten opzetten met routes, controllers en Blade views',
  'PHP gebruiken voor backend-logica en data-afhandeling',
  'SQL inzetten voor tabellen, relaties en simpele queries',
  'API-data koppelen aan een frontend of projectpagina',
  'Basiservaring met Docker, Linux en werken op een VPS',
  'Meedenken over structuur, veiligheid en duidelijke foutafhandeling'
];

const backendFocus = [
  'Data netjes ophalen, opslaan en tonen',
  'Logica begrijpelijk houden in controllers en functies',
  'Samenhang maken tussen frontend, backend en database'
];

export default function BackendPage({ onNavigate }) {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="page-hero">
          <span className="chip">Backend ontwikkeling</span>
          <h1>Ik wil begrijpen wat er achter een applicatie gebeurt.</h1>
          <p>
            Backend vind ik interessant omdat daar de structuur, data en logica samenkomen. Ik ben
            nog volop aan het groeien, maar ik heb al ervaring met Laravel, PHP, SQL, API&apos;s en
            deployment. Ik wil hier sterker in worden door veel te bouwen en te blijven oefenen.
          </p>
          <div className="hero-cta">
            <button className="btn primary" type="button" onClick={() => onNavigate('home')}>Terug naar portfolio</button>
            <button className="btn" type="button" onClick={() => onNavigate('frontend')}>Bekijk frontend</button>
          </div>
        </div>

        <div className="page-grid">
          <article className="page-panel">
            <h2>Wat ik kan</h2>
            <ul className="feature-list">
              {backendSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="page-panel accent-panel">
            <h2>Over mij als backend developer</h2>
            <p>
              Ik ben leergierig en wil niet alleen code kopieren, maar begrijpen waarom iets werkt.
              Als iets fout gaat, probeer ik rustig te zoeken waar de oorzaak zit en wat ik ervan kan
              leren voor het volgende project.
            </p>
            <p>
              Ik werk graag met duidelijke stappen: eerst de data en routes, daarna de logica, en
              daarna pas de afwerking richting de gebruiker.
            </p>
          </article>
        </div>

        <div className="story-strip">
          {backendFocus.map((focus) => (
            <div className="story-item" key={focus}>{focus}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
