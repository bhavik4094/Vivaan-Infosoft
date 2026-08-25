import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { TrendingUp, Coins, Building2, Code2 } from 'lucide-react';

const services = [
  { to: '/services#social', icon: TrendingUp, title: 'Social Media Marketing', sub: 'Growth systems for brands' },
  { to: '/services#bullion', icon: Coins, title: 'Bullion Trading Platforms', sub: 'Live rates & booking desks' },
  { to: '/services#realestate', icon: Building2, title: 'Real Estate Portals', sub: 'Listings, search & leads' },
  { to: '/services#webdev', icon: Code2, title: 'Web & App Development', sub: 'Fast, modern, scalable' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onEsc = (e) => {
      if (e.key === 'Escape') {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const navLinkClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeAll}>
          <span className="logo-mark">VI</span> Vivaan Infosoft
        </Link>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" end className={navLinkClass} onClick={closeAll}>Home</NavLink></li>
          <li
            className={`has-dropdown ${dropdownOpen ? 'open' : ''}`}
            onMouseEnter={() => window.matchMedia('(hover:hover)').matches && setDropdownOpen(true)}
            onMouseLeave={() => window.matchMedia('(hover:hover)').matches && setDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) => `nav-top ${isActive ? 'active' : ''}`}
              onClick={(e) => {
                if (window.matchMedia('(max-width: 980px)').matches) {
                  e.preventDefault();
                }
                e.stopPropagation();
                setDropdownOpen((v) => !v);
              }}
            >
              Services <span className="caret"></span>
            </NavLink>
            <div className="dropdown">
              {services.map((s) => (
                <Link to={s.to} key={s.title} onClick={closeAll}>
                  <s.icon size={18} strokeWidth={1.75} className="dropdown-icon" />
                  <span className="dropdown-text">
                    <strong>{s.title}</strong>
                    <span className="sub">{s.sub}</span>
                  </span>
                </Link>
              ))}
            </div>
          </li>
          <li><NavLink to="/case-studies" className={navLinkClass} onClick={closeAll}>Case Studies</NavLink></li>
          <li><NavLink to="/about" className={navLinkClass} onClick={closeAll}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass} onClick={closeAll}>Contact</NavLink></li>
          <li className="nav-links-cta">
            <Link to="/contact" className="btn btn-primary" onClick={closeAll}>Start a Project</Link>
          </li>
        </ul>

        <div className="nav-cta">
          <Link to="/contact" className="btn btn-ghost">Get a Quote</Link>
          <Link to="/contact" className="btn btn-primary">Start a Project</Link>
          <button
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
