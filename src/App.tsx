import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home';
import Eror from './components/Eror';
import { ImageDetailPage } from './components/ImageDetailPage';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Router>
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />

          <Route path="/photos">
            <Route index element={<Home />} />
            <Route path=":id" element={<ImageDetailPage />} />
          </Route>

          <Route path="*" element={<Eror />} />
        </Routes>
      </Router>
    </div>
  );
};
