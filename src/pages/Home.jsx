import Hero from '../components/Hero.jsx';
import Services from '../components/Services.jsx';
import CaseStudies from '../components/CaseStudies.jsx';
import StatsBand from '../components/StatsBand.jsx';
import Process from '../components/Process.jsx';
import Testimonials from '../components/Testimonials.jsx';
import CtaBand from '../components/CtaBand.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies limit={2} />
      <StatsBand />
      <Process />
      <Testimonials />
      <CtaBand />
    </>
  );
}
