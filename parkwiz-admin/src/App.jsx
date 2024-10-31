import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AdminDashboard from './components/AdminDashboard';
import CustomersPage from './pages/CustomersPage';
import ParkingSpacesPage from './pages/ParkingSpacesPage';
import TransactionsPage from './pages/TransactionsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="customers" element={<CustomersPage />} />
          <Route path="parking-spaces" element={<ParkingSpacesPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;