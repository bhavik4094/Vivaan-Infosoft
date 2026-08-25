import Reveal from './Reveal.jsx';
import ssbullionShot from '../assets/case-ssbullion.png';
import skpropertyShot from '../assets/case-skproperty.png';

const cases = [
  {
    href: 'https://ssbullion.codersh.com/',
    img: ssbullionShot,
    alt: 'Gold bars representing SS Bullion live trading platform',
    kicker: '● Live Product — Bullion Trading',
    title: 'SS Bullion',
    desc: "A real-time gold & silver trading desk for Ahmedabad's Manek Chowk market — live rates, futures, booking and trade history in one dashboard.",
    metrics: [['Live', 'Rate updates'], ['6', 'Product variants'], ['9AM–11:30PM', 'Trading window']],
    linkLabel: 'Visit ssbullion.codersh.com',
  },
  {
    href: 'https://sk-properties-ebon.vercel.app/',
    img: skpropertyShot,
    alt: 'Modern villa representing SK Property real estate portal',
    kicker: '● Live Product — Real Estate',
    title: 'SK Property',
    desc: 'A premium listings portal for residential, commercial and land properties across Ahmedabad — smart search, testimonials and lead capture built in.',
    metrics: [['300+', 'Happy clients'], ['5+ yrs', 'Market presence'], ['4', 'Property categories']],
    linkLabel: 'Visit sk-properties-ebon.vercel.app',
  },
];

export default function CaseStudies({ limit, showHead = true }) {
  const list = limit ? cases.slice(0, limit) : cases;
  return (
    <section id="work">
      <div className="container">
        {showHead && (
          <Reveal className="section-head">
            <div className="eyebrow">Case Studies</div>
            <h2>Platforms we designed &amp; shipped</h2>
            <p>Two live products built end-to-end by Vivaan Infosoft — from data architecture to the pixels on screen.</p>
          </Reveal>
        )}
        <div className="case-grid">
          {list.map((c) => (
            <Reveal as="a" href={c.href} target="_blank" rel="noopener" className="case-card" key={c.title}>
              <div className="case-media">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="case-body">
                <div className="case-kicker">{c.kicker}</div>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
                <div className="case-metrics">
                  {c.metrics.map(([val, label]) => (
                    <div key={label}><b>{val}</b><span>{label}</span></div>
                  ))}
                </div>
                <span className="case-link">{c.linkLabel} <span className="arrow">→</span></span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
