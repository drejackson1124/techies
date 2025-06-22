import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './authcontext';

function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/sign-in" replace />;
}

export default PrivateRoute;