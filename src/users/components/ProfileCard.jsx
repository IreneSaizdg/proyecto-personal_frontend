import React from 'react'

export const ProfileCard = ({ 
    userName="Username", 
    email="username@sampleemail.com", 
    password="******",
    onEdit 
  }) => {

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <article className="card border-0 shadow-lg rounded-4 pb-3 mb-5 px-4 mx-3 mt-3" style={{ maxWidth: '460px', width: '100%' }}>
        <div className="card-body text-center">
          <div className="my-4">
            <img 
              src="https://i.pinimg.com/736x/54/26/8d/54268d10fecbfea6ce0f121daa4c8cff.jpg" 
              alt="Profile" 
              className="rounded-circle img-fluid"
              style={{ width: '160px', height: '160px', objectFit: 'cover' }}
            />
          </div>
          <p className="card-title fs-2 fw-bold mb-2">{userName}</p>

          <p className="card-text text-muted mb-1">{email}</p>
          <p className="card-text text-muted">{password}</p>

          <button onClick={onEdit} className="btn btn-warning mt-4 rounded-pill w-100"> ✏️ Update my profile </button>
        </div>
      </article>
    </div>
  );
}

