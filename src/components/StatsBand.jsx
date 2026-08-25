import Reveal from './Reveal.jsx';

const stats = [
  ['120+', 'Brands Scaled'],
  ['2', 'Platforms Shipped'],
  ['4.2x', 'Avg. Reach Growth'],
  ['98%', 'Client Retention'],
];

export default function StatsBand() {
  return (
    <section className="stats-band">
      <div className="container">
        {stats.map(([val, label]) => (
          <Reveal key={label}>
            <b>{val}</b>
            <span>{label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
