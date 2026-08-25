import { useEffect, useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  { initials: 'RM', quote: 'Vivaan Infosoft rebuilt our entire social presence. Our Instagram reach went up 3x in two months, and it actually turned into real bookings.', name: 'Ritika Mehta', role: 'Marketing Head, Studio Luxe' },
  { initials: 'SS', quote: "They built our live gold rate system exactly the way we trade — fast, accurate, zero downtime during market hours. Best tech partner we've had.", name: 'Sanjay Shah', role: 'Director, SS Bullion' },
  { initials: 'KP', quote: 'Our property portal finally looks as premium as the listings we sell. Leads doubled within the first quarter after launch.', name: 'Kunal Patel', role: 'Founder, SK Property' },
  { initials: 'AV', quote: 'Clear communication, fast turnaround, and a design sense that actually understands our industry. Highly recommend the team.', name: 'Aarav Vora', role: 'CEO, Northgate Realty' },
  { initials: 'NJ', quote: 'From strategy to execution, everything was on point. Our ad spend efficiency improved by 40% in the first campaign cycle.', name: 'Neha Joshi', role: 'Growth Lead, Fablane' },
];

function getVisibleCount() {
  if (window.innerWidth <= 620) return 1;
  if (window.innerWidth <= 980) return 2;
  return 3;
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const autoRef = useRef(null);

  const maxIndex = Math.max(0, testimonials.length - visible);

  const measure = () => {
    setVisible(getVisibleCount());
    if (cardRef.current) setCardWidth(cardRef.current.getBoundingClientRect().width);
  };

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));

  useEffect(() => {
    autoRef.current = setInterval(next, 5000);
    return () => clearInterval(autoRef.current);
  }, [maxIndex]);

  const pause = () => clearInterval(autoRef.current);
  const resume = () => { autoRef.current = setInterval(next, 5000); };

  const gap = 22;
  const offset = index * (cardWidth + gap);

  return (
    <section id="testimonials">
      <div className="container">
        <Reveal className="section-head center">
          <div className="eyebrow">Client Testimonials</div>
          <h2>What our clients say</h2>
          <p>Real feedback from brands, traders and property teams we've worked with.</p>
        </Reveal>

        <div className="testi-track-wrap">
          <div
            className="testi-track"
            ref={trackRef}
            style={{ transform: `translateX(-${offset}px)` }}
            onMouseEnter={pause}
            onMouseLeave={resume}
          >
            {testimonials.map((t, i) => (
              <div className="testi-card" key={t.name} ref={i === 0 ? cardRef : null}>
                <div className="stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="quote">"{t.quote}"</p>
                <div className="testi-person">
                  <div className="avatar">{t.initials}</div>
                  <div><b>{t.name}</b><span>{t.role}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="testi-controls">
          <button aria-label="Previous testimonial" onClick={prev}><ChevronLeft size={20} strokeWidth={2} /></button>
          <button aria-label="Next testimonial" onClick={next}><ChevronRight size={20} strokeWidth={2} /></button>
        </div>
      </div>
    </section>
  );
}
