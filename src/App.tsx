import './App.css';
import Header from './components/Header';
import ScrollHero from './components/ScrollHero';
import ProductShowcase from './components/ProductShowcase';
import HowItWorks from './components/HowItWorks';
import Capabilities from './components/Capabilities';
import TeamControl from './components/TeamControl';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Guides from './components/Guides';
import FinalCTA from './components/FinalCTA';
import { LaunchProvider } from './components/LaunchActions';

export default function App() {
  return <LaunchProvider>
    <a className="skip-link" href="#product">تجاوز المقدمة إلى المنصة</a>
    <Header />
    <main className="site">
      <ScrollHero />
      <ProductShowcase />
      <HowItWorks />
      <Capabilities />
      <TeamControl />
      <Pricing />
      <FAQ />
      <Guides />
      <FinalCTA />
    </main>
    <footer className="site-footer"><span dir="ltr">CONNECT WASL</span><span>التواصل في مكانه الصحيح.</span></footer>
  </LaunchProvider>;
}
