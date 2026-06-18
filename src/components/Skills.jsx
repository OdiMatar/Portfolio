export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Ervaring</h2>
            <p>Een duidelijk overzicht van mijn frontend, backend en technische ervaring.</p>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li>HTML5 en semantische pagina-opbouw</li>
              <li>CSS3, responsive design en animaties</li>
              <li>JavaScript voor interactieve interfaces</li>
              <li>React componenten, state en API-data</li>
              <li>Vue basiservaring</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li>Laravel projecten met Blade views</li>
              <li>PHP basis en MVC-structuur</li>
              <li>SQL databases en datamodellen</li>
              <li>API-integraties en data ophalen</li>
              <li>Deployment ervaring op een VPS</li>
              <li>Docker basiservaring</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Tools en werkwijze</h3>
            <ul>
              <li>Git en GitHub</li>
              <li>Linux basis</li>
              <li>Oracle VirtualBox</li>
              <li>Agile samenwerken</li>
              <li>Cisco Networking basis</li>
              <li>Unity basiservaring</li>
              <li>Flutter voor mobile development</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Talen</h3>
            <ul>
              <li>Arabisch als moedertaal</li>
              <li>Nederlands vloeiend</li>
              <li>Engels redelijk</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
