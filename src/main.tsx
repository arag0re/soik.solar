import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Imprint from './pages/Imprint'
import PrivacyPage from './pages/Privacy'
import AboutPage from './pages/About'
import ReferenzenPage from './pages/References'
import ServicePage from './pages/Services'
import ContactPage from './pages/Contact'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <HashRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/references" element={<ReferenzenPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
         </Routes>
      </HashRouter>
   </React.StrictMode>,
)
