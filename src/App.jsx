import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CertificatePage from './pages/CertificatePage';
import BlankPage from './pages/BlankPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ROOT: Completely blank white page */}
        <Route path="/" element={<BlankPage />} />

        {/* CERTIFICATE: Dynamic student ID route */}
        <Route path="/cridential/:studentId" element={<CertificatePage />} />

        {/* UNKNOWN ROUTES: Blank page */}
        <Route path="*" element={<BlankPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
