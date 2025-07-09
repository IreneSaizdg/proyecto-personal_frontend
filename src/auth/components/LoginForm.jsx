import React from 'react'

export const LoginForm = () => {
  return (
    <section className="container d-flex flex-column align-items-center justify-content-center my-5 border border-1 rounded-3 py-4 px-4">

      <form className='w-100 my-3 px-4'>
        <div className="mb-3">
          <label htmlFor="registerEmail" className="fw-bold form-label">Your Email</label>
          <input
            type="email"
            className="form-control"
            id="registerEmail"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="registerPassword" className="fw-bold form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="registerPassword"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="btn btn-dark w-100 mt-4 mb-2"> Login </button>
      </form>

      <p>or</p>

      <button className="btn btn-light w-100 d-flex align-items-center justify-content-center border rounded-pill px-4 py-2">
        <span className='me-2'>Sign in with Google</span>
        <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo" className="me-3" width="20" height="20"></img>
      </button>
      
    </section>
  )
}
