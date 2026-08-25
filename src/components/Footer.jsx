import { Link } from 'react-router-dom';
import { Instagram, Linkedin, ExternalLink } from 'lucide-react';

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12.004 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.756.46 3.47 1.334 4.98L2 22l5.184-1.36a9.93 9.93 0 0 0 4.82 1.23h.004c5.5 0 9.96-4.46 9.96-9.96S17.504 2 12.004 2zm0 18.11h-.003a8.14 8.14 0 0 1-4.15-1.137l-.298-.177-3.076.807.822-3.001-.194-.308a8.13 8.13 0 0 1-1.256-4.334c0-4.497 3.66-8.156 8.159-8.156 2.179 0 4.226.849 5.766 2.39a8.1 8.1 0 0 1 2.389 5.77c0 4.498-3.66 8.146-8.159 8.146z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="logo"><span className="logo-mark">VI</span> Vivaan Infosoft</Link>
            <p>A digital growth studio building social media systems, bullion trading platforms and real estate portals.</p>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram"><Instagram size={18} strokeWidth={1.75} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn"><Linkedin size={18} strokeWidth={1.75} /></a>
              <a href="https://wa.me/919646170700" target="_blank" rel="noopener" aria-label="WhatsApp"><WhatsAppIcon /></a>
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
