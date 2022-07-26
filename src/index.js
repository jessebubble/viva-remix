import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Animation from './components/animation';
import Pricing from './components/pricing';
import About from './components/about';
import Contact from './components/contact';
import Design from './components/design';
import Logo from './components/logo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/animation" element={<Animation />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/design" element={<Design />} />
      <Route path="/logo" element={<Logo />} />
    </Routes>
  </BrowserRouter>
);