import Reveal from './Reveal.jsx';
import { TrendingUp, Coins, Building2, Target, Palette, Code2 } from 'lucide-react';

const services = [
  { icon: TrendingUp, title: 'Social Media Marketing', desc: "Content systems, paid campaigns and community growth built around what your audience actually shares. Instagram, YouTube, LinkedIn, Meta Ads.", tag: 'STRATEGY → CONTENT → SCALE' },
  { icon: Coins, title: 'Bullion Trading Platforms', desc: 'Live gold & silver rate engines, booking desks, order history and secure checkout — built for real trading floors, not demos.', tag: 'LIVE RATES → BOOKING → TRADE' },
  { icon: Building2, title: 'Real Estate Portals', desc: 'Listing engines with smart search, lead capture and agent dashboards for residential, commercial and land inventory.', tag: 'LISTINGS → LEADS → CLOSE' },
  { icon: Target, title: 'Performance Ads', desc: 'Full-funnel paid media across Meta and Google, tuned weekly against real conversion data, not vanity metrics.', tag: 'TARGET → TEST → OPTIMIZE' },
  { icon: Palette, title: 'Brand & Design', desc: 'Logo systems, visual identity and UI kits that make a brand recognizable in a three-second scroll.', tag: 'IDENTITY → SYSTEM → ASSETS' },
  { icon: Code2, title: 'Web & App Development', desc: 'Fast, responsive, pixel-accurate builds — from marketing sites to full trading and booking platforms.', tag: 'DESIGN → BUILD → SHIP' },
];

export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">What We Do</div>
          <h2>One studio. Three engines of growth.</h2>
          <p>We don't just run ads — we build the platforms and the marketing systems behind them, end to end.</p>
        </Reveal>
        <div className="services-grid">
          {services.map((s) => (
            <Reveal className="service-card" key={s.title}>
              <div className="service-icon"><s.icon size={24} strokeWidth={1.75} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span className="service-tag">{s.tag}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
