import Reveal from '../components/Reveal.jsx';
import CtaBand from '../components/CtaBand.jsx';
import { Target, Users, Rocket, ShieldCheck } from 'lucide-react';
import heroImg from '../assets/hero.png';

const values = [
  { icon: Target, title: 'Outcome First', desc: 'Every deliverable is judged by what it moves — reach, leads, or revenue — not how it looks in a portfolio.' },
  { icon: Users, title: 'Real Partnership', desc: "We work like an extension of your team, not a vendor that disappears after handoff." },
  { icon: Rocket, title: 'Ship Fast, Ship Right', desc: 'Modern tooling lets us move quickly without cutting corners on quality or accessibility.' },
  { icon: ShieldCheck, title: 'Built to Last', desc: 'Platforms like SS Bullion and SK Property run in production every day — we build for uptime, not demos.' },
];

const team = [
  { initials: 'HS', name: 'Harsh Solanki', role: 'Founder & Strategy Lead' },
  { initials: 'MP', name: 'Meera Parikh', role: 'Design Lead' },
  { initials: 'RD', name: 'Rohan Desai', role: 'Engineering Lead' },
  { initials: 'AK', name: 'Anjali Kapoor', role: 'Growth & Ads Lead' },
];

export default function About() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">About Vivaan Infosoft</div>
          <h1>A digital studio built by people who <span className="grad-text">ship real products</span>.</h1>
          <p>Vivaan Infosoft started in Ahmedabad with a simple idea: marketing and the platforms behind it shouldn't be handled by two different teams that don't talk to each other.</p>
        </div>
      </header>

      <section>
        <div className="container about-story-grid">
          <Reveal className="about-story">
            <div className="eyebrow">Our Story</div>
            <h2>From ad campaigns to live trading platforms</h2>
            <p>We started as a social media agency running campaigns for local brands. But we kept hitting the same wall: great marketing can't fix a broken website, and a broken booking flow kills every lead we send it. So we built the engineering side in-house.</p>
            <p>Today that same team runs the live rate engine behind SS Bullion's trading desk and the listings portal behind SK Property — while still managing the Instagram and ad accounts for over 120 brands. One studio, one accountable team, from strategy to shipped code.</p>
          </Reveal>
          <Reveal className="about-story-media">
            <img src={heroImg} alt="Vivaan Infosoft team at work" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">What We Believe</div>
            <h2>Principles that shape every project</h2>
          </Reveal>
          <div className="services-grid">
            {values.map((v) => (
              <Reveal className="service-card" key={v.title}>
                <div className="service-icon"><v.icon size={24} strokeWidth={1.75} /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <Reveal className="section-head">
            <div className="eyebrow">The Team</div>
            <h2>Small studio, senior people</h2>
            <p>No account managers relaying messages — you talk directly to the people building your platform.</p>
          </Reveal>
          <div className="team-grid">
            {team.map((t) => (
              <Reveal className="team-card" key={t.name}>
                <div className="avatar team-avatar">{t.initials}</div>
                <h4>{t.name}</h4>
                <span>{t.role}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
