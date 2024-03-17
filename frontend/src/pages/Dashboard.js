// frontend/src/pages/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to your dashboard. Here you can manage your tasks.</p>
      <Link to="/tasks">View Tasks</Link>
    </div>
  );
};

export default Dashboard;
