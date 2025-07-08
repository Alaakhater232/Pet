import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { IoIosCamera } from "react-icons/io";

export default function Manageprofile() {
  const [selectImage, setSelectImage] = useState(null);
  const [isEditing, setIsEditing] = useState(true);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectImage(imageURL);
    }
  };
  return (
    <Fragment>
      <nav aria-label="breadcrumb" className='container-fluid d-flex align-items-center justify-content-between w-100' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', marginTop: '20px', padding: '10px 40px', borderRadius: '8px' }} >
        <span className='fw-bold'>Profile</span>
        <ol className="breadcrumb mb-0 py-3 text-align-center" >
          <li className="breadcrumb-item"><Link to="/" className='text-decoration-none' style={{ color: '#D9A741' }}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          <li className="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
      </nav>
      <div className='container-fluid mt-4'>
        <div className='row  gap-5'>
          <div className='col-4'>
            <div className="col-12 position-relative w-100">
              <img className='w-100 rounded' src={selectImage ? selectImage : "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} alt="profile image" width={400} height={380} />
              <IoIosCamera size={30}
                onClick={() => document.getElementById("inputfile").click()}
                style={{
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  color: '#D9A741',
                  backgroundColor: '#fff',
                  borderRadius: '50%',
                  padding: '5px',
                  cursor: 'pointer'
                }} />
            </div>
            <div class="input-group my-3 w-75">
              <input type="file" class="form-control d-none" id="inputfile" onChange={handleImageChange} />
            </div>
          </div>
          <div className='col-7'>
            <form action="#">
              <div className="mb-3">
                <label for="profile-name" className="form-label">Name</label>
                <input type="text" className="form-control" id="profile-name" aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label for="profile-email" className="form-label">Email</label>
                <input type="email" className="form-control" id="profile-email" />
              </div>
              <div className="mb-3">
                <label for="phone" className="form-label">Password</label>
                <input type="tel" className="form-control" id="phone" />
              </div>
              <div className="mb-3">
                <label for="address" className="form-label">Address</label>
                <input type="text" className="form-control" id="address" aria-describedby="emailHelp" />
              </div>
              {!isEditing ? (
                <div className="d-flex gap-5 align-items-center justify-content-between">
                  <button type="button" className="btn text-white bg-danger w-50" onClick={() => setIsEditing(!isEditing)}>Cancel</button>
                  <button type="button" className="custom-button w-50" onClick={() => setIsEditing(!isEditing)}>Save</button>
                </div>
              ) : (
                <button type="button" className="custom-button w-100" onClick={() => setIsEditing(!isEditing)}>Edit Profile</button>
              )
              }
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
