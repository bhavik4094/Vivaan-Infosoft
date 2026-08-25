import Reveal from './Reveal.jsx';

const steps = [
  ['01 / DISCOVER', 'Audit & Strategy', 'We map your audience, competitors and current numbers before touching a single design file.'],
  ['02 / DESIGN', 'Design & Prototype', 'Pixel-accurate mockups and content plans reviewed with you before build starts.'],
  ['03 / BUILD', 'Build & Launch', 'Development, campaign setup and QA — shipped fast without cutting corners.'],
  ['04 / GROW', 'Optimize & Scale', 'Weekly reporting and iteration so results compound month over month.'],
];

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">How We Work</div>
          <h2>Four steps from idea to launch</h2>
          <p>Same process whether we're running your Instagram or building your trading platform.</p>
        </Reveal>
        <div className="process">
          {steps.map(([num, title, desc]) => (
            <Reveal className="process-step" key={num}>
              <div className="process-num">{num}</div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
