import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container">
        <Reveal className="cta-band-inner">
          <div>
            <div className="eyebrow">Ready When You Are</div>
            <h2>Let's turn your next idea into a live platform.</h2>
          </div>
          <div className="cta-band-actions">
            <Link to="/contact" className="btn btn-primary">Start a Project</Link>
            <Link to="/case-studies" className="btn btn-ghost">See Our Work</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
