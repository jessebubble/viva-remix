import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Discover from './components/discover';
import Pricing from './components/pricing';
import About from './components/about';
import Contact from './components/contact';
import Design from './components/design';
import Remote from './components/remote';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/design" element={<Design />} />
      <Route path="/remote" element={<Remote />} />
    </Routes>
  </BrowserRouter>
);