export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="chip">Hallo, ik ben <strong className="chip-strong">Odi Matar</strong></span>
            <h1>Ik bouw websites met energie, structuur en gevoel voor detail.</h1>
            <p>
              Ik ben een leergierige software developer in opleiding. Ik werk graag aan frontend,
              backend en mobile projecten, en ik wil mezelf blijven ontwikkelen door echte producten
              te bouwen die snel, duidelijk en prettig aanvoelen.
            </p>

            <div className="hero-cta">
              <a className="btn primary" href="#werk">Bekijk mijn werk</a>
              <a className="btn" href="#contact">Neem contact op</a>
            </div>
          </div>

          <aside className="hero-showcase" aria-label="Wat ik bouw">
            <div className="showcase-window">
              <div className="window-bar" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="code-lines" aria-hidden="true">
                <span className="line long"></span>
                <span className="line medium"></span>
                <span className="line short"></span>
                <span className="line full"></span>
              </div>
              <div className="showcase-preview">
                <span>React</span>
                <span>Laravel</span>
                <span>API</span>
              </div>
            </div>

            <div className="showcase-card frontend-card">
              <strong>Frontend</strong>
              <span>Interfaces die snel, duidelijk en responsive zijn.</span>
            </div>

            <div className="showcase-card backend-card">
              <strong>Backend</strong>
              <span>Data, routes en logica met Laravel, PHP en SQL.</span>
            </div>

            <div className="showcase-badge">
              Stage Gezocht vanaf 31 agaustus 2026
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
