import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { BiSearchAlt2 } from "react-icons/bi";
import { FaEye } from "react-icons/fa";

export default function Manageclients() {

  return (
    <Fragment>
      <nav aria-label="breadcrumb" className='container-fluid d-flex align-items-center justify-content-between mb-5' style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', marginTop: '20px', padding: '10px 40px', borderRadius: '8px' }} >
        <span className='fw-bold'>Clients</span>
        <ol className="breadcrumb mb-0 py-3 text-align-center" >
          <li className="breadcrumb-item"><Link to="/" className='text-decoration-none' style={{ color: '#D9A741' }}>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
          <li className="breadcrumb-item active" aria-current="page">Clients</li>
        </ol>
      </nav>





      {/* value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} */}
      <div className="d-flex justify-content-between align-items-center my-3">
        <div className="search-box w-50 position-relative">
          <input
            className="form-control pe-5"
            type="text"
            placeholder="Search by name, email, or responsible doctor"

          />
          <BiSearchAlt2
            size={20}
            className="position-absolute"
            style={{ top: '50%', right: '15px', transform: 'translateY(-50%)', color: '#888' }}
          />
        </div>
        {/* value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} */}
        <select className="form-select w-25" >
          <option value="all" >All</option>
          <option value="booked" >Booked</option>
          <option value="inactive" >Completed</option>
        </select>
      </div>
      <div className="patient-table mt-4 bg-white shadow rounded w-100">
        <table className="table">
          <thead className="table-light py-3">
            <tr className="">
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Clinic</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">-</td>
              <td className="px-4 py-3">
                <select className="form-select w-50" aria-label="Default select example">
                  <option value="1">completed</option>
                  <option value="2">booked</option>
                </select>
              </td>
              <td className="px-4 py-3">
                <button type="button" className="btn border-0 p-0 mb-1" data-bs-toggle="modal" data-bs-target="#review">
                  <FaEye cursor={"pointer"} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}
