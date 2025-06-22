import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './middleware/authcontext';
import PrivateRoute from './middleware/privateroute';
import Homepage from './views/homepage';
import SignIn from './views/signin';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/" element={<PrivateRoute><Homepage /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;