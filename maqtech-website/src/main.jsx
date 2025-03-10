import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import About from '../src/Pages/About.jsx'
import Services from '../src/Pages/Services.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
