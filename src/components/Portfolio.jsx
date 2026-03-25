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
    link: 'https://github.com/OdiMatar/PokemonReact'
  },
  {
    title: 'Jamin Webshop (Laravel)',
    description: 'Webshop gebouwd met Laravel Blade en live gehost op een VPS.',
    result: 'Stabiele live deployment met duidelijke productflow en betere contentstructuur.',
    images: [
      { src: '/img/Laravel.png', alt: 'Jamin webshop homepage' },
      { src: '/img/Laravel3.png', alt: 'Jamin webshop productoverzicht' },
      { src: '/img/Laravel1.png', alt: 'Jamin webshop detailpagina' },
      { src: '/img/Laravel2.png', alt: 'Jamin webshop checkout flow' }
    ],
    tag: 'Laravel + VPS',
    link: 'https://github.com/OdiMatar/Project2025-jamin'
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
    link: 'https://github.com/OdiMatar/OdaiShop'
  }
];

export default function Portfolio() {
  return (
    <section className="section" id="werk">
      <div className="container">
        <div className="section-header">
          <div>
            <h2>Werk</h2>
            <p>Een selectie projecten met screenshots en concrete resultaten.</p>
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
                <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Bekijk ${item.title}`}>
                  Bekijk project &rarr;
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
