import { Link } from 'react-router-dom';
import { AtSign, Link2, Hash, MessageCircle, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><span className="logo-mark">VI</span> Vivaan Infosoft</Link>
            <p>A digital growth studio building social media systems, bullion trading platforms and real estate portals.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram"><AtSign size={18} strokeWidth={1.75} /></a>
              <a href="#" aria-label="LinkedIn"><Link2 size={18} strokeWidth={1.75} /></a>
              <a href="#" aria-label="X / Twitter"><Hash size={18} strokeWidth={1.75} /></a>
              <a href="#" aria-label="WhatsApp"><MessageCircle size={18} strokeWidth={1.75} /></a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Services</h5>
            <Link to="/services">Social Media Marketing</Link>
            <Link to="/services">Bullion Platforms</Link>
            <Link to="/services">Real Estate Portals</Link>
            <Link to="/services">Web &amp; App Development</Link>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <Link to="/case-studies">Case Studies</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-col">
            <h5>Live Products</h5>
            <a href="https://ssbullion.codersh.com/" target="_blank" rel="noopener">SS Bullion <ExternalLink size={13} strokeWidth={2} /></a>
            <a href="https://sk-properties-ebon.vercel.app/" target="_blank" rel="noopener">SK Property <ExternalLink size={13} strokeWidth={2} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Vivaan Infosoft. All rights reserved.</span>
          <span>Designed &amp; built in Ahmedabad, India</span>
        </div>
      </div>
    </footer>
  );
}
