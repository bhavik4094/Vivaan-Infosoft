import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

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

        <div className="hero-visual reveal in">
          <div className="hero-ring"></div>
          <div className="hero-card card-1">
            <div className="row"><span>GOLD 999</span><span className="up"><ArrowUp size={13} strokeWidth={2.5} /> 0.8%</span></div>
            <div className="val">₹1,68,541</div>
          </div>
          <div className="hero-card card-2">
            <div className="row"><span>Prahlad Nagar</span><span className="up">4 BHK</span></div>
            <div className="val">₹1.25 Cr</div>
          </div>
          <div className="hero-card card-3">
            <div className="row"><span>Reach</span><span className="up"><ArrowUp size={13} strokeWidth={2.5} /> 312%</span></div>
            <div className="val">2.4M</div>
          </div>
        </div>
      </div>
    </header>
  );
}
