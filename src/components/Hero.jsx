import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-orb" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy reveal in">
          <div className="eyebrow">Vivaan Infosoft · Digital Growth Studio</div>
          <h1>
            We build <span className="grad-text">marketing systems</span>, bullion platforms &amp; real estate portals that convert.
          </h1>
          <p className="lead">
            From social media growth engines to live gold-rate trading desks and property portals — we design, build and ship digital products that make brands money.
          </p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Book a Free Strategy Call</Link>
            <Link to="/case-studies" className="btn btn-ghost">View Case Studies</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
