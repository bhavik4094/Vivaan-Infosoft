import Contact from '../components/Contact.jsx';

export default function ContactPage() {
  return (
    <>
      <header className="page-hero">
        <div className="container">
          <div className="eyebrow">Get In Touch</div>
          <h1>Let's build your next <span className="grad-text">platform</span>.</h1>
          <p>Tell us about your brand, your trading desk, or your property portfolio — we'll get back within one business day.</p>
        </div>
      </header>
      <Contact hideHead />
    </>
  );
}
