import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './components/Home/Home';
import Error from './components/Error';
import { ImageDetailPage } from './components/ImageDetailPage/ImageDetailPage';
import { Explore } from './components/Explore/Explore';
import { SearchPage } from './components/SearchComponent.tsx/SearchPage';
import { SearchComponent } from './components/SearchComponent.tsx/SearchComponent';

export const App: React.FC = () => {
  return (
    <div className="starter">
      <Router>
        <SearchComponent />
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Home />} />

          <Route path="/photos">
            <Route index element={<Home />} />
            <Route path=":id" element={<ImageDetailPage />} />
          </Route>

          <Route path="/collection" element={<Explore />}>
            <Route path=":tag" element={<Explore />} />
          </Route>

          <Route path="/search" element={<SearchPage />}>
            <Route index element={<SearchPage />} />
          </Route>

          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};
