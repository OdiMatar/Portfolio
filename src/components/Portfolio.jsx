import Carousel from './Carousel';

const portfolioItems = [
  {
    title: 'Pokemon API Explorer',
    description: 'React webapp die data uit de PokeAPI ophaalt, filtert en overzichtelijk toont.',
    result: 'Snelle laadtijd, favorietenfunctie en een volledig responsive layout.',
    images: [
      { src: '/img/PokemonHome.png', alt: 'Pokemon API Explorer homepagina' },
      { src: '/img/PokemonTeams.png', alt: 'Pokemon API Explorer teamscherm' },
      { src: '/img/PokemonFavo.png', alt: 'Pokemon API Explorer favorieten' },
      { src: '/img/PokemonRespons.png', alt: 'Pokemon API Explorer responsive weergave' }
    ],
    tag: 'React + API',
    link: 'https://pokemon-react-lyart-ten.vercel.app/'
  },
  {
    title: 'Autorijschool Odai',
    description: 'Dit project bestaat uit twee versies: een volledige Laravel-versie en een React-versie. De React-versie staat tijdelijk online, zodat het project direct bekeken kan worden.',
    result: 'Een overzichtelijke beheeromgeving voor instructeurs, voertuigen en dagelijkse rijschoolplanning.',
    images: [
      { src: '/img/AutorijschoolDashboard.png', alt: 'Dashboard van Autorijschool Odai' },
      { src: '/img/AutorijschoolInstructeurs.png', alt: 'Overzicht van instructeurs in dienst' },
      { src: '/img/AutorijschoolVoertuigen.png', alt: 'Overzicht van alle lesvoertuigen' }
    ],
    tag: 'Laravel + React',
    link: 'https://auto-rijschool.vercel.app/'
  },
  {
    title: 'OdaiShop',
    description: 'React webshop met Fetch API, productoverzicht en checkout-flow.',
    result: 'Consistente UX op mobiel en desktop met snelle en overzichtelijke navigatie.',
    images: [
      { src: '/img/OdaiHome.png', alt: 'OdaiShop homepagina' },
      { src: '/img/OdaiProduct.png', alt: 'OdaiShop productpagina' },
      { src: '/img/Odaicheckout.png', alt: 'OdaiShop checkout pagina' },
      { src: '/img/OdaiShop.png', alt: 'OdaiShop overzicht' },
      { src: '/img/OdaiRespons.png', alt: 'OdaiShop responsive weergave' }
    ],
    tag: 'React + Fetch API',
    link: 'https://odai-shop.vercel.app/'
  }
];

export default function Portfolio() {
  return (
    <section className="section" id="werk">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Werk</h2>
            <p>Een selectie van mijn projecten met live demo's, screenshots en behaalde resultaten.</p>
          </div>
        </div>

        <div className="grid" role="list">
          {portfolioItems.map((item, index) => (
            <article key={index} className="card" role="listitem">
              <div className="card-media">
                <Carousel images={item.images} />
              </div>

              <div className="card-body">
                <h3>{item.title}</h3>
                <p className="card-description">{item.description}</p>
                <p className="card-result">
                  <span>Resultaat:</span> {item.result}
                </p>
              </div>
              <div className="card-footer">
                <span className="chip">{item.tag}</span>
                {item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Bekijk ${item.title}`}>
                    Bekijk project &rarr;
                  </a>
                ) : (
                  <span className="soon">Project volgt</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
