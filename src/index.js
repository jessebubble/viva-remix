import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Community from './components/community';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Future from './components/future';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/community" element={<Community />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/future" element={<Future />} />
    </Routes>
  </BrowserRouter>
);