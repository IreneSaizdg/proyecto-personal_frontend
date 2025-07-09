import React from 'react'

export const EditResourceForm = () => {
  return(
    <form className="container d-flex flex-column border border-1 rounded-3 py-4 px-4 p-5 my-5">
      
      <input type="text" className="form-control mb-4" placeholder="* Title"/>

      <textarea className="form-control mb-4" placeholder="Description" rows={3}/>

      <input type="text" className="form-control mb-4" placeholder="Image"/>

      <input type="text" className="form-control mb-2" placeholder="* Add new tag (at least one)"/>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
          Tag 1 <button type="button" className="btn p-0 ms-1">×</button>
        </span>
        <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
          Tag 2 <button type="button" className="btn p-0 ms-1">×</button>
        </span>
      </div>

      <input type="text" className="form-control mb-2" placeholder="Add new link"/>
      <div className="d-flex flex-wrap gap-2 mb-4">
        <span className="d-flex align-items-center justify-content-center bg-light text-dark border rounded-pill px-3 py-1">
          Link 1 <button type="button" className="btn btn-sm p-0 ms-1">×</button>
        </span>
      </div>

      <div className="d-flex gap-3 align-items-end">
        <p className=''>Private</p>
        <div className="form-check form-switch mb-3 d-flex flex-row gap-5">
          <input className="form-check-input" type="checkbox" id="privateSwitch"/>
        </div>
      </div>

      <button type="submit" className="btn btn-warning w-100"> Edit resource ✏️</button>
    </form>
  );
}

