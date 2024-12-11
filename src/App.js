import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import FAQ from './components/views/Faq';
import Works from './components/views/Works'
import Testimonials from './components/views/Testimonials'
import Services from './components/views/Services'
import WhyUs from './components/views/WhyUs'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/works' element={<Works />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/services' element={<Services />} />
          <Route path='/whyus' element={<WhyUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;