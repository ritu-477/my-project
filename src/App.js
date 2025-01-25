import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/views/Home';
import About from './components/views/About';
import FAQ from './components/views/Faq';
import Works from './components/views/Works'
import Services from './components/views/Services'
import WhyUs from './components/views/WhyUs'
import Gilded from './components/views/Gilded';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about/:id' element={<About />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/works' element={<Works />} />
          <Route path='/gilded' element={<Gilded/>} />
          <Route path='/services/:id' element={<Services />} />
          <Route path='/whyus' element={<WhyUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;