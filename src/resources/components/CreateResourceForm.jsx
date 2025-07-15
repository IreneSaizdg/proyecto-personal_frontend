import React, { useState } from 'react';
import { useUser } from '../../hooks/useUser';
import { useNavigate } from 'react-router';
import { fetchCall } from '../../utils/fetchCall';

export const CreateResourceForm = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    newTag: '',
    tags: [],
    newLink: '',
    links: [],
    public: false,
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({ ...formData, [name]: newValue });
  };

  const handleAddTag = () => {
    if (formData.newTag.trim() !== '') {
      setFormData({
        ...formData,
        tags: [...formData.tags, formData.newTag.trim()],
        newTag: '',
      });
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const handleAddLink = () => {
    if (formData.newLink.trim() !== '') {
      setFormData({
        ...formData,
        links: [...formData.links, formData.newLink.trim()],
        newLink: '',
      });
    }
  };

  const handleRemoveLink = (linkToRemove) => {
    setFormData({
      ...formData,
      links: formData.links.filter((link) => link !== linkToRemove),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const payload = {
      user_id: user.id,
      title: formData.title,
      description: formData.description,
      image: formData.image || 'default.png',
      tags: formData.tags,
      links: formData.links,
      public: formData.public,
    };

    try {
      await fetchCall('http://localhost:5000/api/v1/resources', 'POST', null, payload);
      setMessage('✅ ¡Recurso creado con éxito!');
      setTimeout(() => navigate('/my-resources'), 1500);
    } catch (error) {
      console.error('Error creando el recurso:', error.message);
      setMessage('❌ Hubo un error al crear el recurso.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container d-flex flex-column border border-1 rounded-3 py-4 px-4 p-5 my-5">
      <input name="title" value={formData.title} onChange={handleInputChange} type="text" className="form-control mb-4" placeholder="* Title" required />

      <textarea name="description" value={formData.description} onChange={handleInputChange} className="form-control mb-4" placeholder="Description" rows={3} />

      <input name="image" value={formData.image} onChange={handleInputChange} type="text" className="form-control mb-4" placeholder="Image" />

      <div className="input-group mb-2">
        <input
          name="newTag"
          value={formData.newTag}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="* Add new tag (at least one)"
        />
        <button type="button" className="btn btn-outline-secondary" onClick={handleAddTag}>➕</button>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {formData.tags.map((tag, idx) => (
          <span key={idx} className="d-flex align-items-center bg-light border rounded-pill px-3 py-1">
            {tag}
            <button type="button" className="btn p-0 ms-2" onClick={() => handleRemoveTag(tag)}>×</button>
          </span>
        ))}
      </div>

      <div className="input-group mb-2">
        <input
          name="newLink"
          value={formData.newLink}
          onChange={handleInputChange}
          type="text"
          className="form-control"
          placeholder="Add new link"
        />
        <button type="button" className="btn btn-outline-secondary" onClick={handleAddLink}>➕</button>
      </div>

      <div className="d-flex flex-wrap gap-2 mb-4">
        {formData.links.map((link, idx) => (
          <span key={idx} className="d-flex align-items-center bg-light border rounded-pill px-3 py-1">
            {link}
            <button type="button" className="btn btn-sm p-0 ms-2" onClick={() => handleRemoveLink(link)}>×</button>
          </span>
        ))}
      </div>

      <div className="form-check form-switch mb-4">
        <label className="form-check-label" htmlFor="publicSwitch">public</label>
        <input
          className="form-check-input"
          type="checkbox"
          name="public"
          id="publicSwitch"
          checked={formData.public}
          onChange={handleInputChange}
        />
      </div>

      {message && <div className="alert alert-info text-center bg-red">{message}</div>}

      <button type="submit" className="btn btn-warning w-100">Create card 📦</button>
    </form>
  );
};




// COMPONENTE INICIAL (sin funcionamiento)
// import React from 'react'

// export const CreateResourceForm = () => {
//   return(
//     <form className="container d-flex flex-column border border-1 rounded-3 py-4 px-4 p-5 my-5">
      
//       <input type="text" className="form-control mb-4" placeholder="* Title"/>

//       <textarea className="form-control mb-4" placeholder="Description" rows={3}/>

//       <input type="text" className="form-control mb-4" placeholder="Image"/>

//       <input type="text" className="form-control mb-2" placeholder="* Add new tag (at least one)"/>
//       <div className="d-flex flex-wrap gap-2 mb-4">
//         <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
//           Tag 1 <button type="button" className="btn p-0 ms-1">×</button>
//         </span>
//         <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
//           Tag 2 <button type="button" className="btn p-0 ms-1">×</button>
//         </span>
//       </div>

//       <input type="text" className="form-control mb-2" placeholder="Add new link"/>
//       <div className="d-flex flex-wrap gap-2 mb-4">
//         <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
//           Link 1 <button type="button" className="btn btn-sm p-0 ms-1">×</button>
//         </span>
//       </div>

//       <div className="d-flex gap-3 align-items-end">
//         <p className=''>public</p>
//         <div className="form-check form-switch mb-3 d-flex flex-row gap-5">
//           <input className="form-check-input" type="checkbox" id="publicSwitch"/>
//         </div>
//       </div>

//       <button type="submit" className="btn btn-warning w-100"> Create card 📦</button>
//     </form>
//   );
// }