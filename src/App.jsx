import TextPressure from './components/TextPressure.jsx';
import heroImage from './assets/hero-motion-stage.png';

export default function App() {
  return (
    <main className="portfolio-page">
      <section className="hero" aria-label="Freem personal portfolio hero">
        <img className="hero__background" src={heroImage} alt="" aria-hidden="true" />
        <div className="hero__shade" />
        <nav className="hero__nav" aria-label="Portfolio">
          <span className="hero__brand">Freem</span>
          <span className="hero__role">Douyin Revenue Motion Designer</span>
        </nav>
        <div className="hero__content">
          <p className="hero__eyebrow">Campaign Motion / Revenue Growth / Interactive Visuals</p>
          <div className="hero__title">
            <TextPressure
              text="WELCOME"
              flex={true}
              alpha={false}
              stroke={false}
              width={true}
              weight={true}
              italic={false}
              textColor="#ffffff"
              strokeColor="#F97316"
              minFontSize={36}
              className="hero__pressure"
            />
          </div>
          <p className="hero__copy">
            I design high-impact activity motion systems for revenue moments, turning campaign mechanics into
            memorable, responsive visual experiences.
          </p>
        </div>
        <div className="hero__footer" aria-hidden="true">
          <span>2026 Portfolio</span>
          <span>Move your cursor across WELCOME</span>
        </div>
      </section>
    </main>
  );
}
