import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div
      className="position-relative min-vh-100 d-flex justify-content-center align-items-center px-3"
      style={{
        background: 'radial-gradient(circle at center, #000 10%, #1BBE1C 50%, #22251E 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Ghost Image - partially behind the card */}
      <div
        className="position-absolute d-none d-md-block"
        style={{
          right: '5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '400px',
          zIndex: 0,
        }}
      >
        <img
          src="/images/simonghost.png"
          alt="Ghost"
          className="img-fluid"
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Login Card - centered */}
       <div
  className="bg-black text-white p-4 rounded-4 shadow-lg text-center w-100"
  style={{ maxWidth: '460px', zIndex: 2 }}
>

        <img className="mb-2" src="/images/wwlogo.png" alt="Logo" width="55" />
        <br />
        <img className="mb-4" src="/images/join.png" alt="Login Text" width="220" />

        {/* Social Icons */}
        <div id='aa' className="d-flex justify-content-center gap-3 fs-4 mb-3">
          <i className="fab fa-google" style={{ color: '#DB4437' }}></i>
          <i className="fab fa-facebook" style={{ color: '#1877F2' }}></i>
          <i id='disc' className="fab fa-discord" style={{ color: '#ffffff' }}></i>
          <i className="fab fa-x-twitter" style={{ color: 'black' }}></i>
        </div>

        {/* Divider */}
         <div className="d-flex align-items-center text-secondary my-3">
          <hr className="flex-grow-1" />
          <span className="px-2 fw-bold">OR</span>
          <hr className="flex-grow-1" />
        </div>


        {/* Login Form */}
        <form className="text-start">
          <div className="mb-3">
            <label className="form-label">Email</label>
          <input
  type="email"
  className="form-control bg-dark text-white border-secondary"
  placeholder="Email"
  style={{ color: 'white', '::placeholder': { color: 'gray' } }}
/>

          </div>
          <div className="mb-2">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Password"
            />
          </div>
          <div className="text-end mb-3">
            <Link to="#" className="small text-light text-decoration-none">Forgot your password?</Link>
          </div>
          <p className='dx'>By signing up you agree to out Terms and Conditions our Privacy Policy explains how much we protect our  data</p>

          <div className="text-center">
            <button type="submit" className="btn btn-light w-50">Log in</button>
          </div>
          <p className="dx text-center mt-4 mb-0 small">
            Already have an XG Account? <Link to="#" className="text-white text-decoration-underline fw-bold">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
