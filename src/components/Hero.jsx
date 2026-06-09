export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div>
            <span className="chip">👋 Hallo, ik ben <strong className="chip-strong">Odi Matar</strong></span>
            <h1>Ik ontwerp en bouw moderne digitale ervaringen.</h1>
            <p>
              Ik ben een gepassioneerde webontwikkelaar met ervaring in het creëren van responsieve
              en gebruiksvriendelijke websites en applicaties. Mijn focus ligt op hoogwaardige code
              en een sterke gebruikerservaring.
            </p>

            <div className="hero-cta">
              <a className="btn primary" href="#werk">Bekijk mijn werk</a>
              <a className="btn" href="#contact">Neem contact op</a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Highlights">
            <div className="stat">
              <strong>Backend</strong>
              <span>Laravel • PHP • SQL</span>
            </div>
            <div className="stat">
              <strong>Front-end</strong>
              <span>HTML • CSS • JS • React • Vue</span>
            </div>
             <div className="stat">
              <strong>Mobile</strong>
              <span>Flutter • React Native</span>
            </div>
            <div className="stat">
              <strong>Beschikbaar</strong>
              <span>Freelance / full-time / stages</span>
            </div>

          </aside>
        </div>
      </div>
    </section>
  );
}
