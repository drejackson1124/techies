import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/signin.css';
import helper from '../middleware/hf';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const final = await helper.signUp({username, password, email});
    if(final){
        navigate('/sign-in');
    } else {
        alert('Please try again.');
        return;
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Sign Up w/ <br/> Troop Techies</h2>

        <div className="mb-3">
          <input
            type="text"
            className="form-control auth-input"
            placeholder="Choose a username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            className="form-control auth-input"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control auth-input"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn auth-button btn-signin w-100">
          Create Account
        </button>
      </form>
    </div>
  );
}

export default Signup;
