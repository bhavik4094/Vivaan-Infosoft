import { useState } from 'react';
import Reveal from './Reveal.jsx';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

const validators = {
  name: (v) => v.trim().length >= 2,
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
  phone: (v) => /^[+]?[\d\s-]{10,15}$/.test(v.trim()),
  service: (v) => v.trim().length > 0,
  message: (v) => v.trim().length >= 10,
};

const errors = {
  name: 'Enter your full name (min 2 characters).',
  email: 'Enter a valid email address.',
  phone: 'Enter a valid 10-digit phone number.',
  service: 'Please select a service.',
  message: 'Please tell us a little about your project (min 10 characters).',
};

const initialValues = { name: '', email: '', phone: '', service: '', message: '' };

export default function Contact({ hideHead = false }) {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState({ text: '', success: false });
  const [sending, setSending] = useState(false);

  const fieldValid = (name) => validators[name](values[name]);
  const fieldState = (name) => {
    if (!touched[name]) return '';
    return fieldValid(name) ? 'valid' : 'invalid';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };
  const handleBlur = (e) => {
    setTouched((t) => ({ ...t, [e.target.name]: true }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allTouched = Object.keys(values).reduce((acc, k) => ({ ...acc, [k]: true }), {});
    setTouched(allTouched);
    const allValid = Object.keys(validators).every((k) => validators[k](values[k]));

    if (!allValid) {
      setStatus({ text: 'Please fix the highlighted fields.', success: false });
      return;
    }

    setSending(true);
    setStatus({ text: 'Sending...', success: false });
    setTimeout(() => {
      setStatus({ text: "Thanks! Your message has been sent — we'll get back within one business day.", success: true });
      setValues(initialValues);
      setTouched({});
      setSending(false);
    }, 900);
  };

  return (
    <section id="contact">
      <div className="container contact-wrap">
        <Reveal className="contact-info">
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

        <Reveal className="form-card">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className={`field ${fieldState('name')}`}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={values.name} onChange={handleChange} onBlur={handleBlur} required />
                <span className="error-msg">{errors.name}</span>
              </div>
              <div className={`field ${fieldState('email')}`}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" value={values.email} onChange={handleChange} onBlur={handleBlur} required />
                <span className="error-msg">{errors.email}</span>
              </div>
            </div>
            <div className="form-row">
              <div className={`field ${fieldState('phone')}`}>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" placeholder="+91 00000 00000" value={values.phone} onChange={handleChange} onBlur={handleBlur} required />
                <span className="error-msg">{errors.phone}</span>
              </div>
              <div className={`field ${fieldState('service')}`}>
                <label htmlFor="service">Service Needed</label>
                <select id="service" name="service" value={values.service} onChange={handleChange} onBlur={handleBlur} required>
                  <option value="" disabled>Select a service</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="bullion">Bullion Platform</option>
                  <option value="realestate">Real Estate Portal</option>
                  <option value="webdev">Web / App Development</option>
                  <option value="other">Something Else</option>
                </select>
                <span className="error-msg">{errors.service}</span>
              </div>
            </div>
            <div className={`field ${fieldState('message')}`}>
              <label htmlFor="message">Project Details</label>
              <textarea id="message" name="message" placeholder="Tell us a bit about your project..." value={values.message} onChange={handleChange} onBlur={handleBlur} required></textarea>
              <span className="error-msg">{errors.message}</span>
            </div>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            <div className={`form-status ${status.success ? 'success' : ''}`}>{status.text}</div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
