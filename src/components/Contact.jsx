import Reveal from './Reveal.jsx';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact({ hideHead = false }) {
  return (
    <section id="contact">
      <div className="container">
        <Reveal className="contact-info contact-info-solo">
          {!hideHead && (
            <>
              <div className="eyebrow">Get In Touch</div>
              <h2 style={{ fontSize: 'clamp(1.8rem,3.6vw,2.6rem)', marginBottom: 18 }}>Let's build your next platform</h2>
              <p style={{ color: 'var(--muted)', marginBottom: 10, maxWidth: '44ch' }}>
                Tell us about your brand, your trading desk, or your property portfolio — we'll get back within one business day.
              </p>
            </>
          )}

          <div className="info-row">
            <div className="info-icon"><MapPin size={20} strokeWidth={1.75} /></div>
            <div><h4>Studio Address</h4><p>A-307, Empire Business Hub, Sola, Science City Road, Ahmedabad, GJ – 380060, India</p></div>
          </div>
          <div className="info-row">
            <div className="info-icon"><Mail size={20} strokeWidth={1.75} /></div>
            <div><h4>Email</h4><p><a href="mailto:hr.codersh@gmail.com">Vivaan Infosoft</a></p></div>
          </div>
          <div className="info-row">
            <div className="info-icon"><Phone size={20} strokeWidth={1.75} /></div>
            <div><h4>Phone / WhatsApp</h4><p>+91 96461 7700</p></div>
          </div>
          <div className="info-row">
            <div className="info-icon"><Clock size={20} strokeWidth={1.75} /></div>
            <div><h4>Working Hours</h4><p>Mon – Sat, 9:30 AM – 7:00 PM</p></div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
