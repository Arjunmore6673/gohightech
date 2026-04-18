import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Work from './components/Work';
import Process from './components/Process';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Work />
        <Process />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
