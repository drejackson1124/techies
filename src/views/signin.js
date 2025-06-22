import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../middleware/authcontext';
import '../styles/signin.css';
import helper from '../middleware/hf';

function SignIn() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const final = await helper.signIn(credentials);
    console.log(final);
    if(final){
        setUser({ name: credentials.username });
        navigate('/');
    } else {
        alert('Something isnt right. Please try again.')
    }
  };

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2 className="text-center mb-4">Troop Techies</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              value={credentials.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="form-control"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-signin w-100">Sign In</button>
          <Link to='/sign-up' className='text-center'>Don't have an account? Click here.</Link>
        </form>
      </div>
    </div>
  );
}

export default SignIn;