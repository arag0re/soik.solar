import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Imprint from './pages/Imprint'
import PrivacyPage from './pages/Privacy'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
   <React.StrictMode>
      <HashRouter>
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/privacy" element={<PrivacyPage />} />
         </Routes>
      </HashRouter>
   </React.StrictMode>,
)
