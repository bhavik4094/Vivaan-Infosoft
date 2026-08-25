import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { ExternalLink } from 'lucide-react';
import ssbullionShot from '../assets/case-ssbullion.png';
import skpropertyShot from '../assets/case-skproperty.png';

const cases = [
  {
    href: 'https://ssbullion.codersh.com/',
    img: ssbullionShot,
    alt: 'Gold bars representing SS Bullion live trading platform',
    kicker: 'Live Product — Bullion Trading',
    title: 'SS Bullion',
    summary: "A real-time gold & silver trading desk for Ahmedabad's Manek Chowk market.",
    body: "SS Bullion needed to replace manual phone-based rate quoting with a live digital desk that traders could trust during volatile market hours. We built a rate engine that pulls and displays gold, silver and USD/INR pricing in real time, a booking flow for 6 gold product variants (including GST and BIS-certified options), and a full trade-history dashboard for tracking completed and pending orders.",
    challenge: 'Rates change by the minute — any lag between quoted and actual price erodes trust on a trading floor.',
    solution: 'A lightweight rate-polling architecture with sub-second refresh, paired with a booking desk that locks the quoted price at the moment of order.',
    metrics: [['Live', 'Rate updates'], ['6', 'Product variants'], ['9AM–11:30PM', 'Trading window'], ['0', 'Missed price windows since launch']],
  },
  {
    href: 'https://sk-properties-ebon.vercel.app/',
    img: skpropertyShot,
    alt: 'Modern villa representing SK Property real estate portal',
    kicker: 'Live Product — Real Estate',
    title: 'SK Property',
    summary: 'A premium listings portal for residential, commercial and land properties across Ahmedabad.',
    body: "SK Property came to us with strong word-of-mouth but a listings process still running through WhatsApp and spreadsheets. We designed and built a portal with smart search across residential, commercial and land categories, a lead-capture flow that routes straight to their team, and a testimonials section that puts their 300+ happy clients front and center.",
    challenge: 'Buyers were dropping off because listings had no consistent structure — no unified pricing, photos, or filtering.',
    solution: 'A standardized listing schema with search filters by location, price band and property type, plus featured placement for premium inventory.',
    metrics: [['300+', 'Happy clients'], ['5+ yrs', 'Market presence'], ['4', 'Property categories'], ['2x', 'Leads within Q1 of launch']],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Case Studies</div>
          <h1>Platforms we designed, built <span className="grad-text">and shipped</span>.</h1>
          <p>Two live products, end to end — from the first wireframe to the pixels a trader or homebuyer sees today.</p>
        </div>
      </header>

      <section>
        <div className="container">
          {cases.map((c, i) => (
            <Reveal className="cs-detail" key={c.title} style={{ borderTop: i === 0 ? 'none' : undefined }}>
              <div className="cs-detail-media">
                <img src={c.img} alt={c.alt} loading="lazy" />
              </div>
              <div className="cs-detail-body">
                <div className="case-kicker">● {c.kicker}</div>
                <h2>{c.title}</h2>
                <p className="cs-summary">{c.summary}</p>
                <p>{c.body}</p>
                <div className="cs-grid-2">
                  <div><h4>The Challenge</h4><p>{c.challenge}</p></div>
                  <div><h4>The Solution</h4><p>{c.solution}</p></div>
                </div>
                <div className="case-metrics">
                  {c.metrics.map(([val, label]) => (
                    <div key={label}><b>{val}</b><span>{label}</span></div>
                  ))}
                </div>
                <a href={c.href} target="_blank" rel="noopener" className="btn btn-ghost">
                  Visit Live Site <ExternalLink size={16} strokeWidth={2} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
