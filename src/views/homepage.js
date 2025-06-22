import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../middleware/authcontext';

function Homepage() {
  const { user } = useContext(AuthContext);
  return (
    <div className="container mt-5">
      <h1>Welcome{user ? `, ${user.name}` : ''}!</h1>
      <nav className="mb-4">
        <Link className="btn btn-outline-secondary me-2" to="/">Home</Link>
        {!user && <Link className="btn btn-primary" to="/sign-in">Sign In</Link>}
      </nav>
      <p>This is the Network+ study app homepage.</p>
    </div>
  );
}

export default Homepage;