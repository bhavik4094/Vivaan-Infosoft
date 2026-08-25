import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { TrendingUp, Coins, Building2, Code2 } from 'lucide-react';

const services = [
  {
    id: 'social', icon: TrendingUp, title: 'Social Media Marketing',
    desc: 'We build content systems, not one-off posts — a repeatable engine of reels, campaigns and community management tuned to what your audience actually shares.',
    points: ['Content calendars built around trends that fit your brand', 'Meta & Google Ads managed and optimized weekly', 'Community management and DM-to-lead pipelines', 'Monthly performance reporting, not vanity metrics'],
  },
  {
    id: 'bullion', icon: Coins, title: 'Bullion Trading Platforms',
    desc: 'Live rate engines, booking desks and trade history — the same infrastructure powering SS Bullion, built for real trading floors where every second of latency matters.',
    points: ['Real-time gold & silver rate feeds', 'Secure booking desk with order history', 'GST-aware pricing across product variants', 'Admin dashboard for daily rate control'],
  },
  {
    id: 'realestate', icon: Building2, title: 'Real Estate Portals',
    desc: 'Listing engines with smart search, lead capture and agent dashboards — built the way SK Property runs its residential, commercial and land inventory.',
    points: ['Smart filters by location, price, and category', 'Lead capture forms wired to your CRM', 'Agent dashboards for listing management', 'Testimonial & case-study sections that convert'],
  },
  {
    id: 'webdev', icon: Code2, title: 'Web & App Development',
    desc: 'Fast, responsive, pixel-accurate builds — from marketing sites to full trading and booking platforms, using the same modern stack trending sites run on.',
    points: ['React-based, component-driven builds', 'Mobile-first, fully responsive layouts', 'Form validation, accessibility, and clean UX', 'Deployed fast with ongoing support'],
  },
];

export default function ServicesPage() {
  return (
    <>
      <header className="page-hero">
        <div className="hero-orb" aria-hidden="true"></div>
        <div className="container">
          <div className="eyebrow">What We Do</div>
          <h1>Services built around <span className="grad-text">real platforms</span>, not templates.</h1>
          <p>Every service below ships from the same studio that built SS Bullion and SK Property — we don't outsource the hard parts.</p>
        </div>
      </header>

      <section>
        <div className="container">
          {services.map((s, i) => (
            <Reveal className="service-detail" id={s.id} key={s.id} style={{ borderTop: i === 0 ? 'none' : undefined }}>
              <div className="service-detail-icon"><s.icon size={30} strokeWidth={1.6} /></div>
              <div className="service-detail-body">
                <h2>{s.title}</h2>
                <p>{s.desc}</p>
                <ul className="service-points">
                  {s.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
