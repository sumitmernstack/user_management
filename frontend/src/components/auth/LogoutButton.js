// frontend/src/components/auth/LogoutButton.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../actions/authActions';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch logout action
    dispatch(logoutUser());
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default LogoutButton;
