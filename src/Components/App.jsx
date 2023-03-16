import "./main.css";

import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import Works from './Works/Works';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
