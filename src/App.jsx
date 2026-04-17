import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import CrowdFlow from './pages/CrowdFlow';
import Guidance from './pages/Guidance';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="crowd-flow" element={<CrowdFlow />} />
        <Route path="guidance" element={<Guidance />} />
      </Route>
    </Routes>
  );
}

export default App;
